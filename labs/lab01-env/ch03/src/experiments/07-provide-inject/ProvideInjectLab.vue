<!-- ProvideInjectLab.vue —— 实验 07：跨级传递（3.7）
     教材例 3-12 同构：爷爷 provide，孙子 inject，中间层零传递。
     课程选项式：provide() 选项 + inject: []（教材用 provide()/inject() 函数，📖 对照） -->
<template>
  <div class="lab">
    <h2>实验 07｜provide / inject 跨级（3.7）</h2>
    <p class="muted">爷爷（本组件）provide 一辆车；中间层 MiddleChild <b>零传递</b>；孙子 GrandChild 直接 inject。</p>

    <p>爷爷说：我提供的是「{{ car }}」</p>
    <button @click="car = car === '宝马' ? '奔驰' : '宝马'">换一辆车（注意：选项式 provide 非响应式，孙子不会跟变——见下方说明）</button>

    <MiddleChild />
    <p class="muted">⚠️ 选项式 provide 的值<b>不是响应式</b>（创建时定格）——这是教材 3.7 的进阶边界，组合式传 ref 可保持响应式。</p>
  </div>
</template>

<script>
import MiddleChild from './MiddleChild.vue'

export default {
  name: 'ProvideInjectLab',
  components: { MiddleChild },
  provide() {
    return {
      car: this.car,
      appVersion: 'ch03-lab-v1'     // 顺便再 provide 一个版本号
    }
  },
  data() {
    return { car: '宝马' }
  }
}
</script>

<style scoped>
.lab {
  background: var(--card, #fff);
  border: 1px solid var(--border);
  border-left: 4px solid var(--accent);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 14px 18px;
}

.muted {
  color: var(--muted);
}
</style>

<style scoped>
.lab {
  width: min(100% - 32px, 760px);
  margin: 32px auto;
  padding: 28px 32px;
  border-left-width: 5px;
  border-radius: 16px;
  box-shadow: 0 12px 32px rgb(15 23 42 / 9%);
  line-height: 1.65;
}

.lab h2 {
  margin: 0 0 18px;
  color: var(--text, #1f2937);
  line-height: 1.3;
}

.lab p {
  margin: 14px 0;
}

.lab button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 4px 0 12px;
  padding: 10px 18px;
  border: 0;
  border-radius: 10px;
  background: var(--accent, #4f46e5);
  color: #fff;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 12px rgb(79 70 229 / 22%);
  transition: background-color 160ms ease, box-shadow 160ms ease, transform 160ms ease;
}

.lab button:hover {
  background: var(--accent-hover, #4338ca);
  box-shadow: 0 7px 16px rgb(79 70 229 / 28%);
  transform: translateY(-1px);
}

.lab button:active {
  transform: translateY(0);
}

.lab button:focus-visible {
  outline: 3px solid rgb(99 102 241 / 35%);
  outline-offset: 3px;
}

@media (max-width: 520px) {
  .lab {
    width: calc(100% - 24px);
    margin: 18px auto;
    padding: 22px 20px;
  }
}
</style>
