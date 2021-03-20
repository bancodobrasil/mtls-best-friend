package main

import (
	"crypto/tls"
	"crypto/x509"
	"io/ioutil"
	"net/http"

	runtime "github.com/banzaicloud/logrus-runtime-formatter"
	"github.com/gin-gonic/gin"
	"github.com/sirupsen/logrus"
)

func main() {
	logLevel := "info"

	l, err := logrus.ParseLevel(logLevel)
	if err != nil {
		panic("Invalid loglevel")
	}
	formatter := runtime.Formatter{ChildFormatter: &logrus.TextFormatter{
		FullTimestamp: true,
	}}
	formatter.Line = true
	formatter.File = true
	logrus.SetFormatter(&formatter)
	logrus.SetLevel(l)

	logrus.Infof("Starting mTLS BFF Backend...")

	r := gin.Default()

	r.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"responseMessage": "I'm a GET secured by an mTLS!"})
	})

	r.POST("/request-server", func(c *gin.Context) {
		var json map[string]string
		if err := c.ShouldBindJSON(&json); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		mTLSTestEndpoint := json["server"]
		private := json["key"]
		public := json["cert"]
		ca := json["ca"]
		cert, err := tls.X509KeyPair([]byte(public), []byte(private))
		if err != nil {
			logrus.Fatalf("Loading key pair: %s", err)
		}

		caCert := []byte(ca)

		certPool := x509.NewCertPool()
		certPool.AppendCertsFromPEM(caCert)
		conf := &tls.Config{
			Certificates: []tls.Certificate{cert},
			RootCAs:      certPool,
		}

		client := http.Client{
			Transport: &http.Transport{
				TLSClientConfig: conf,
			},
		}

		resp, err := client.Get(mTLSTestEndpoint)
		if err != nil {
			logrus.Fatalf("Sending request: %s", err)
			c.JSON(500, gin.H{"responseMessage": "Interval error requesting the mTLS test endpoint " + mTLSTestEndpoint})
			return
		}

		if resp.StatusCode == http.StatusBadRequest {
			c.JSON(http.StatusBadRequest, gin.H{"responseMessage": "The request to the mTLS test endpoint (" + mTLSTestEndpoint + ") returned a 400 Bad Request error. Maybe the key, cert and CA you provided is not valid?"})
			return
		}

		if resp.StatusCode != http.StatusOK {
			logrus.Fatalf("expected status %d but got %d", http.StatusOK, resp.StatusCode)
			c.JSON(500, gin.H{"responseMessage": "Interval error returned by the mTLS test endpoint " + mTLSTestEndpoint})
			return

		}

		defer resp.Body.Close()
		body, err := ioutil.ReadAll(resp.Body)
		logrus.Infof("Response: %s", body)

		c.JSON(http.StatusOK, gin.H{"responseMessage": resp})
	})

	r.Run("0.0.0.0:4000")

}
