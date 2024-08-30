export default defineAppConfig({
  lazyCodeLoading: "requiredComponents",
  pages: [
    "pages/tabBar/home/index",
    'pages/tabBar/recommendation/index',
    'pages/tabBar/board/index'
  ],
  subPackages: [
    {
      "root": "pages/function/",
      "pages": [
        "pages/call/index",
        "pages/person/index",
        "pages/wordDay/index",
        "pages/holiday/index",
        "pages/lyric/index",
      ]
    }
  ],
  window: {
    navigationStyle: "custom",
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    "color": "#ee897f",
    "selectedColor": "#e03838",
    "borderStyle": "white",
    "backgroundColor": "#ffffff",
    list: [
      {
        pagePath: 'pages/tabBar/home/index',
        text: '煜煜',
        iconPath: "image/q1.jpg",
        selectedIconPath: "image/q2.jpg",
      },
      {
        pagePath: 'pages/tabBar/recommendation/index',
        text: '一些',
        iconPath: "image/q3.jpeg",
        selectedIconPath: "image/q4.jpeg",
      },
      {
        pagePath: 'pages/tabBar/board/index',
        text: '存档',
        iconPath: "image/q5.jpeg",
        selectedIconPath: "image/q6.jpeg",
      },
    ]
  }
});
