import React, {Component} from 'react';
import {View, Button} from '@tarojs/components';
import './index.scss';

class IndexDemo extends Component {
  constructor(props) {
    super(props);
  }

  config = {
    navigationBarTitleText: '首页'
  }

  /// 对应onShow();
  componentDidShow() {
  }

  /// 对应onHide();
  componentDidHid() {
  }

  /// 对应onPullDownRefresh. 除了 componentDidShow/componentDidHide 之外.
  /// 所有页面生命周期函数名都与小程序相对应.
  onPullDownRefresh() {
  }

  /// 对应onPullDownReferesh()
  onReachBottom() {
  }

  componentWillUnmount() {
  }

  testJump() {
    // 模拟跳转.
    console.log("我尝试跳转");
  }

  render() {
    return (<View><Button onClick={this.testJump}>按钮1</Button></View>)
  }
}

export {IndexDemo};
