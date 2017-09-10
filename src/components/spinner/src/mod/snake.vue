<template>
  <div class="zzyp-spinner-snake" :style="{
    'border-top-color': spinnerColor,
    'border-left-color': spinnerColor,
    'border-bottom-color': spinnerColor,
    'height': spinnerSize,
    'width': spinnerSize
    }">
  </div>
</template>
<script>
  import common from './common.vue'
  export default {
    mixins: [common],
    data () {
      return {}
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  .zzyp-spinner-snake {
    animation: zzyp-spinner-rotate 0.8s infinite linear;
    border: pxToRem(10px) solid transparent;
    border-radius: 50%;
  }

  @keyframes zzyp-spinner-rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
