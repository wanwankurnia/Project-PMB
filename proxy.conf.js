const PROXY_CONFIG = [
    {
      context:[
        "/api"
      ],
      target: "http://localhost:1000/",
      pathRewrite : {
      "^/api" : " "
      },
      changeOrigin : true,
      secure : false
    }
  ]
  module.exports = PROXY_CONFIG;