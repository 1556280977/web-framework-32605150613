<template>
  <div class="page">
    <h2>🔍 搜索结果</h2>
    <p>关键词：<b class="big">{{ $route.query.kw || '(空)' }}</b>（来自 <code>$route.query</code>）</p>
    <p class="muted">地址栏 <code>#/search?kw=vue</code> ——query 参数明晃晃挂在问号后</p>
    <router-link to="/programdemo">← 回驾驶舱再传一个</router-link>
  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style scoped>
.page {
  background: var(--card, #fff);
  border: 1px solid var(--border);
  border-left: 4px solid var(--accent);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 14px 18px;
}
.big {
  font-size: 22px;
}
.muted {
  color: #666;
}
</style>
