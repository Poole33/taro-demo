
// 获取电台节目列表详情
export const dispatchSetDetail = (req) => {
  return (dispatch) => { 
		const _res = {
			data: {
				detail: {
					imgUrlArrs: ['http://pic01.bdatu.com/Upload/picimg/thumb_1609314548.jpg', 'http://pic01.bdatu.com/Upload/picimg/thumb_1609314502.jpg'],
					name: 'test1',
					address: '金科路788号绿地智创商务中心13层七猫',
					collectState: false,
					about: 'sdfdlskfsdofsdofusdifsdfdfghfggflghdfjghfsdlkfjsdlfkjsdlkfjsdklfjsldkfjsdklfjsdlkfjsdlkfjkgjfhfjghjghfhgsdfgsdhjfgsdhfgdshgsdhfhjjffklfjldhfjkdhfjsfssdofsdofusdifsdfdfghfggflghdfjghfsdlkfjsdlfkjsdlkfjsdklfjsldkfjsdklfjsdlkfjsdlkfjkgjfhfjghjghfhgsdfgsdhjfgsdhfgdshgsdhfhjjffklfjldhfjkdhfjsfssdofsdofusdifsdfdfghfggflghdfjghfsdlkfjsdlfkjsdlkfjsdklfjsldkfjsdklfjsdlkfjsdlkfjkgjfhfjghjghfhgsdfgsdhjfgsdhfgdshgsdhfhjjffklfjldhfjkdhfjsfs'
				}
			}
		}
		const _action = {
				type: 'SET_DETAIL',
				payload: { ..._res.data }
		}
		dispatch(_action)
  }
}
