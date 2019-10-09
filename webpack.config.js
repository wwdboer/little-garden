const path = require('path');

module.exports = {
    entry: './app.js',
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js']
    },
    devtool: 'source-map',
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
};