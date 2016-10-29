var webpack = require("webpack"),
    path = require("path"),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    pluginsList = [
        new ExtractTextPlugin("style.css", {
            allChunks: true
        })
    ];

function dirPath(concatPath) {
    return path.join(__dirname, concatPath);
}

module.exports = {
    devtool: "source-map",
    entry: {
        "app": "./client/boot.ts"
    },
    output: {
        "filename": "[name].js",
        "publicPath": "./public",
        "path": dirPath("./public/")
    },
    resolve: {
        extensions: ["", ".js", ".ts", ".html", ".sass", ".css"]
    },
    module: {
        loaders: [
            {
                test: /\.ts/,
                loader: "ts"
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: "style!css!sass"
            }
        ]
    },
    "plugins": pluginsList,
    devServer: {
        historyApiFallback: true,
        compress: false,
        quiet: false,
        noInfo: false,
        headers: { "X-Custom-Header": "yes" },
        stats: { colors: true },
        port: 5000,
        inline: false,
        watch: true,
        open: true
    }
};