<template>
  <app-view class="app-product-detail">
    <div class="app-view-inner" shadow="never">
      <info v-model="productParam" :is-edit="isEdit" />
    </div>
  </app-view>
</template>

<script>
import Info from './Info'

const defaultProductParam = {
  albumPics: '',
  brandId: null,
  brandName: '',
  deleteStatus: 0,
  description: '',
  detailDesc: '',
  detailHtml: '',
  detailMobileHtml: '',
  detailTitle: '',
  feightTemplateId: 0,
  flashPromotionCount: 0,
  flashPromotionId: 0,
  flashPromotionPrice: 0,
  flashPromotionSort: 0,
  giftPoint: 0,
  giftGrowth: 0,
  keywords: '',
  lowStock: 0,
  name: '',
  newStatus: 0,
  note: '',
  originalPrice: 0,
  pic: '',
  // 会员价格{memberLevelId: 0,memberPrice: 0,memberLevelName: null}
  memberPriceList: [],
  // 商品满减
  productFullReductionList: [{ fullPrice: 0, reducePrice: 0 }],
  // 商品阶梯价格
  productLadderList: [{ count: 0, discount: 0, price: 0 }],
  previewStatus: 0,
  price: 0,
  productAttributeCategoryId: null,
  // 商品属性相关{productAttributeId: 0, value: ''}
  productAttributeValueList: [],
  // 商品sku库存信息{lowStock: 0, pic: '', price: 0, sale: 0, skuCode: '', sp1: '', sp2: '', sp3: '', stock: 0}
  skuStockList: [],
  // 商品相关专题{subjectId: 0}
  subjectProductRelationList: [],
  // 商品相关优选{prefrenceAreaId: 0}
  prefrenceAreaProductRelationList: [],
  productCategoryId: null,
  productCategoryName: '',
  productSn: '',
  promotionEndTime: '',
  promotionPerLimit: 0,
  promotionPrice: null,
  promotionStartTime: '',
  promotionType: 0,
  publishStatus: 0,
  recommandStatus: 0,
  sale: 0,
  serviceIds: '',
  sort: 0,
  stock: 0,
  subTitle: '',
  unit: '',
  usePointLimit: 0,
  verifyStatus: 0,
  weight: 0
}

export default {
  name: 'ProductDetail',
  components: {
    Info
  },
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      active: 0,
      productParam: Object.assign({}, defaultProductParam),
      showStatus: [true, false, false, false]
    }
  },
  methods: {
    prevStep () {

    },
    nextStep () {

    }
  }
}
</script>
<style lang="scss">
</style>
<style lang="scss" scoped>
</style>

