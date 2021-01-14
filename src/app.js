import React, { Component } from 'react'
// import Taro from '@tarojs/taro'
import './app.scss'
// import 'taro-ui/dist/style/index.scss'
import '@/assets/style/custom-variables.scss'
import '@/assets/style/global.scss'

import { Provider } from 'react-redux';
import configStore from './store'
const store = configStore()
class App extends Component {
  // this.props.children 是将要会渲染的页面
//   render () {
//       return this.props.children
//   }
  render () {
    return (
        <Provider store={store}>
            {this.props.children}
        </Provider>
    )
  }
}

export default App
