<template>
  <div id="app">
    <!-- 根组件路由出口 -->
    <router-view/>
    <p>hello</p>
  </div>
</template>

<!-- lang="ts" 编辑器给出类型提示；ts编译期间类型验证 -->
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      a: 1
    }
  }
})
</script>
<style lang="scss" scoped>

</style>
