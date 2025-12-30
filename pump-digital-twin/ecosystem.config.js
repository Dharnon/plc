module.exports = {
    apps: [{
        name: "pump-digital-twin",
        script: "./server/dist/main.js",
        env: {
            NODE_ENV: "production",
            PORT: 3000
        }
    }]
}
