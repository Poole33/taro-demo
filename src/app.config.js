export default {
  pages: [
    'pages/home/home',
    'pages/mine/mine',
    'pages/collect/collect'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '学一点',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
		list: [
			{
				pagePath: "pages/home/home",
				iconPath: "./assets/tab-bar/home.png",
				selectedIconPath: "./assets/tab-bar/home-active.png",
				text: "首页"
            },
            {
                pagePath: "pages/collect/collect",
                iconPath: "./assets/tab-bar/star.png",
                selectedIconPath: "./assets/tab-bar/star-active.png",
                text: "收藏"
            },
			{
				pagePath: "pages/mine/mine",
				iconPath: "./assets/tab-bar/user.png",
				selectedIconPath: "./assets/tab-bar/user-active.png",
				text: "我的"
			}
		],
		color: "#666",
		selectedColor: "#EB4057",
		backgroundColor: "#fafafa",
		borderStyle: 'black',
	}
}
  