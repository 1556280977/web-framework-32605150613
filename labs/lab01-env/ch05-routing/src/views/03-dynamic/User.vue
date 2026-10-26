<template>
  <div class="user-card">
    <h2>🆔 用户详情</h2>
    <p>用户ID：{{ $route.params.id }}（来自 $route.params.id ）</p>
    <p>从用户 1 直接点去用户 2：地址变了、参数也变了——但组件没有重新创建（看下面的观看次数）。</p>
    <p>本组件被复用观看了 {{ count }} 次（mounted 只跑一次；参数变化走 watch）</p>
    <router-link to="/users">← 回用户列表</router-link>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const count = ref(1)

onMounted(() => {
  console.log('User 组件挂载了：', route.params.id)
})

// 监听路由参数变化，解决组件复用不刷新的问题
watch(
  () => route.params.id,
  () => {
    count.value++
    console.log('路由id变化，watch触发', route.params.id)
  }
)
</script>

<style scoped>
.user-card {
  margin: 0;
  border-left: 4px solid var(--accent);
}

.user-card h2 {
  font-size: 24px;
}

.user-card p {
  color: var(--muted);
  margin: 12px 0;
}

.user-card a {
  font-weight: 650;
}
</style>
