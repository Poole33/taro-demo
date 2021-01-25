import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import './index.scss'

export default class Index extends Component {
	static defaultProps = {
        list: []
    }
    
    toDetail = (id) => {
        Taro.navigateTo({
            url: `/pages/detail/detail?id=${id}`
        })
    }
    render () {
        const { list } = this.props
        if (list && list.length > 0) {
            return (
                <View className='card__list'>
                    {
                        list.map(item => (
                            <View className='card__list-wrap' key={item.id} onClick={this.toDetail.bind(this, item.id)}>
                                <View className='card__list-img-wrap'>
                                    <img className='card__list-img' src={item.imgUrl}></img>
                                </View>
                                <View className='card__list-info'>
                                    <View className='card__list-info-left'>
                                        <Text className='title-2'>{item.name}</Text>
                                        <View className='card__list-remark pt15'>
                                            <AtIcon value='map-pin' size='30' color='#91e02adf' className="mr-10"></AtIcon>
                                            {item.address}
                                        </View>
                                    </View>
                                    <Text className='card__list-info-right'></Text>
                                </View>
                            </View>
                        ))
                    }
                </View>
            )
        } else {
            return (
                <View className='none__data'>暂无数据</View>
            )
        }
    }
}
