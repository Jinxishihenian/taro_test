// import { eventCenter, getCurrentInstance } from '@tarojs/router';
import {View} from '@tarojs/components'
// import Taro from '@tarojs/api'
import React from 'react'
class Test extends React.Component{
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
    render(){
        return(<View id="only">demo3</View>);
    };
}
export default Test;