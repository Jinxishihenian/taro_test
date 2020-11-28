// import { eventCenter, getCurrentInstance } from '@tarojs/router';
import {View, Button} from '@tarojs/components'
import Taro from '@tarojs/taro'
// import Taro from '@tarojs/api'
import React from 'react'

class Test extends React.Component {
  // TODO 这部分代码报错.
  // componentDidMount(){
  //     eventCenter.once(getCurrentInstance().router.onReady,()=>{
  //         const query = Taro.createSelectorQuery();
  //         query.select("#only").boundingClientReact()
  //         query.exec(res =>{
  //             console.log(res,'res');
  //         });
  //         console.log('onReady');
  //     });
  // }
  jump = () => {
    console.log("我开始跳转from页面");
    Taro.navigateTo({
      // 记得路径第一个字符为反斜线!!!
      url: '/pages/demo10/index'
    });
  }

  render() {
    return (
      <View id='only'>
        demoPage3
        <Button onClick={this.jump}>
          跳转到表单页面
        </Button>
      </View>
    );
  };
}

export default Test;
