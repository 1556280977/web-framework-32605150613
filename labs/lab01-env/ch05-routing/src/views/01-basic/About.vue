<!-- ============================================================
  About.vue —— 实验 01 页面：关于页（5.2.2）
  目录：views/01-basic/
  要点：与 Home 同构——证明"换地址 = 换组件"，页面本身无感
============================================================ -->
<template>
  <div class="page">
    <h2>📚 About 关于页</h2>
    <p>我是路由 <code>/about</code> 对应的页面组件。</p>
    <p>从 Home 点过来：地址栏变成 <code>#/about</code>，Home 组件被卸载、我被挂进 router-view——组件级切换，不是页面级刷新。</p>
  </div>
</template>

<script>
export default {
  name: 'About'
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
    radial-gradient(circle at 95% 8%, rgb(238 231 255 / 72%), transparent 15rem),
    linear-gradient(130deg, #fff, #fcfbff);
  box-shadow: 0 14px 32px rgb(48 50 100 / 6%);
}

h2 {
  margin-bottom: 14px;
  font-size: clamp(1.35rem, 3vw, 1.65rem);
}

.page p {
  max-width: 780px;
  line-height: 1.85;
}

code {
  border-color: #e8e7fb;
  border-radius: 6px;
  padding: 2px 7px;
  color: #6659bd;
  background: #f4f3ff;
  font-family: Consolas, Monaco, monospace;
}
</style>