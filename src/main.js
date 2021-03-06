import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      'pages/logs/main',
      '^pages/index/main',
      'pages/recommend-list/main',
      'pages/select-song-type/main',
      'pages/songs-details/main',
      'pages/player/main',
      'pages/day/main',
      'pages/rank-list/main',
      'pages/mv/main',
      'pages/mv-plyer/main',
      'pages/new/main'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'iMusic',
      navigationBarTextStyle: 'black'
    }
  }
}
