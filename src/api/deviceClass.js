import request from '@/utils/axios'

export function getDeviceClassList(reqData) {
  return request({
    url:'/findAllDeviceClass',
    method: 'get',
    data: reqData
  })
}
