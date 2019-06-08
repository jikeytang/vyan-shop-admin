import Mock from 'mockjs'
import { getQueryObject } from '@/utils'

const List = []
const count = 6
const img_url = [
  'http://jing-ui.com/Public/uploads/1414050553.jpg',
  'http://jing-ui.com/Public/uploads/1408321593.jpg',
  'http://jing-ui.com/Public/uploads/1408290688.jpg',
  'http://jing-ui.com/Public/uploads/1393824421.jpg',
  'http://jing-ui.com/Public/uploads/1394098765.jpg',
  'http://jing-ui.com/Public/uploads/banner-02.jpg'
]

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    'title|1': '@pick(["人民币", "美元", "日元", "全币种", "港币"])',
    img: `@pick(${img_url})`
  }))
}

export default {
  advListData (config) {
    const { page = 1, limit = 20 } = getQueryObject(config.url)
    const mockList = List
    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

    return {
      total: mockList.length,
      list: pageList
    }
  }
}
