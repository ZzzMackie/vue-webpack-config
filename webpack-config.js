const Path = require('path');
// const VueLoaderPlugin = require('vue-loader/lib/plugin');

let config = {
    entry: './src/main.js',
    output: {
        filename: 'vendor.build.js',
        path: Path.jion(__dirname, 'dist')
    },
    mode: 'production',
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        },
        {
            test: /\.(png|jpg|jpeg|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 1024, // 判断图片的大小   如果小于1024就会转换成base64
                    name: '[name].[ext]' // 输出图片的名字  ext是扩展名
                }
            }],
    }
    // plugins: [
    //     new VueLoaderPlugin()
    // ]
}
module.exports = config