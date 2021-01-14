import request from '@/services/request'

// 获取电台节目列表详情
export function api_get_list(req) {
  return request.get('', req);
}
