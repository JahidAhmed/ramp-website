module.exports = {
    chainWebpack: (config) => {
        config.module
            .rule('lint')
            .test(/lang\.csv$/)
            .use('eslint')
            .loader('dsv-loader');
    }
};
