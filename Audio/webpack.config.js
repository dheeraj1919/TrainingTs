const path= require('path');
module.exports={
    entry:'./src/index.ts',
    module:{
        rules:[
            {
            test: /\.ts$/,
            use:'ts-loader',
            include:[path.resolve(__dirname,'src')]
            },
            { test: /\.css$/, 
                use: ["style-loader","css-loader"] }
        ]

    },
    resolve:{extensions:[".ts",".js"]},
    output:{
        filename:"index.js",
        path:path.resolve(__dirname,"public")

    },
    devServer:{
        contentBase:path.join(__dirname,"public"),
        port:"8088",
        compress:true
    }
}