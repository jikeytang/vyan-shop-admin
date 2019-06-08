const list = [
  {
    value: 'zhinan',
    label: '苹果',
    children: [
      {
        value: 'shejiyuanze',
        label: 'Iphone',
        children: [
          {
            value: 'yizhi',
            label: '一致'
          },
          {
            value: 'fankui',
            label: '反馈'
          },
          {
            value: 'xiaolv',
            label: '效率'
          },
          {
            value: 'kekong',
            label: '可控'
          }
        ]
      },
      {
        value: 'daohang',
        label: 'Mac pro',
        children: [
          {
            value: 'cexiangdaohang',
            label: '侧向导航'
          },
          {
            value: 'dingbudaohang',
            label: '顶部导航'
          }
        ]
      }
    ]
  },
  {
    value: 'zujian',
    label: '华为',
    children: [
      {
        value: 'basic',
        label: '手机',
        children: [
          {
            value: 'layout',
            label: 'Layout 布局'
          },
          {
            value: 'color',
            label: 'Color 色彩'
          },
          {
            value: 'typography',
            label: 'Typography 字体'
          },
          {
            value: 'icon',
            label: 'Icon 图标'
          },
          {
            value: 'button',
            label: 'Button 按钮'
          }
        ]
      },
      {
        value: 'form',
        label: '笔记本 & 平板',
        children: [
          {
            value: 'radio',
            label: 'Radio 单选框'
          },
          {
            value: 'checkbox',
            label: 'Checkbox 多选框'
          },
          {
            value: 'input',
            label: 'Input 输入框'
          },
          {
            value: 'input-number',
            label: 'InputNumber 计数器'
          },
          {
            value: 'select',
            label: 'Select 选择器'
          },
          {
            value: 'cascader',
            label: 'Cascader 级联选择器'
          },
          {
            value: 'switch',
            label: 'Switch 开关'
          },
          {
            value: 'slider',
            label: 'Slider 滑块'
          },
          {
            value: 'time-picker',
            label: 'TimePicker 时间选择器'
          },
          {
            value: 'date-picker',
            label: 'DatePicker 日期选择器'
          },
          {
            value: 'datetime-picker',
            label: 'DateTimePicker 日期时间选择器'
          },
          {
            value: 'upload',
            label: 'Upload 上传'
          },
          {
            value: 'rate',
            label: 'Rate 评分'
          },
          {
            value: 'form',
            label: 'Form 表单'
          }
        ]
      },
      {
        value: 'data',
        label: '智能穿戴',
        children: [
          {
            value: 'table',
            label: 'Table 表格'
          },
          {
            value: 'tag',
            label: 'Tag 标签'
          },
          {
            value: 'progress',
            label: 'Progress 进度条'
          },
          {
            value: 'tree',
            label: 'Tree 树形控件'
          },
          {
            value: 'pagination',
            label: 'Pagination 分页'
          },
          {
            value: 'badge',
            label: 'Badge 标记'
          }
        ]
      },
      {
        value: 'notice',
        label: '智能家居',
        children: [
          {
            value: 'alert',
            label: 'Alert 警告'
          },
          {
            value: 'loading',
            label: 'Loading 加载'
          },
          {
            value: 'message',
            label: 'Message 消息提示'
          },
          {
            value: 'message-box',
            label: 'MessageBox 弹框'
          },
          {
            value: 'notification',
            label: 'Notification 通知'
          }
        ]
      },
      {
        value: 'notice',
        label: '热销配件'
      },
      {
        value: 'notice',
        label: '增值服务'
      },
      {
        value: 'notice',
        label: '其他'
      }
    ]
  },
  {
    value: 'ziyuan',
    label: '小米',
    children: [
      {
        value: 'axure',
        label: '手机 电话卡'
      },
      {
        value: 'sketch',
        label: '电视 盒子'
      },
      {
        value: 'jiaohu',
        label: '笔记本 平板'
      }
    ]
  }
]

export default {
  productCategoryData (config) {
    return {
      list,
      total: list.length
    }
  },
  createCategoryData () {
    return {
      message: 'success'
    }
  }
}
