<template>
  <div class="page">
    <h2>🎛️ 编程式导航驾驶舱（5.5）</h2>
    <p>push 留历史（可以后退）｜ replace 不留历史，后退回不去</p>

    <div class="btn-group">
      <button @click="go1">① 字符串写法 /user/9527</button>
      <button @click="go2">② path对象写法 /user/1</button>
      <button @click="go3">③ name+params 命名写法</button>
      <button @click="go4">④ path + query传参（搜索）</button>
      <button @click="goReplace">replace 方式跳转（不能后退）</button>
    </div>
  </div>
</template>

<script setup>
// Vue3 composition API：useRouter
import { useRouter } from 'vue-router'
const $router = useRouter()

const go1 = () => {
  $router.push('/user/9527')
}
const go2 = () => {
  $router.push({ path: '/user/1' })
}
const go3 = () => {
  $router.push({ name: 'User', params: { id: 2 } })
}
const go4 = () => {
  $router.push({ path: '/search', query: { kw: 'vue' } })
}
const goReplace = () => {
  $router.replace('/home')
}
</script>

<style scoped>
.btn-group {
  margin-top: 22px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
