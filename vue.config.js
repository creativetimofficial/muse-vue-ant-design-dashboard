module.exports = {
	runtimeCompiler: true,
	publicPath: '/muse-vue-ant-design-dashboard/',
	chainWebpack: config => {
		config
			.plugin('html')
			.tap(args => {
				args[0].title = 'Muse Vue Ant Design Dashboard - by Creative Tim'
				return args
			})
	}
}
