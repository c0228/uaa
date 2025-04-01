const HTMLWebpackPlugin = require('html-webpack-plugin');
const WebpackObfuscator = require('webpack-obfuscator');
const WebpackUtil = require( './config/webpack.utils.cjs' );
const Dotenv = require('dotenv-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpackConfigAlias = WebpackUtil.webpackLibraryAliasConfiguration(['e-ui-react']);
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
entry: './src/showcase/index.js',
 output: {
    path: Path.resolve(__dirname, 'dist/showcase/'),
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
        from:  Path.join(__dirname, 'public/.htaccess'),
        to: Path.join(__dirname, 'dist/showcase'),
        globOptions: {
            dot: true
        }
      },
      {
        from:  Path.join(__dirname, 'public/robots.txt'),
        to: Path.join(__dirname, 'dist/showcase'),
        globOptions: {
            dot: true
        }
      },
      {
        from:  Path.join(__dirname, 'nexus'),
        to: Path.join(__dirname, 'dist/showcase/nexus'),
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
    alias: Object.assign( webpackConfigAlias, {
        '@Assets': Path.resolve(__dirname, 'public/assets'),
        '@Components': Path.resolve(__dirname, 'src/main/components'),
        '@MainConfig': Path.resolve(__dirname, 'src/main/config'),
        '@ShowcaseConfig': Path.resolve(__dirname, 'src/showcase/config'),
        '@Pages': Path.resolve(__dirname, 'src/main/pages'),
        '@Templates': Path.resolve(__dirname, 'src/main/templates'),
        '@StaticData': Path.resolve(__dirname, 'src/main/static-data'),
        // Needed when library is linked via `npm link` to app
        /** This is implemented when the React Hooks are not working under the library */
        react: Path.resolve("./node_modules/react"),
        // filename:'showcase/main.js',
        // publicPath: '/'
    })
 },
 devServer: { // Needed to make react-router-dom to work
    historyApiFallback: true,
    port: 9229, // Replace with your desired port number
 }
}
};