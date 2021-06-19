const path = require('path');

module.exports = {
    watch: true,
    mode: 'production',
    entry: {
        modules: './public/js/modules.js',
    },

    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'build.js',

    },

    watchOptions: {
        ignored: /node_modules/,
      },
}