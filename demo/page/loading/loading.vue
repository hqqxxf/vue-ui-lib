<template>
  <div>
    <div class="page-button-group">
      <yp-btn @click="load1" size="l">
        默认加载
      </yp-btn>
      <yp-btn @click="load2" size="l">
        其他可配置加载
      </yp-btn>
    </div>
    <yp-loading :show="showLoad1"></yp-loading>
    <yp-loading bgColor="white" :show="showLoad2" color="#ff5647" type="snake"></yp-loading>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        showLoad1: false,
        showLoad2: false
      }
    },
    mounted () {
    },
    methods: {
      load1 () {
        this.showLoad1 = true
        setTimeout(() => {
          this.showLoad1 = false
        }, 1000)
      },
      load2 () {
        this.showLoad2 = true
        setTimeout(() => {
          this.showLoad2 = false
        }, 1000)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .page-button-group > * {
    margin-top: pxToRem(20px);
  }
</style>
