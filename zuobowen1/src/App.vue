<script setup>
import { computed, ref } from 'vue'

const student = {
  name: '左博文',
  id: '32605150613',
}

const tasks = ref([
  {
    id: 1,
    title: '复习 Vue 响应式基础',
    description: '整理 ref、computed 和 watch 的使用场景',
    category: '课程学习',
    completed: true,
  },
  {
    id: 2,
    title: '完成组件化练习',
    description: '尝试拆分页面，并通过 props 传递数据',
    category: '项目实践',
    completed: false,
  },
  {
    id: 3,
    title: '阅读 Vue 列表渲染文档',
    description: '重点了解 v-for、key 和条件渲染',
    category: '课程学习',
    completed: false,
  },
])

const taskTitle = ref('')
const taskDescription = ref('')
const taskCategory = ref('课程学习')
const searchText = ref('')
const activeFilter = ref('全部')
let nextTaskId = 4

const filters = ['全部', '进行中', '已完成']

const completedCount = computed(
  () => tasks.value.filter((task) => task.completed).length,
)

const progress = computed(() =>
  tasks.value.length
    ? Math.round((completedCount.value / tasks.value.length) * 100)
    : 0,
)

const visibleTasks = computed(() => {
  const keyword = searchText.value.trim().toLocaleLowerCase()

  return tasks.value.filter((task) => {
    const matchesFilter =
      activeFilter.value === '全部' ||
      (activeFilter.value === '已完成' && task.completed) ||
      (activeFilter.value === '进行中' && !task.completed)
    const matchesSearch =
      !keyword ||
      `${task.title} ${task.description} ${task.category}`
        .toLocaleLowerCase()
        .includes(keyword)

    return matchesFilter && matchesSearch
  })
})

function addTask() {
  const title = taskTitle.value.trim()
  if (!title) return

  tasks.value.unshift({
    id: nextTaskId++,
    title,
    description: taskDescription.value.trim(),
    category: taskCategory.value,
    completed: false,
  })
  taskTitle.value = ''
  taskDescription.value = ''
  activeFilter.value = '全部'
}

function removeTask(taskId) {
  tasks.value = tasks.value.filter((task) => task.id !== taskId)
}

function clearCompleted() {
  tasks.value = tasks.value.filter((task) => !task.completed)
}
</script>

<template>
  <main class="app-shell">
    <header class="topbar">
      <a class="brand" href="#" aria-label="学习清单首页">
        <span class="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="m5 12.5 4.5 4.5L19 7" />
          </svg>
        </span>
        <span>拾光 <span class="brand-light">学习清单</span></span>
      </a>
      <div class="student-chip">
        <span class="avatar" aria-hidden="true">{{ student.name.slice(0, 1) }}</span>
        <span>{{ student.name }}</span>
      </div>
    </header>

    <section class="welcome">
      <div>
        <p class="eyebrow">STUDY DASHBOARD</p>
        <h1>把今天的目标，<span>一件件完成。</span></h1>
        <p class="welcome-copy">
          你好，{{ student.name }}。保持专注，每一点进步都值得记录。
        </p>
      </div>
      <div class="student-id">学号 <strong>{{ student.id }}</strong></div>
    </section>

    <section class="summary-grid" aria-label="学习进度统计">
      <article class="summary-card">
        <span class="summary-icon purple" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <rect x="5" y="4" width="14" height="16" rx="3" />
            <path d="M9 8h6M9 12h6M9 16h3" />
          </svg>
        </span>
        <div>
          <p>全部任务</p>
          <strong>{{ tasks.length }}<small> 项</small></strong>
        </div>
      </article>
      <article class="summary-card">
        <span class="summary-icon green" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="m5 12.5 4.5 4.5L19 7" />
          </svg>
        </span>
        <div>
          <p>已经完成</p>
          <strong>{{ completedCount }}<small> 项</small></strong>
        </div>
      </article>
      <article class="summary-card progress-card">
        <div class="progress-heading">
          <div>
            <p>今日完成率</p>
            <strong>{{ progress }}<small>%</small></strong>
          </div>
          <span class="summary-icon orange" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M6 16 16 6M7 6h9v9" />
            </svg>
          </span>
        </div>
        <div
          class="progress-track"
          role="progressbar"
          :aria-valuenow="progress"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label="任务完成率"
        >
          <span :style="{ width: `${progress}%` }"></span>
        </div>
      </article>
    </section>

    <div class="content-grid">
      <section class="tasks-panel">
        <div class="section-heading">
          <div>
            <p class="eyebrow">YOUR PLAN</p>
            <h2>学习任务</h2>
          </div>
          <button
            class="text-button"
            type="button"
            :disabled="completedCount === 0"
            @click="clearCompleted"
          >
            清除已完成
          </button>
        </div>

        <div class="task-toolbar">
          <label class="search-box">
            <span aria-hidden="true">⌕</span>
            <input
              v-model="searchText"
              type="search"
              placeholder="搜索任务..."
              aria-label="搜索任务"
            />
          </label>
          <div class="filter-tabs" aria-label="筛选任务">
            <button
              v-for="filter in filters"
              :key="filter"
              type="button"
              :class="{ active: activeFilter === filter }"
              :aria-pressed="activeFilter === filter"
              @click="activeFilter = filter"
            >
              {{ filter }}
            </button>
          </div>
        </div>

        <ul v-if="visibleTasks.length" class="task-list">
          <li v-for="task in visibleTasks" :key="task.id" class="task-item">
            <button
              class="task-check"
              :class="{ checked: task.completed }"
              type="button"
              :aria-label="task.completed ? '标记为进行中' : '标记为已完成'"
              :aria-pressed="task.completed"
              @click="task.completed = !task.completed"
            >
              <span v-if="task.completed" aria-hidden="true">✓</span>
            </button>
            <div class="task-content">
              <p class="task-title" :class="{ completed: task.completed }">
                {{ task.title }}
              </p>
              <p v-if="task.description" class="task-description">
                {{ task.description }}
              </p>
              <span class="category-tag">{{ task.category }}</span>
            </div>
            <button
              class="delete-button"
              type="button"
              :aria-label="`删除任务：${task.title}`"
              @click="removeTask(task.id)"
            >
              ×
            </button>
          </li>
        </ul>

        <div v-else class="empty-state">
          <span aria-hidden="true">☼</span>
          <p>{{ tasks.length ? '没有找到符合条件的任务' : '还没有任务，添加一个开始吧' }}</p>
        </div>
      </section>

      <aside class="add-panel">
        <div class="section-heading">
          <div>
            <p class="eyebrow">MAKE IT HAPPEN</p>
            <h2>添加新任务</h2>
          </div>
          <span class="add-icon" aria-hidden="true">＋</span>
        </div>

        <form class="task-form" @submit.prevent="addTask">
          <label for="task-title">任务名称</label>
          <input
            id="task-title"
            v-model="taskTitle"
            type="text"
            maxlength="60"
            placeholder="例如：完成今日学习计划"
            required
          />

          <label for="task-description">补充说明 <span>选填</span></label>
          <textarea
            id="task-description"
            v-model="taskDescription"
            maxlength="120"
            rows="3"
            placeholder="写下任务的具体内容..."
          ></textarea>

          <label for="task-category">任务分类</label>
          <select id="task-category" v-model="taskCategory">
            <option>课程学习</option>
            <option>项目实践</option>
            <option>课外阅读</option>
          </select>

          <button class="submit-button" type="submit">添加到清单 <span>→</span></button>
        </form>
      </aside>
    </div>

    <footer class="footer-note">
      <span>慢慢来，也是在前进。</span>
      <span>用 Vue 记录每一次成长</span>
    </footer>
  </main>
</template>
