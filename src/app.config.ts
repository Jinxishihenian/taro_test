export default {
  pages: [
    'pages/index/index',
    'pages/demo6/index',
    'pages/demo7/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'Hello Taro',
    navigationBarTextStyle: 'black',
    backgroundColor:"#eeeeee",
  },
  tabBar: {
    list: [{
      'iconPath': 'resource/tab_bar_index.png',
      'selectedIconPath': 'resource/tab_bar_no_select_index.png',
      pagePath: 'pages/index/index',
      text: '首页'
    }, {
      'iconPath': 'resource/tab_bar_index.png',
      'selectedIconPath': 'resource/tab_bar_no_select_index.png',
      pagePath: 'pages/demo7/index',
      text: '其他'
    }]
  }
}
