const path=require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
module.exports={
    entry:"./src/index.ts",
    output:{
        path:path.join(__dirname,"dist"),
        filename:"[name].js"
    },
    mode:"development",
    resolve:{
        extensions:['.ts', '.js']
    },
    optimization:{
        minimize: true
    },
    module: {
        rules: [
            {

            test: /\.ts$/i,
            use:"ts-loader",
            exclude:/node_modules/

        },
        {
            test:/\.(webp|png|jpe?g|gif|svg|mp3|ogg|mp4|weba|woff|woff2|eot|ttf|otf)$/,
            loader:"file-loader",
            options:{
                name:'[path][name].[ext]',
                context:'public'
            }
        }
    ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            title: "PIXI Training",
            inject: "body",
            meta:{
                'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no',
            }
        }),
        new CopyPlugin({
            patterns: [{
                from: './src/assests/**',
                to: './assests'
            }]
        }),
        new webpack.ProgressPlugin(),
    ],
    devServer: {
        open:true,
        disableHostCheck:true,
        port: 8080,
        headers: {
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
        }
    }
}