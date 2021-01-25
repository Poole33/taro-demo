import React, { Component } from 'react'
// import Taro from '@tarojs/taro'
import { connect } from 'react-redux'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import { AtDrawer, AtButton, AtInput } from 'taro-ui'
import searchIcon from '@/assets/img/search.png'
import { getWindowHeight } from '@/utils/global'
import * as actions from '@/actions/home'
import './home.scss'
import CardList from '@/components/card-list';

@connect(state => state.home, actions)
export default class Home extends Component {
  state = {
    openedFloatLayout: false,
    searchValue: ''
  }

  componentWillMount () {
      this.props.dispatchList()
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  showFloatLayout = () => {
    this.setState({ openedFloatLayout: true })
  }
  hiddenFloatLayout = () => {
    this.setState({ openedFloatLayout: false })
  }

  render () {
    const { list } = this.props
    return (
      <View className='home'>
          <View className='home__search'>
            <View className='home__search-wrap' onClick={this.showFloatLayout}>
              <Image className='home__search-img' src={searchIcon} />
              <Text className='home__search-txt'>搜索你感兴趣的内容</Text>
            </View>
          </View>
          <ScrollView
            scrollY
            className='home__wrap'
            onScrollToLower={this.loadRecommend}
            style={{ height: getWindowHeight() - 110 }}
          >
            <CardList list={list}>
            </CardList>
          </ScrollView>

          <View className='home__searchpage'>
            <AtDrawer
              show={this.state.openedFloatLayout}
              width="100%"
              right
              title="搜索"
            >
              <View>
                <AtInput
                  clear
                  title='搜索'
                  type='text'
                  maxLength='4'
                  placeholder='点击输入'
                  value={this.state.searchValue}
                >
                  <AtButton
                    circle
                    size="small"
                    type='primary'
                    onClick={this.hiddenFloatLayout}
                  >
                    取 消
                  </AtButton>
                </AtInput>
              </View>
            </AtDrawer>
          </View>
      </View>
    )
  }
}
