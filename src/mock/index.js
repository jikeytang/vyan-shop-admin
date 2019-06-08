import Mock from 'mockjs'
import login from './api/login'
import product from './api/product'
import productCategory from './api/product/category'
import order from './api/order'
import orderExchange from './api/order/exchange'
import common from './api/common'
import commonAdv from './api/common/adv'

Mock.mock(/\/admin\/login/, 'post', login.loginSystemData)
Mock.mock(/\/login\/logout/, 'post', login.logoutData)
Mock.mock(/\/user\/info\.*/, 'get', login.getUserInfoData)

Mock.mock(/\/product\/list\.*/, 'get', product.productListData)
Mock.mock(/\/productCategory\/list\.*/, 'get', productCategory.productCategoryData)
Mock.mock(/\/productCategory\/create\.*/, 'post', productCategory.createCategoryData)

Mock.mock(/\/order\/list\.*/, 'get', order.orderListData)
Mock.mock(/\/order\/exchange\.*/, 'get', orderExchange.exchangeListData)

Mock.mock(/\/common\/list\.*/, 'get', common.commonListData)
Mock.mock(/\/common\/adv\.*/, 'get', commonAdv.advListData)
