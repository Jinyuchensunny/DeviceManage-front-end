<template>
  <div id="app">
    <!--  <router-view/>用于放置路由匹配成功的组件，
           在<router-view>中渲染  -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
  @import './style/variables';
  @import './style/element-ui';
  @import './style/common';
  @import './style/scrollBar';
</style>
