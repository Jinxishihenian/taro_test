/// 表单组件demo演示.
import {View,Button} from "@tarojs/components";
import React, {Component} from "react";

class Demo10 extends Component {
  state = {
    btn: [
      {text: '页面主操作 Normal', size: 'size', type: 'primary',},
      {
        text: '页面主操作 Loading',
        size: 'default',
        type: 'primary',
        loading: true,
      },
      {
        text: '警告类操作 Disable',
        size: 'default',
        type: 'warn',
        disable: true,
      }
    ],
  };

  render() {
    return (
      <View>
        {this.state.btn.map((item => {
          return (
            <Button
              size={item.size ? item.size : ''}
              type={item.type ? item.type : ''}
              loading={item.loading ? item.loading : false}
              disabled={item.disable ? item.disable : false}
            >{item.text}</Button>
          );
        }))}
        测试
      </View>
    );
  }
}

export default Demo10;

