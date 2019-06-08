import { title, name, version, description, author } from '../../package'

export default {
  title,
  name,
  version,
  author,
  description,
  // 侧边栏默认折叠状态
  sideBar: {
    sideBarCollapse: false
  },
  page: {
    opened: [
      {
        name: 'index',
        meta: {
          title: '首页',
          requiresAuth: false
        }
      }
    ]
  },
  // 注册的主题
  theme: {
    list: [
      {
        title: '经典',
        name: 'default',
        preview: 'image/theme/default/preview@2x.png'
      },
      {
        title: '紫罗兰',
        name: 'violet',
        preview: 'image/theme/violet/preview@2x.png'
      }
    ],
    colorList: [
      {
        key: '薄暮', color: '#F5222D'
      },
      {
        key: '火山', color: '#FA541C'
      },
      {
        key: '日暮', color: '#FAAD14'
      },
      {
        key: '明青', color: '#13C2C2'
      },
      {
        key: '极光绿', color: '#52C41A'
      },
      {
        key: '拂晓蓝（默认）', color: '#1890FF'
      },
      {
        key: '极客蓝', color: '#2F54EB'
      },
      {
        key: '酱紫', color: '#722ED1'
      }
    ]
  },
  user: {
    info: {
      name: 'Jikey'
    }
  }
}
