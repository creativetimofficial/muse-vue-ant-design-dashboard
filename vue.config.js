module.exports = {
	runtimeCompiler: true,
	publicPath: '/muse-vue-ant-design/',
	chainWebpack: config => {
		config
			.plugin('html')
			.tap(args => {
				args[0].title = 'Muse Vue Ant Design - by Creative Tim'
				return args
			})
	}
}
