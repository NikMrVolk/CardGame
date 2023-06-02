/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
const path = require('path')

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bungle.js',
		clean: true,
	},
}
