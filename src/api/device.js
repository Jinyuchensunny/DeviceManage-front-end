import request from '@/utils/axios'

export function getDeviceList(reqData) {
  return request({
    url:'/findAllDeviceByDeviceClassId/deviceClassId='+reqData,
    method: 'get',
    data: reqData
  })
}
