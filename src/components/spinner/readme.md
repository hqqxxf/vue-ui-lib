## Spinner组件

> author: heqianqian@zhuanzhuan.com

> 按需引入：(如已经全局引入则无需此部)

```
import Vue from 'vue'
import Spinner from '@zz-yp/vue-ui-lib/dist/spinner'
Vue.component(Spinner.name, Spinner)

```

> 使用：

```
  <yp-spinner></yp-spinner>
    
  <yp-spinner type="fading-circle"></yp-spinner>
    
  <yp-spinner :size="0.5" color="#00b65e" type="triple-bounce"></yp-spinner>

```

> 参数说明（*代表必须）

key | value | description
--- | --- | ---
type | `snake / circle-bounce / fading-circle` | 默认是snake类型
size | `Number` | 默认为1，单位是`rem`
color | `String` | 颜色







