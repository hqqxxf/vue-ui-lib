<template>
  <span class="zzyp-spinner">
    <component :is="spinner"></component>
  </span>
</template>
<style lang="scss">
  @import "style.scss";
</style>
<script>
  import { oneOf } from '../../../helper/utils'
  const SPINNERS = [
    'snake',
    'circle-bounce',
    'fading-circle'
  ]
  export default {
    name: 'yp-spinner',
    props: {
      type: {
        default: SPINNERS[0],
        validator (value) {
          return oneOf(value, SPINNERS)
        }
      },
      size: {
        type: Number,
        default: 1
      },
      color: {
        type: String,
        default: '#ccc'
      }
    },
    computed: {
      spinner () {
        return `spinner-${this.type}`
      }
    },
    data () {
      return {

      }
    },
    methods: {

    },
    components: {
      SpinnerSnake: require('./mod/snake.vue'),
      SpinnerCircleBounce: require('./mod/circle-bounce.vue'),
      SpinnerFadingCircle: require('./mod/fading-circle.vue')
    },
  }
</script>
