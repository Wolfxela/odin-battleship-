const path = require('path')

module.exports = 
{
     mode: 'development',

    entry:
    {
        main: './src/main.js',
        shipmaker: './src/shipmaker.js',
        gameboardmaker: './src/gameboardmaker.js',
        boardmaker: './src/boardmaker.js',
    },
    output:
    {
        filename: '[name].js',
        path: path.resolve(__dirname,'dist')
    },
}