const { resolve } = require('path')

module.exports = {
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                badexample: resolve(__dirname, 'badexample/index.html'),
                qa: resolve(__dirname, 'qa/index.html'),
                security: resolve(__dirname, 'security/index.html')
            }
        }
    }
}