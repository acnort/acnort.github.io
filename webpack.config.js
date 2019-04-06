module.exports = {
    module: {
        rules: [
            {
                test: /\.sass$/,
                use: [{
                    loader: "sass-loader",
                    options: {
                        includePaths: ["./src/styles"]
                    }
                }]
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'file-loader?name=assets/img/[name].[ext]'
            },
        ]
    }
}