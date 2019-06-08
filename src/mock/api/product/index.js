import Mock from 'mockjs'
import { getQueryObject } from '@/utils'

const List = []
const count = 100

const baseContent = '<p>I am testing data, I am testing data.</p><p><img src="https://img13.360buyimg.com/mobilecms/s140x140_jfs/t1/29567/21/6186/89634/5c4a63abE066dca51/07dc7c1c4368635c.jpg!q90.webp"></p>'
const image_uri = 'https://img13.360buyimg.com/mobilecms/s140x140_jfs/t1/29567/21/6186/89634/5c4a63abE066dca51/07dc7c1c4368635c.jpg!q90.webp'

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    timestamp: +Mock.Random.date('T'),
    name: '@first',
    brandName: '@ctitle(1, 5)',
    content_short: 'mock data',
    content: baseContent,
    price: '@float(0, 100, 2, 2)',
    productSn: '@integer(1, 3)',
    publishStatus: 1,
    newStatus: 1,
    recommandStatus: 1,
    sort: 1,
    sale: '@float(0, 100, 2, 2)',
    verifyStatus: 1,
    pic: image_uri,
    platforms: ['a-platform']
  }))
}

export default {
  productListData (config) {
    const { page = 1, limit = 20 } = getQueryObject(config.url)
    const mockList = List
    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

    return {
      total: mockList.length,
      list: pageList
    }
  }
}
