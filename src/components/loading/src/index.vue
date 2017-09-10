<template>
  <div class="zzyp-loading" v-if="show" :style="{backgroundColor: bgColor}">
    <div class="zzyp-loading-box">
      <yp-spinner :type="type" :size="size" :color="color"></yp-spinner>
    </div>
  </div>
</template>
<style lang="scss">
  @import "style.scss";
</style>
<script>
  import ypSpinner from '../../spinner'
  export default {
    name: 'yp-loading',
    props: {
      bgColor: {
        type: String,
        default: 'rgba(0, 0, 0, .1)'
      },
      show: {
        type: [Boolean, String],
        required: true,
        default: false
      },
      type: {
        type: String,
        default: 'fading-circle'
      },
      size: {
        type: Number,
        default: 0.8
      },
      color: {
        type: String,
        default: '#666'
      }
    },
    data () {
      return {}
    },
    components: {
      ypSpinner
    }
  }
</script>
