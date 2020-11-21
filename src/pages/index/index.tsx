import React, {Component} from 'react'
import {View, Text} from '@tarojs/components'
// import App from '../demo1/demo'
import {IndexDemo} from '../demo2/index'
import Test from '../demo3/index'
// eslint-disable-next-line import/first
import Taro from '@tarojs/taro'
import './index.scss'

export default class Index extends Component {

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  /// 尝试第一跳转.
  jumpdemo() {
    console.log("我进行了点击");
    Taro.navigateTo({
      url: '/pages/demo6/index'
    })
  }

  render() {
    return (
      <View className='index'>
        <Text onClick={this.jumpdemo}>index_page</Text>
        <Test></Test>
        <IndexDemo></IndexDemo>
        {/* <App></App> */}
      </View>
    )
  }
}
