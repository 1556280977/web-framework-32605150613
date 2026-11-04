<!-- ============================================================
  Home.vue —— 实验 01 页面：首页（5.2.2）
  目录：views/01-basic/
  要点：最普通的一个路由页面组件，没有任何路由专属代码
============================================================ -->
<template>
  <div class="page">
    <h2>🏠 Home 首页</h2>
    <p>我是路由 <code>/home</code> 对应的页面组件——地址栏变 <code>#/home</code> 时，router-view 里显示我。</p>
    <p class="muted">注意整个切换过程页面没有刷新（F12 Network 里没有新请求）——这就是"前端路由"。</p>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.page {
  position: relative;
  overflow: hidden;
  border: 1px solid #e8e8f4;
  border-radius: 18px;
  padding: clamp(22px, 4vw, 34px);
  background:
    radial-gradient(circle at 95% 8%, rgb(234 231 255 / 72%), transparent 15rem),
    linear-gradient(130deg, #fff, #fcfbff);
  box-shadow: 0 14px 32px rgb(48 50 100 / 6%);
}

.page::after {
  position: absolute;
  right: -40px;
  bottom: -105px;
  width: 210px;
  height: 210px;
  border: 1px solid rgb(117 100 216 / 11%);
  border-radius: 50%;
  content: '';
  pointer-events: none;
}

h2 {
  position: relative;
  z-index: 1;
  margin-bottom: 14px;
  font-size: clamp(1.35rem, 3vw, 1.65rem);
}

code {
  border-color: #e8e7fb;
  border-radius: 6px;
  padding: 2px 7px;
  color: #5966c4;
  background: #f4f3ff;
  font-family: Consolas, Monaco, monospace;
}

.muted {
  color: var(--muted);
  font-size: 14px;
}

.page p {
  position: relative;
  z-index: 1;
  max-width: 760px;
  line-height: 1.85;
}
</style>