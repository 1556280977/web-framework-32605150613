<template>
  <div class="app-shell">
    <header class="masthead">
      <a class="brand" href="#/element" aria-label="返回实验台首页">
        <span class="brand-mark">V</span>
        <span class="brand-name">VUE LEARNING LAB <span>/ CHAPTER 06—07</span></span>
      </a>
      <span class="environment-status"><i></i> 实验环境已就绪</span>
    </header>

    <section class="intro-panel" aria-labelledby="page-title">
      <div class="intro-copy">
        <p class="eyebrow">COMPONENTS <span>·</span> REQUESTS <span>·</span> STATE</p>
        <h1 id="page-title" class="hero-title">把前端能力，<span>一站式练起来。</span></h1>
        <p class="intro-description">从 UI 组件到网络请求与状态管理，循序渐进完成 7 个 Vue 实战小实验。</p>
      </div>
      <div class="chapter-mark" aria-hidden="true">
        <span>CHAPTER</span>
        <div><strong>06</strong><i>—</i><strong>07</strong></div>
        <span>VUE WORKSHOP</span>
      </div>
    </section>

    <nav class="course-nav" aria-label="实验课程导航">
      <div class="nav-heading">
        <div>
          <span class="section-kicker">课程目录</span>
          <span class="nav-title">选择一个实验开始</span>
        </div>
        <span class="lesson-count">7 个实验 <span>↗</span></span>
      </div>
      <div class="nav-links">
        <router-link
          v-for="experiment in experiments"
          :key="experiment.path"
          :to="experiment.path"
          class="nav-link"
        >
          <span class="nav-number">{{ experiment.number }}</span>
          <span class="nav-label">{{ experiment.label }}</span>
          <span class="nav-arrow" aria-hidden="true">↗</span>
        </router-link>
      </div>
    </nav>

    <div class="route-status">
      <div class="route-label"><span></span> 当前实验</div>
      <code>{{ $route.fullPath }}</code>
      <span class="route-hint">页面内容已加载</span>
    </div>

    <main class="lesson-content">
      <router-view></router-view>
    </main>

    <footer class="page-footer">
      <span>VUE LEARNING LAB</span>
      <span>学习 · 实践 · 构建</span>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      experiments: [
        { path: '/element', number: '01', label: '按钮与表格' },
        { path: '/form-menu', number: '02', label: '表单与菜单' },
        { path: '/vant', number: '03', label: 'Vant 移动端' },
        { path: '/axios', number: '04', label: 'Axios GET' },
        { path: '/books', number: '05', label: '图书列表 POST' },
        { path: '/vuex', number: '06', label: 'Vuex 计数器' },
        { path: '/pinia', number: '07', label: 'Pinia 计数器' }
      ]
    }
  }
}
</script>

<style scoped>
.app-shell {
  --shell-ink: #19372c;
  --shell-muted: #79877f;
  --shell-green: #287453;
  --shell-line: #e4eae5;

  max-width: 1180px;
  margin: 0 auto;
  padding: 28px 28px 32px;
}

.masthead,
.brand,
.environment-status,
.nav-heading,
.route-status,
.route-label,
.page-footer {
  display: flex;
  align-items: center;
}

.masthead {
  justify-content: space-between;
  min-height: 36px;
}

.brand {
  gap: 11px;
  color: var(--shell-ink);
  text-decoration: none;
}

.brand-mark {
  display: grid;
  width: 34px;
  height: 34px;
  place-items: center;
  border-radius: 11px;
  color: #fff;
  background: var(--shell-ink);
  font-size: 17px;
  font-weight: 750;
  letter-spacing: -1px;
}

.brand-name {
  font-size: 11px;
  font-weight: 750;
  letter-spacing: 1.15px;
}

.brand-name span {
  color: #8b988f;
  font-weight: 600;
}

.environment-status {
  gap: 8px;
  color: #65796c;
  font-size: 12px;
}

.environment-status i,
.route-label > span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #38a273;
  box-shadow: 0 0 0 4px rgba(56, 162, 115, 0.12);
}

.intro-panel {
  position: relative;
  display: flex;
  min-height: 248px;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  margin: 25px 0 20px;
  padding: 38px 48px;
  border: 1px solid rgba(37, 91, 67, 0.12);
  border-radius: 22px;
  background:
    radial-gradient(ellipse at 82% 18%, rgba(166, 218, 183, 0.24), transparent 34%),
    linear-gradient(115deg, #f8fbf7 0%, #edf5ee 100%);
}

.intro-panel::after {
  position: absolute;
  right: 12%;
  bottom: -180px;
  width: 410px;
  height: 300px;
  border: 1px solid rgba(52, 120, 83, 0.1);
  border-radius: 50%;
  content: '';
  transform: rotate(-24deg);
}

.intro-copy,
.chapter-mark {
  position: relative;
  z-index: 1;
}

.eyebrow,
.section-kicker,
.chapter-mark > span {
  color: #74867a;
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 1.5px;
}

.eyebrow {
  margin: 0 0 13px;
}

.eyebrow span {
  padding: 0 4px;
  color: #42a174;
}

.hero-title {
  margin: 0;
  color: var(--shell-ink);
  font-size: clamp(29px, 4vw, 42px);
  font-weight: 760;
  letter-spacing: -1.7px;
  line-height: 1.25;
}

.hero-title::after {
  display: none;
}

.hero-title span {
  color: var(--shell-green);
}

.intro-description {
  max-width: 560px;
  margin: 13px 0 0;
  color: #708077;
  font-size: 14px;
}

.chapter-mark {
  display: flex;
  width: 192px;
  min-width: 192px;
  height: 150px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-right: 20px;
  border: 1px solid rgba(56, 112, 78, 0.15);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.45);
  color: #8b9b8e;
  font-size: 9px;
  letter-spacing: 1.3px;
}

.chapter-mark div {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--shell-ink);
}

.chapter-mark strong {
  font-size: 35px;
  font-weight: 650;
  letter-spacing: -2px;
}

.chapter-mark i {
  color: #64a17a;
  font-size: 18px;
  font-style: normal;
}

.course-nav {
  padding: 22px 24px 24px;
  border: 1px solid #e8ece8;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.82);
  box-shadow: 0 8px 26px rgba(35, 57, 43, 0.035);
}

.nav-heading {
  justify-content: space-between;
  margin-bottom: 16px;
}

.nav-heading > div {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.section-kicker {
  color: #819087;
  font-size: 9px;
  letter-spacing: 1px;
}

.nav-title {
  color: var(--shell-ink);
  font-size: 15px;
  font-weight: 700;
}

.lesson-count {
  padding: 6px 10px;
  border-radius: 999px;
  background: #f2f6f2;
  color: #748178;
  font-size: 11px;
}

.lesson-count span {
  margin-left: 4px;
  color: var(--shell-green);
}

.nav-links {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 9px;
}

.nav-link {
  display: flex;
  min-height: 48px;
  align-items: center;
  gap: 10px;
  padding: 0 12px;
  border: 1px solid #e9eee9;
  border-radius: 11px;
  background: #fff;
  color: #506157;
  text-decoration: none;
  transition: color 160ms ease, background 160ms ease, border-color 160ms ease, transform 160ms ease;
}

.nav-link:hover {
  transform: translateY(-1px);
  border-color: #b7d4c1;
  background: #f7faf7;
  color: var(--shell-ink);
}

.nav-number {
  color: #a0aaa2;
  font-size: 10px;
  font-variant-numeric: tabular-nums;
  font-weight: 700;
}

.nav-label {
  min-width: 0;
  overflow: hidden;
  font-size: 12px;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.nav-arrow {
  margin-left: auto;
  color: #a3afa5;
  font-size: 12px;
  opacity: 0;
  transition: opacity 160ms ease;
}

.nav-link:hover .nav-arrow,
.nav-link.router-link-active .nav-arrow {
  opacity: 1;
}

.nav-link.router-link-active {
  border-color: var(--shell-ink);
  background: var(--shell-ink);
  color: #fff;
}

.nav-link.router-link-active .nav-number,
.nav-link.router-link-active .nav-arrow {
  color: #a9d8b8;
}

.route-status {
  min-height: 49px;
  gap: 11px;
  padding: 0 4px;
}

.route-label {
  gap: 8px;
  color: #607066;
  font-size: 11px;
  font-weight: 650;
}

.route-label > span {
  width: 6px;
  height: 6px;
}

.route-status code {
  padding: 3px 8px;
  border: 1px solid #e8eee8;
  border-radius: 6px;
  background: #f8faf8;
  color: #587261;
  font-size: 11px;
}

.route-hint {
  margin-left: auto;
  color: #9aa49c;
  font-size: 11px;
}

.lesson-content {
  min-height: 180px;
}

.page-footer {
  justify-content: space-between;
  margin-top: 30px;
  padding-top: 16px;
  border-top: 1px solid var(--shell-line);
  color: #96a199;
  font-size: 9px;
  font-weight: 650;
  letter-spacing: 1.1px;
}

.page-footer span + span {
  font-size: 11px;
  font-weight: 450;
  letter-spacing: 0;
}

@media (max-width: 760px) {
  .app-shell {
    padding: 20px 18px 26px;
  }

  .intro-panel {
    min-height: 210px;
    padding: 32px;
  }

  .chapter-mark {
    width: 142px;
    min-width: 142px;
    height: 116px;
    margin-right: 0;
  }

  .chapter-mark strong {
    font-size: 28px;
  }

  .nav-links {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 520px) {
  .app-shell {
    padding: 16px 14px 22px;
  }

  .brand-name {
    font-size: 9px;
    letter-spacing: 0.8px;
  }

  .brand-name span {
    display: block;
    margin-top: 2px;
    font-size: 8px;
  }

  .environment-status {
    font-size: 10px;
  }

  .intro-panel {
    min-height: 0;
    margin-top: 20px;
    padding: 28px 22px;
  }

  .hero-title {
    font-size: 29px;
    letter-spacing: -1.2px;
  }

  .intro-description {
    max-width: 320px;
    font-size: 12px;
  }

  .chapter-mark {
    display: none;
  }

  .course-nav {
    padding: 18px 14px;
  }

  .nav-links {
    gap: 7px;
  }

  .nav-link {
    min-height: 44px;
    gap: 7px;
    padding: 0 8px;
  }

  .nav-label {
    font-size: 11px;
  }

  .route-status {
    gap: 8px;
  }

  .route-hint {
    display: none;
  }
}
</style>
