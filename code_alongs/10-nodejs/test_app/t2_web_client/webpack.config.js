// look for filenames from the starting point 

// recursively scan content for requires and imports

// bundles everything together into a destination

// the file it generated is the file you add with a single script tag

const path = require('path')

const config = {
  mode: 'development',
  
  entry: {
    src: './src' //  by convention, it looks for src/index.js
  },
  output: {     //join method so that the path is created based on which OS user is using (e.g / for mac and \ for windows)
    path: path.join(__dirname, 'build'), //current directory where file is
    filename: 'bundle.js'
  },

  devServer: {
    port: 4000
  }
}

module.exports = config