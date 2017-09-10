<template>
  <div>
    <header>
      <div class="title">VUE组件库</div>
      <div v-show="!showChild" @click="goTome" class="back">
        <i class="arrow-left"></i>
      </div>
    </header>
    <div v-if="showChild">
      <div class="links">
        <h4>CSS Components</h4>
        <router-link class="link" to="/spinner">
          <span>Spinner</span>
          <i class="arrow-right"></i>
        </router-link>
        <router-link class="link" to="/loading">
          <span>Loading</span>
          <i class="arrow-right"></i>
        </router-link>
      </div>
    </div>
    <div v-else>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>
<style lang="scss" rel="stylesheet/scss">
  @import "../src/assets/css/extend.scss";
  body {
    // -webkit-user-select: none;
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-family: "PingFang SC", sans-serif;
    @extend %rmpm;
  }
  a {
    @extend %rma;
  }
</style>
<style lang="scss" scoped rel="stylesheet/scss">
  @import "global";
  header {
    position: relative;
    width: 100%;
    height: pxToRem(80px);
    background: $cgreen;
    color: white;
    .title {
      line-height: pxToRem(80px);
      text-align: center;
      font-size: pxToRem(28px);
      font-weight: bold;
    }
  }

  .link {
    position: relative;
    display: flex;
    height: pxToRem(60px);
    line-height: pxToRem(60px);
    padding: 0 pxToRem(40px);
    i.arrow-right {
      @include arrow(#333);
      right: pxToRem(40px);
    }
  }

  .back {
    position: absolute;
    top: 0;
    left: 0;
    width: pxToRem(80px);
    height: 100%;
    i.arrow-left {
      left: pxToRem(40px);
      @include arrow;
      border: pxToRem(5px) solid white;
      border-right-width: 0;
      border-top-width: 0;
    }
  }
</style>
<script>
  export default {
    name: 'App',
    data () {
      return {}
    },
    computed: {
      showChild () {
        return this.$route.path === '/'
      }
    },
    mounted () {
    },
    methods: {
      goTome () {
        this.$router.push({
          path: '/'
        })
      }
    }
  }
</script>
