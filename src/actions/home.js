import { api_get_list } from '@/services/home'

// 获取电台节目列表详情
export const dispatchList = (req) => {
  return (dispatch) => { 
    //   const _res = api_get_list(req);
    	const _res = {
				data: {
					list: [
						{
							id: 1,
							imgUrl: 'http://pic01.bdatu.com/Upload/picimg/thumb_1609314548.jpg',
							name: '世界网吧',
							address: '长安西街一初中往西500m路南'
						},
						{
							id: 2,
							imgUrl: 'http://pic01.bdatu.com/Upload/picimg/thumb_1609314502.jpg',
							name: '三月网吧',
							address: '长安西街一初中往西500m路北'
						}
					]
				}
			}
      const _action = {
          type: 'SET_LIST',
          payload: { ..._res.data }
      }
      dispatch(_action);
   }
}