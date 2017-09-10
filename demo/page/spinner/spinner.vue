<template>
  <div>
    <div class="zzyp-spinner-box">
      <div class="zzyp-spinner-box-text">snake</div>
      <yp-spinner :size="0.5" color="#00b65e" type="snake"></yp-spinner>
    </div>
    <div class="zzyp-spinner-box">
      <div class="zzyp-spinner-box-text">fading circle</div>
      <yp-spinner type="fading-circle"></yp-spinner>
    </div>
    <div class="zzyp-spinner-box">
      <div class="zzyp-spinner-box-text">circle bounce</div>
      <yp-spinner :size="0.5" color="#00b65e" type="circle-bounce"></yp-spinner>
    </div>
  </div>
</template>

<style lang='scss' rel="stylesheet/scss" scoped>
.zzyp-spinner-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: pxToRem(30px);
  border-bottom: 1px solid #00b65e;
  &-text {
    font-size: pxToRem(26px);
  }
}
</style>
