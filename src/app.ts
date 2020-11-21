import {Component} from 'react'
import './app.scss'

class App extends Component {

  componentDidMount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  componentDidCatchError() {
  }

  config = {
    pages: [
      'pages/demo1/demo',
      'pages/demo2/index',
      'pages/demo6/index',
      'pages/demo7/index',
    ]
  }

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children
  }
}

export default App;
