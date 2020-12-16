import React, { Component } from 'react'
/// 假设我们要使用Redux. 
import { Provider } from 'react-redux'

import configStore from '../store/index'

const store = configStore()
class App extends Component {
    /// 在render() 方法之后执行. 
    componentDidMout() { }
    /// 对应onShow.
    componentDidShow() { }
    /// 对应onHide. 
    componentDidHide() { }

    render() {
        // 入口组件不会渲染任何内容,但是我们在这里做类似于状态管理的事情.
        return (<Provider store={store}>
            {this.props.children}
            {/* <div>测试store</div> */}
        </Provider>)

    }
}
export default App;





