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
        "app": "./client/boot.ts",
        "styles": "./client/sass/application.scss"
    },
    output: {
        "filename": "[name].js",
        "publicPath": "./public/",
        "path": dirPath("./public/")
    },
    resolve: {
        extensions: ["", ".js", ".ts", ".html", ".sass", ".css"],
        root: [
            dirPath(""),
            dirPath("/sass")
        ]
    },
    module: {
        loaders: [
            {
                test: /\.ts/,
                loader: "ts"
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.css$/,
                loaders: ["style", "css"]
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