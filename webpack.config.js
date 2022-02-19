const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/app/index.js",
    mode: "development",
    output: {
        path: `${__dirname}/src/public`,
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ["@babel/preset-env", { targets: "defaults"}]
                        ]
                    }
                }
                
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader"
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
            filename: "index.html"
        })
    ]
}