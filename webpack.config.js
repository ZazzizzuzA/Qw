const path = require("path"),
    webpack = require("webpack"),
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, "src", "index.js"),
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
    },
    resolve: {
        extensions: [".js", ".json", ".scss", ".css"],
        alias: {
            vue: "vue/dist/vue.min",
            src: path.join(__dirname, "src"),
            modules: path.join(__dirname, "src", "modules")
        },
    },
    watch: true,
    module: {
        rules: [{
                test: /\.css$/,
                loader: "css-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader" }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                loader: "file-loader"
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                options: {
                    limit: 8000
                },
                loader: "url-loader"
            },
            {
                test: /\.vue$/,
                use: [
                    { loader: "vue-loader" }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "./index.html" }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),

        new CopyWebpackPlugin([{ from: 'assets/**/*' }]),
    ]
}