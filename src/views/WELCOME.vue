<template>
  <div class="dashboard-page">
    <div class="dashboard-card">

      <!-- Header -->
      <div class="header">
        <h1>WELCOME ADMIN!</h1>
        <div class="datetime">
          <span>{{ currentDate }}</span>
          <span>{{ currentTime }}</span>
        </div>
      </div>

      <!-- Navigation Buttons -->
      <div class="menu-list">

        <router-link to="/in" class="menu-btn">
          Students' Attendance (Time In)
        </router-link>

        <router-link to="/out" class="menu-btn">
          Students' Attendance (Time Out)
        </router-link>

        <router-link to="/event" class="menu-btn">
          Event Attendance
        </router-link>

        <router-link to="/visitors" class="menu-btn">
          Visitors Attendance Display / Manual Input
        </router-link>

      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentDate = ref('')
const currentTime = ref('')

let interval = null

const updateDateTime = () => {
  const now = new Date()

  currentDate.value = now.toLocaleDateString('en-PH', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  currentTime.value = now.toLocaleTimeString('en-PH', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
}

onMounted(() => {
  updateDateTime()
  interval = setInterval(updateDateTime, 1000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<style scoped>
.dashboard-page {
  min-height: 100vh;
  padding: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  background:
    radial-gradient(circle at top left,
      rgba(22, 163, 74, 0.35),
      transparent 35%),
    radial-gradient(circle at bottom right,
      rgba(34, 197, 94, 0.25),
      transparent 35%),
    #07160a;
}

.dashboard-card {
  width: 100%;
  max-width: 700px;

  padding: 32px;

  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(18px);

  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 24px;

  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
}

.header {
  text-align: center;
  margin-bottom: 28px;
}

.header h1 {
  margin: 0;

  color: white;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  letter-spacing: -0.03em;
}

.header p {
  margin-top: 8px;
  margin-bottom: 18px;

  color: #a5d6a7;
  font-size: 1rem;
  font-weight: 600;
}

/* Date & Time */

.datetime {
  display: flex;
  flex-direction: column;
  gap: 6px;

  padding: 16px;

  border-radius: 16px;

  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.datetime span:first-child {
  color: white;
  font-weight: 600;
}

.datetime span:last-child {
  color: #86efac;
  font-size: 1.15rem;
  font-weight: 700;
}

/* Buttons */

.menu-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.menu-btn {
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 70px;

  text-decoration: none;
  text-align: center;

  color: white;
  font-weight: 700;
  font-size: 15px;

  padding: 16px;

  border-radius: 18px;

  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);

  transition: all 0.25s ease;
}

.menu-btn:hover {
  background: #16a34a;
  border-color: #16a34a;

  transform: translateY(-2px);

  box-shadow: 0 6px 20px rgba(22, 163, 74, 0.35);
}

.menu-btn:active {
  transform: scale(0.98);
}

/* Responsive */

@media (max-width: 768px) {
  .dashboard-card {
    padding: 24px;
  }

  .menu-btn {
    min-height: 64px;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .dashboard-page {
    padding: 14px;
  }

  .dashboard-card {
    padding: 20px;
    border-radius: 20px;
  }

  .header h1 {
    font-size: 1.8rem;
  }

  .datetime {
    padding: 14px;
  }

  .menu-btn {
    min-height: 60px;
    padding: 14px;
  }
}
</style>