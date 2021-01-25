import React, { Component } from 'react'
// import Taro, { Component } from '@tarojs/taro'
import { connect } from 'react-redux'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { getCurrentInstance } from '@tarojs/taro'
import * as actions from '@/actions/detail'
import './detail.scss'

@connect(state => state.detail, actions)
export default class Detail extends Component {
	state = {}

  componentWillMount () {
		const { id } = getCurrentInstance().router.params
		this.props.dispatchSetDetail({ id })
  }

  componentDidMount () {}

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  showFloatLayout = () => {
    this.setState({ openedFloatLayout: true })
  }
  hiddenFloatLayout = () => {
    this.setState({ openedFloatLayout: false })
	}
	previewImg = (img, imgArrs) => {
		console.log(this)
	}

  render () {
		const { info } = this.props
    return (
			<View className='detail__wrap'>
				<View className="detail__about">
					<Text className="title-2">{info.name}</Text>
					<Text className='remark-info pt-20'>{info.address}</Text>
					<Text className="main-text">{info.about}</Text>
				</View>
				{/* <Swiper
					className='test-h'
					indicatorColor='#999'
					indicatorActiveColor='#333'
					circular
					indicatorDots>
						{
							info.imgUrlArrs && info.imgUrlArrs.map(item => (
								<SwiperItem key={item}>
										<Image className='swiper__item-img' src={item}></Image>
								</SwiperItem>
							))
						}
				</Swiper> */}
				{
					info.imgUrlArrs && info.imgUrlArrs.map(item => (
						<Image key={item} className='detail__about-img' src={item} onClick={this.previewImg}></Image>
					))
				}
				<View className="detail__bottom">
					<View className="detail__bottom-content">
						<View className="item">
							<View className="iconfont icon-shoucang"></View>
							<View className="text">33</View>
						</View>
						<View>
							<AtButton circle type="primary" size='small'>联系</AtButton>
						</View>
					</View>
				</View>
			</View>
    )
  }
}
