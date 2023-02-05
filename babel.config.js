module.exports = {
    presets: [
        [
            '@babel/preset-env'
        ],
        [
            '@babel/preset-react',
            {
                runtime: 'automatic',
                importSource: 'preact'
            }
        ],
        '@babel/preset-typescript'
    ],
    plugins: ['@compiled/babel-plugin']
}