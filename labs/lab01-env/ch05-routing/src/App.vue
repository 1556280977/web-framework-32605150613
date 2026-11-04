<!-- ============================================================
  App.vue —— ch05-routing 第 5 章实验台（路由版）
  上一章的实验台是"锚点菜单"，这一章换成 router-link 导航：
  导航栏 + 唯一出口 <router-view>，地址栏就是实验记录仪。
  注意：router-link/router-view 没有 import、没注册——
  它们是 app.use(router) 之后全局可用的"官方组件"。
============================================================ -->
<template>
  <div id="app">
    <header class="app-header">
      <div>
        <p class="eyebrow">FRONTEND LAB <span> / </span> CHAPTER 05</p>
        <h1>Vue Router 实验室</h1>
        <p class="intro">路由——地址栏变，组件换，页面不刷新。</p>
      </div>
      <div class="chapter-mark" aria-hidden="true">
        <span>CH</span>
        <strong>05</strong>
      </div>
    </header>

    <nav class="top-nav" aria-label="路由实验导航">
      <!-- router-link = 会走路由的 <a>：to 写目标地址（别忘引号）；渲染后自动带高亮类 -->
      <router-link to="/home">首页</router-link>
      <router-link to="/about">关于</router-link>
      <router-link to="/users">用户列表</router-link>
      <router-link to="/center">用户中心</router-link>
      <router-link to="/nameddemo">命名路由</router-link>
      <router-link to="/programdemo">编程式导航</router-link>
      <router-link to="/search">搜索</router-link>
    </nav>

    <!-- $route.fullPath = 当前完整地址——地址栏的"回声"，实验时盯它 -->
    <div class="route-status">
      <div class="route-location">
        <span class="status-label">当前地址</span>
        <code>{{ $route.fullPath }}</code>
      </div>
      <div class="login-status">
        <span class="status-dot" :class="{ 'is-logged-in': isLogin() }"></span>
        登录态：<b>{{ isLogin() ? '已登录' : '未登录' }}</b>
        <span class="status-hint">守卫看 token</span>
      </div>
    </div>

    <main class="route-stage">
      <!-- 补全：唯一的顶层路由出口组件（一对标签）——地址匹配到谁，谁就显示在这里 -->
      <router-view></router-view>
    </main>

    <footer class="app-footer">
      <span>Vue Router · 第 5 章</span>
      <span>切换路由时，页面无需重新加载</span>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    // 用方法不用 computed：localStorage 不是响应式数据，computed 没有响应式依赖会被缓存成"旧值"；
    // 方法每次渲染都重查——路由一变页面重渲染，登录态跟着刷新
    isLogin() {
      return !!localStorage.getItem('token')
    }
  }
}
</script>

<style scoped>
#app {
  width: min(100% - 40px, 1080px);
  min-height: 100vh;
  margin: 0 auto;
  padding: clamp(24px, 5vw, 56px) 0 28px;
}

.app-header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  overflow: hidden;
  margin-bottom: 22px;
  border: 1px solid rgb(255 255 255 / 85%);
  border-radius: 24px;
  padding: clamp(25px, 4vw, 38px) clamp(24px, 5vw, 46px);
  background:
    radial-gradient(circle at 88% 12%, rgb(255 255 255 / 80%), transparent 13rem),
    linear-gradient(115deg, #fff 0%, #f5f6ff 56%, #eeefff 100%);
  box-shadow: 0 16px 42px rgb(45 63 128 / 8%);
}

.app-header::after {
  position: absolute;
  right: 105px;
  bottom: -125px;
  width: 250px;
  height: 250px;
  border: 1px solid rgb(82 105 232 / 10%);
  border-radius: 50%;
  content: '';
  pointer-events: none;
}

.app-header > div:first-child {
  position: relative;
  z-index: 1;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  margin-bottom: 13px;
  border: 1px solid #e6e9ff;
  border-radius: 999px;
  padding: 5px 10px;
  color: var(--primary-dark);
  background: rgb(255 255 255 / 75%);
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 0.12em;
}

.eyebrow span {
  padding: 0 6px;
  color: #a7b1c5;
}

h1 {
  margin: 0;
  color: var(--text-h);
  font-size: clamp(1.85rem, 5vw, 2.65rem);
  font-weight: 760;
  letter-spacing: -0.045em;
  line-height: 1.12;
}

.intro {
  margin: 12px 0 0;
  color: var(--muted);
  font-size: 14px;
}

.chapter-mark {
  position: relative;
  z-index: 1;
  display: grid;
  flex: 0 0 88px;
  width: 88px;
  height: 88px;
  align-content: center;
  justify-items: center;
  border: 1px solid rgb(255 255 255 / 85%);
  border-radius: 26px;
  color: #fff;
  background: linear-gradient(145deg, #7186f1, #5269e8 70%, #465bd2);
  box-shadow: 0 12px 26px rgb(82 105 232 / 24%);
  transform: rotate(4deg);
}

.chapter-mark span {
  color: rgb(255 255 255 / 78%);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.14em;
}

.chapter-mark strong {
  font-size: 32px;
  line-height: 1;
}

.top-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-bottom: 14px;
}

.top-nav a {
  border: 1px solid rgb(226 232 242 / 85%);
  border-radius: 999px;
  padding: 8px 14px;
  color: #536177;
  background: rgb(255 255 255 / 80%);
  box-shadow: 0 2px 7px rgb(36 55 95 / 3%);
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
  transition:
    color 160ms ease,
    border-color 160ms ease,
    background 160ms ease,
    transform 160ms ease,
    box-shadow 160ms ease;
}

.top-nav a:hover {
  border-color: #c8d0ff;
  color: var(--primary-dark);
  background: #fff;
  box-shadow: 0 5px 13px rgb(36 55 95 / 8%);
  transform: translateY(-2px);
}

/* router-link 匹配当前地址时自动带上 router-link-active 类——白送的高亮 */
.top-nav a.router-link-active,
.top-nav a.router-link-exact-active {
  border-color: var(--primary);
  color: #fff;
  background: var(--primary);
  box-shadow: 0 5px 14px rgb(82 105 232 / 22%);
}

.route-status {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  min-height: 52px;
  margin-bottom: 16px;
  border: 1px solid rgb(226 232 242 / 85%);
  border-radius: 13px;
  padding: 10px 15px;
  background: rgb(255 255 255 / 82%);
  box-shadow: 0 4px 14px rgb(36 55 95 / 3%);
}

.route-location,
.login-status {
  display: flex;
  align-items: center;
  gap: 9px;
  min-width: 0;
  font-size: 13px;
}

.status-label {
  flex: 0 0 auto;
  color: var(--muted);
  font-weight: 600;
}

.route-location code {
  max-width: 100%;
  overflow-wrap: anywhere;
}

.login-status {
  flex: 0 0 auto;
  color: var(--muted);
}

.login-status b {
  color: var(--text-h);
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #e6a344;
  box-shadow: 0 0 0 3px #fff3dc;
}

.status-dot.is-logged-in {
  background: #35a77b;
  box-shadow: 0 0 0 3px #e2f6ee;
}

.status-hint {
  color: #9aa5b7;
}

.route-stage {
  min-height: 240px;
  animation: stage-in 260ms ease both;
}

.app-footer {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-top: 22px;
  border-top: 1px solid rgb(226 232 242 / 80%);
  padding: 15px 2px 0;
  color: #8a96a9;
  font-size: 11px;
}

@keyframes stage-in {
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 640px) {
  #app {
    width: min(100% - 28px, 1080px);
    padding-top: 24px;
  }

  .app-header {
    margin-bottom: 17px;
    border-radius: 19px;
    padding: 24px 21px;
  }

  .chapter-mark {
    flex-basis: 61px;
    width: 61px;
    height: 61px;
    border-radius: 19px;
  }

  .chapter-mark strong {
    font-size: 23px;
  }

  .intro {
    max-width: 300px;
    font-size: 13px;
  }

  .top-nav {
    gap: 6px;
    margin-bottom: 12px;
  }

  .top-nav a {
    padding: 7px 11px;
    font-size: 11px;
  }

  .route-status {
    align-items: flex-start;
    flex-direction: column;
  }

  .route-location {
    flex-wrap: wrap;
  }

  .status-hint {
    display: none;
  }

  .app-footer {
    flex-direction: column;
    gap: 4px;
  }
}

@media (max-width: 400px) {
  #app {
    width: calc(100% - 24px);
  }

  .app-header {
    gap: 12px;
    padding: 21px 17px;
  }

  h1 {
    font-size: 1.7rem;
  }

  .chapter-mark {
    flex-basis: 54px;
    width: 54px;
    height: 54px;
    border-radius: 17px;
  }

  .chapter-mark strong {
    font-size: 21px;
  }
}

</style>