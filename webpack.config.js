const path = require('path');
var nodeExternals = require('webpack-node-externals');

const {
    NODE_ENV = 'production',
    WATCH = 'no'
} = process.env;
console.log('Node env', NODE_ENV);

module.exports = {
    entry: './src/index.ts',
    devtool: 'source-map',
    mode: NODE_ENV,
    watch: WATCH === 'yes',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    'ts-loader',
                ]
            }
        ]
    },
    target: 'node',
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.ts', '.js'],
    }
};