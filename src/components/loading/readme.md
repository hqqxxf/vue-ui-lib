## Loading组件

> author: heqianqian@zhuanzhaun.com

> 按需引入：(如已经全局引入则无需此部)


```
import Vue from 'vue'
import Loading from '@zz-yp/vue-ui-lib/dist/loading'
Vue.component(Loading.name, Loading)

```

> 使用：

```
<yp-loading :show="showLoad1"></yp-loading>
<yp-loading bgColor="white" :show="showLoad2" color="#ff5647" type="snake"></yp-loading>

```

> 参数说明（*代表必须）

key | value | description
--- | --- | ---
*show | `true/false` | 是否显示loading
bgColor | `String` | 默认是`rgba(0, 0, 0, .1)`
type | `String` | 默认是`fading-circle`，其他参考看spinner组件
size | `Number` | 默认是`0.8`，单位rem，其他参考看spinner组件
color | `String` | 默认是`#666`，其他参考看spinner组件






