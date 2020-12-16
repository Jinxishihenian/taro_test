import { Component } from "react";
import { View, ScrollView } from '@tarojs/components'
// page.js
export default class BackPage extends Component {
    onShareAppMessage(res) {
        // 来自页面内转发按钮. 
        console.log(res.target);
        return {
            title: '自定义转发标题',
            path: '/page/user?id=123',
        }

    }
    /// 收藏行为监听. 
    onAddToFavorites(res) {
        // webview 页面返回webviewUrl. 
        console.log('WebViewUrl:', res.webviewUrl);
        return ({ title: '自定义标题', imageUrl: 'http://demo.png', query: 'name=xxx&age=xxx', });
    }
    /// 监听收藏朋友圈事件.
    onShareTimeLine() {
        console.log('onShareTimeline');
    }

}

