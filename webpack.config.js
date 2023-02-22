const {resolve} = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isProd = process.env.NODE_ENV === "production";

module.exports = {
    mode: isProd ? "production" : "development",
    entry: {
        app: "./src/main.js"
    },
    output: {
        filename: "[name].js",
        path: resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                // generator: {
                //     outputPath: 'images/',
                // },
                // use: [
                //     {
                //         loader: 'url-loader',
                //         options: {
                //             name: 'images/[name].[ext]',
                //             publicPath: '/images/'
                //         }
                //     }
                // ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                // generator: {
                //     outputPath: 'fonts/',
                // },
                // use: [
                //     {
                //         loader: 'url-loader',
                //         options: {
                //             name: 'fonts/[name].[ext]'
                //         }
                //     }
                // ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    isProd ? MiniCssExtractPlugin.loader : "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: {
                                    tailwindcss: {},
                                    autoprefixer: {},
                                },
                            },
                        },
                    },
                    "sass-loader"
                ],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/index.html",
            chunks: ['app'],
        }),
    ]
};