const path = require('path');
const htmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js' ,
    output: {
        path: path.join(__dirname, '/dist'),
        filename : 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/ ,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
                
            },{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                loader: 'url-loader?limit=100000' 
            }
        ]
    },
    plugins: [
        new htmlWebPackPlugin({
                template: './src/index.html'
            })
    ] , 
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        hot: true
     },
}