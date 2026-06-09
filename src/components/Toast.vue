<template>
  <Transition
    name="toast"
    @enter="onEnter"
    @leave="onLeave"
  >
    <div
      v-if="visible"
      class="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] animate-slide-in"
    >
      <div
        class="bg-green-600 text-white px-4 py-3 sm:px-6 sm:py-4 rounded-lg shadow-lg flex items-center gap-3 max-w-xs"
      >
        <svg class="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
        </svg>
        <span class="text-sm sm:text-base font-medium">{{ message }}</span>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

interface Props {
  message: string
  duration?: number
  show: boolean
}

const props = withDefaults(defineProps<Props>(), {
  duration: 3000,
})

const visible = ref(false)
let timeoutId: NodeJS.Timeout | null = null

watch(
  () => props.show,
  (newVal) => {
    if (newVal) {
      visible.value = true

      if (timeoutId) clearTimeout(timeoutId)

      timeoutId = setTimeout(() => {
        visible.value = false
      }, props.duration)
    }
  }
)

const onEnter = () => {
  // Animation enter
}

const onLeave = () => {
  // Animation leave
}
</script>

<style scoped>
@keyframes slideIn {
  from {
    transform: translateX(400px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideOut {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(400px);
    opacity: 0;
  }
}

.animate-slide-in {
  animation: slideIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.toast-enter-active {
  animation: slideIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.toast-leave-active {
  animation: slideOut 0.3s ease-in-out;
}

@media (max-width: 640px) {
  @keyframes slideInMobile {
    from {
      transform: translateY(100px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slideOutMobile {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(100px);
      opacity: 0;
    }
  }

  .animate-slide-in {
    animation: slideInMobile 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .toast-enter-active {
    animation: slideInMobile 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .toast-leave-active {
    animation: slideOutMobile 0.3s ease-in-out;
  }
}
</style>
