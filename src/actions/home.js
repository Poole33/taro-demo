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
							name: 'test1',
							address: '金科路788号绿地智创商务中心13层七猫'
						},
						{
							id: 2,
							imgUrl: 'http://pic01.bdatu.com/Upload/picimg/thumb_1609314502.jpg',
							name: 'test2',
							address: '金科路788号绿地智创商务中心13层七猫'
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