const HTMLWebpackPlugin = require('html-webpack-plugin');
const WebpackObfuscator = require('webpack-obfuscator');
const WebpackUtil = require( './config/webpack.utils.cjs' );
const WebpackAlias = require('./config/webpack.alias.cjs');
const Dotenv = require('dotenv-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpackConfigAlias = WebpackUtil.webpackLibraryAliasConfiguration(['e-ui-react']);
const webpackAliasInfo = WebpackAlias.webpackAliasInfo();
const Path = require('path');

const baseUrl = '/';

module.exports = (env, options)=>{
const isDevelopment = options.mode === 'development';
console.log("isDevelopment", isDevelopment);
return {
 mode: 'development',
 performance: {
    hints: false,
   // maxEntrypointSize: 512000,
    maxAssetSize: 512000
},
entry: './src/main/index.js',
 output: {
    path: Path.resolve(__dirname, 'dist/'),
    filename: '[name].bundle.js',  // Ensure Webpack generates an actual JS file
    publicPath: baseUrl, 
    /* When we have URL Routes (react-router-dom), the  build is loading the scripts in Relative path -
     * To resolve it we used publicPath
     */ 
},
 module:{
    rules:[
        {
            test: /\.txt$/i,
            use: 'raw-loader',
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: [ "file-loader" ],
        },/*
        {
            test: /\.(woff|woff2|ttf)$/,
            use: [ "url-loader" ],
        }, */
        {
            test:/\.css$/,
            use: [ "style-loader", "css-loader" ]
        },
        {
            test:/\.scss$/,
            use: [ "style-loader", "css-loader", "sass-loader" ]
        },
        {
            test:/\.sass$/,
            use: [ "style-loader", "css-loader", "sass-loader" ]
        },
        {
            test: /\.js$/,
            use: [{
                loader: "babel-loader",
                options: {
                  presets: ['@babel/preset-env']
                }
              }]
        }
    ]
 },
 plugins:[
  new Dotenv({
    path: isDevelopment ? './.env.development' : './.env.production',
  }),
  new HTMLWebpackPlugin({
    template: Path.resolve(__dirname, "public","index.html")
  }),
  // Copy files from the public folder to the dist folder
  new CopyWebpackPlugin({
    patterns: [
      {
        from:  Path.join(__dirname, 'public/assets'),
        to: Path.join(__dirname, 'dist/assets'),
        globOptions: {
            dot: true
        }
      },
      {
        from:  Path.join(__dirname, 'public/fonts'),
        to: Path.join(__dirname, 'dist/fonts'),
        globOptions: {
            dot: true
        }
      },
      {
        from:  Path.join(__dirname, 'public/.htaccess'),
        to: Path.join(__dirname, 'dist'),
        globOptions: {
            dot: true
        }
      },
      {
        from:  Path.join(__dirname, 'public/robots.txt'),
        to: Path.join(__dirname, 'dist'),
        globOptions: {
            dot: true
        }
      },
      {
        from:  Path.join(__dirname, 'public/sitemaps'),
        to: Path.join(__dirname, 'dist/sitemaps'),
        globOptions: {
            dot: true
        }
      },
      {
        from:  Path.join(__dirname, 'nexus'),
        to: Path.join(__dirname, 'dist/nexus'),
        globOptions: {
            dot: true
        }
      }
    ]
  })
 ],
 optimization:{
    splitChunks : { chunks: "all" }
 },
 resolve: {
    symlinks: false,
    alias: Object.assign( webpackConfigAlias, webpackAliasInfo)
 },
 devServer: { // Needed to make react-router-dom to work
    historyApiFallback: true,
    port: 9228, // Replace with your desired port number
 }
}
};