<template>
  <section v-if="copyright" class="app-copyright">
    <div class="links">
      <a href="https://www.vuejs.org/" target="_blank">Vuejs</a>
      <a href="https://element.eleme.cn/">Element - UI</a>
    </div>
    <div class="copyright">
      Copyright @ 2019 <span>{{ App.author }}</span>
    </div>
  </section>
</template>

<script>
import App from '@/config/app'

export default {
  name: 'Copyright',
  props: {
    copyright: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      App
    }
  }
}
</script>

<style lang="scss">
.app-copyright {
  padding: 0 16px;
  margin: 48px 0 24px;
  text-align: center;
  .links {
    margin-bottom: 8px;
    a {
      color: rgba(0, 0, 0, 0.45);
      &:hover {
        color: rgba(0, 0, 0, 0.65);
      }
      &:not(:last-child) {
        margin-right: 40px;
      }
    }
  }
  .copyright {
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
  }
}
</style>
