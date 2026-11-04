<template>
  <div class="users">
    <h2>👥 用户列表</h2>
    <p class="tip">路由规则只有一条 /user/:id，却能匹配下面所有用户页——:id 是"占位符"。</p>

    <div class="item">
      <router-link to="/user/1">写法① 字符串：用户 1</router-link>
    </div>
    <div class="item">
      <router-link :to="`/user/${uid2}`">写法② 拼接变量：用户 2（id 在 data 里）</router-link>
    </div>
    <div class="item">
      <router-link :to="{ path: '/user/9527' }">写法③ 对象 path：用户 9527</router-link>
    </div>
  </div>
</template>

<script setup>
const uid2 = 2
</script>

<style scoped>
.users {
  text-align: center;
  margin: 0;
}

.tip {
  margin-bottom: 22px;
  color: var(--muted);
  font-size: 15px;
}

.item {
  width: min(100%, 660px);
  margin: 10px auto;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 11px;
  background: #fbfcff;
  text-align: left;
  transition: border-color 160ms ease, transform 160ms ease, box-shadow 160ms ease;
}

.item:hover {
  transform: translateY(-1px);
  border-color: #c8d0ff;
  box-shadow: 0 6px 16px rgb(36 55 95 / 7%);
}

.item a {
  display: block;
  padding: 12px 16px;
  color: var(--primary-dark);
  font-size: 15px;
  font-weight: 650;
  text-decoration: none;
}
</style>
