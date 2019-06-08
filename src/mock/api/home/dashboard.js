import Mock from 'mockjs'

const List = []
const count = 6

for (let i = 1, len = count; i < len; i++) {
  List.push(Mock.mock({
    id: i,
    user: {
      nickname: '@cname',
      avatar: '@image(64x64)'
    },
    project: {
      name: '@ctitle(3, 5)',
      action: '更新',
      event: '@cword(4)'
    },
    time: '@datetime'
  }))
}

export default {
  getActivitiesData (config) {
    // const {userName} = JSON.parse(config.url)

    const mockList = List

    return {
      items: mockList,
      total: mockList.length
    }
  }
}
