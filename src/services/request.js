import Taro from '@tarojs/taro'
import { logError } from '@/utils/global'
import { HTTP_STATUS } from '@/constants/httpStatus'

const _baseUrl = ''

export default {
  base_options(params, method = 'GET') {
    let { url, data } = params
    let _contentType = 'application/json'
    _contentType = params.contentType || _contentType

    const set_cookie = (res) => {
      if (res.cookies && res.cookies.length > 0) {
        let cookies = ''
        res.cookies.forEach((cookie, index) => {
          // windows的微信开发者工具返回的是cookie格式是有name和value的,在mac上是只是字符串的
          if (cookie.name && cookie.value) {
            cookies += index === res.cookies.length - 1 ? `${cookie.name}=${cookie.value};expires=${cookie.expires};path=${cookie.path}` : `${cookie.name}=${cookie.value};`
          } else {
            cookies += `${cookie};`     
          } 
        });
        Taro.setStorageSync('cookies', cookies)
      }
      if (res.header && res.header['Set-Cookie']) {
        Taro.setStorageSync('cookies', res.header['Set-Cookie'])
      }
    }

    const _option = {
      url: url.indexOf('http') !== -1 ? url : _baseUrl + url,
      data: data,
      method: method,
      header: {
        'content-type': _contentType,
        cookie: Taro.getStorageSync('cookies')
      },
      // mode: 'cors',
      xhrFields: { withCredentials: true },
      success(res) {
        set_cookie(res)
        if (res.statusCode === HTTP_STATUS.NOT_FOUND) return logError('api', '请求资源不存在')

        else if (res.statusCode === HTTP_STATUS.BAD_GATEWAY) return logError('api', '服务端出现了问题')
          
        else if (res.statusCode === HTTP_STATUS.FORBIDDEN) return logError('api', '没有权限访问')
          
        else if (res.statusCode === HTTP_STATUS.AUTHENTICATE) {
          Taro.clearStorage()
          Taro.navigateTo({ url: '/pages/login/index' })
          return logError('api', '请先登录')
        }

        else if (res.statusCode === HTTP_STATUS.SUCCESS) return res.data
      },
      error(e) {
        logError('api', '请求接口出现问题', e)
      }
    }
    // eslint-disable-next-line
    return Taro.request(_option)
  },
  get(url, data) {
    let _params = { url, data }
    return this.base_options(_params)
  },
  post: function (url, data, contentType) {
    let _params = { url, data, contentType }
    return this.base_options(_params, 'POST')
  },
  put(url, data) {
    let _params = { url, data }
    return this.base_options(_params, 'PUT')
  },
  delete(url, data) {
    let _params = { url, data }
    return this.base_options(_params, 'DELETE')
  }
}


