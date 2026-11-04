<template>
  <div class="page">
    <h2>命名路由（5.4）</h2>
    <p>同一个目标 /user/9527，两种写法对照</p>

    <div class="box">
      <h4>✅ 普通路径写法</h4>
      <router-link to="/user/9527">用户9527（路径写法）</router-link>
    </div>

    <div class="box">
      <h4>✅ 命名路由写法（课件重点）</h4>
      <router-link :to="{ name: 'User', params: { id: 9527 } }">用户9527（命名写法）</router-link>
    </div>
  </div>
</template>

<style scoped>
.box {
  margin-top: 18px;
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 16px;
  background: #fbfcff;
}

.box h4 {
  margin: 0 0 8px;
}
</style>
