const path = require('path')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: [
            './index'
        ]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_nodules/, loader: 'babel-loader' }
        ]
    }
}