var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: ['./src/index.js'],
    output: {
        filename: './build/index.js'
    },
    module: {
        loaders: [ {
            test: /\.js$/,
            include: path.resolve(__dirname, 'src'),
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }
        ]
    }
}