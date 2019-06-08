import Mock from 'mockjs'
import { getQueryObject } from '@/utils'

const List = []
const count = 100

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    orderId: '@integer(10000)',
    createTime: '@datetime(yyyy年-MM月-dd日)',
    name: '@first',
    email: '@email()',
    siteName: '@ctitle(1, 10)',
    content_short: 'mock data',
    url: '@url',
    price: '@float(0, 100, 2, 2)',
    'totalAmount|1-100': 100,
    publishStatus: 1,
    newStatus: 1,
    recommandStatus: 1,
    sort: 1,
    sale: '@float(0, 100, 2, 2)',
    verifyStatus: 1,
    platforms: ['a-platform']
  }))
}

export default {
  commonListData (config) {
    const { page = 1, limit = 20 } = getQueryObject(config.url)
    const mockList = List
    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

    return {
      total: mockList.length,
      list: pageList
    }
  }
}
