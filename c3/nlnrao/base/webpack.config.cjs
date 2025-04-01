const HTMLWebpackPlugin = require('html-webpack-plugin');
const WebpackObfuscator = require('webpack-obfuscator');
const Dotenv = require('dotenv-webpack');
const Path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackUtil = require( './config/webpack.utils.cjs' );
const webpackConfigAlias = WebpackUtil.webpackLibraryAliasConfiguration(['e-ui-react']);
const webpackAliasInfo = {
  '@Assets': Path.resolve(__dirname, 'public/assets'),
  
   // Main Module
  '@MainComponents': Path.resolve(__dirname, 'src/main/components'),
  '@MainConfig': Path.resolve(__dirname, 'src/main/config'),
  '@MainPages': Path.resolve(__dirname, 'src/main/pages'),
  '@MainTemplates': Path.resolve(__dirname, 'src/main/templates'),
  '@MainStaticData': Path.resolve(__dirname, 'src/main/static-data'),

   // Showcase Module
  '@ShowcaseComponents': Path.resolve(__dirname, 'src/showcase/components'),
  '@ShowcaseConfig': Path.resolve(__dirname, 'src/showcase/config'),
  '@ShowcasePages': Path.resolve(__dirname, 'src/showcase/pages'),
  '@ShowcaseTemplates': Path.resolve(__dirname, 'src/showcase/templates'),
  '@ShowcaseStaticData': Path.resolve(__dirname, 'src/showcase/static-data'),
  // Needed when library is linked via `npm link` to app
  /** This is implemented when the React Hooks are not working under the library */
  react: Path.resolve("./node_modules/react"),
  // filename:'showcase/main.js',
  // publicPath: '/'
};

const baseUrl = '/';

const mainConfig = (env, options) =>{
  console.log("env", env);
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

const showcaseConfig = (env, options) =>{
  console.log("env", env);
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
      alias: Object.assign( webpackConfigAlias, webpackAliasInfo)
   },
   devServer: { // Needed to make react-router-dom to work
      historyApiFallback: true,
      port: 9229, // Replace with your desired port number
   }
  }
};

module.exports = (env, options)=>{
  if (env.target === 'main') {
    return mainConfig(env,options);
  } else if (env.target === 'showcase') {
    return showcaseConfig(env,options);
  }
  return [mainConfig, showcaseConfig]; // Default case (build both but not for dev server)
};