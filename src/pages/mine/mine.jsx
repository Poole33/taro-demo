import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View, Text, Image, ScrollView } from '@tarojs/components'
// import { AtButton } from 'taro-ui'
// import "taro-ui/dist/style/components/button.scss" // 按需引入
import searchIcon from '@/assets/img/search.png'
import { getWindowHeight } from '@/utils/global'
import './mine.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  show_prevent = () => {
    // XXX 时间关系，首页只实现底部推荐商品的点击
    Taro.showToast({ title: '目前只可点击底部推荐商品', icon: 'none' })
  }

  render () {
    return (
      <View className='mine'>
          mine
      </View>
    )
  }
}
