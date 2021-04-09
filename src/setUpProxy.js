const { createProxyMiddleware } = require('http-proxy-middleware');

// src/setupProxy.js
module.exports = function(app) {
    app.use(
        createProxyMiddleware('/kobisopenapi', {
            target: "http://www.kobis.or.kr", //
            changeOrigin: true
        })
    );

    app.use(
        createProxyMiddleware('/v1', {
            target: "https://openapi.naver.com", //
            changeOrigin: true
        })
    );
};