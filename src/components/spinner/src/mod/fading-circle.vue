<template>
  <div :class="['zzyp-spinner-fading-circle zzyp-spinner-fading-circle-color-' + _uid]" :style="{
      width: spinnerSize,
      height: spinnerSize
    }">
    <div v-for="n in 12" :class="['zzyp-spinner-fading-circle-circle', 'is-circle' + (n + 1)]"></div>
  </div>
</template>

<script>
  import common from './common.vue'

  export default {
    name: 'fading-circle',

    mixins: [common],

    created() {
      this.styleNode = document.createElement('style')
      const css = `.zzyp-spinner-fading-circle-color-${this._uid} > div::before { background-color: ${this.spinnerColor} }`

      this.styleNode.type = 'text/css'
      this.styleNode.rel = 'stylesheet'
      document.getElementsByTagName('head')[0].appendChild(this.styleNode)
      this.styleNode.appendChild(document.createTextNode(css))
    },

    destroyed() {
      if (this.styleNode) {
        this.styleNode.parentNode.removeChild(this.styleNode)
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .zzyp-spinner-fading-circle {
    position: relative;
    &-circle {
      width: 100%;
      height: 100%;
      position: absolute;

      &::before {
        content: " ";
        display: block;
        margin: 0 auto;
        width: 15%;
        height: 15%;
        border-radius: 100%;
        animation: zzyp-fading-circle 1.2s infinite ease-in-out both;
      }

      @for $i from 2 through 12 {
        &.is-circle#{$i} {
          transform: rotate(360deg / 12 * ($i - 1));

          &::before {
            animation-delay: (-1.2s + 1.2s / 12 * ($i - 1));
          }
        }
      }
    }
  }

  @keyframes zzyp-fading-circle {
    0%, 39%, 100% {
      opacity: 0
    }
    40% {
      opacity: 1
    }
  }

</style>
