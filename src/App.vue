<template>
  <div>
    <!-- ACCESS MODAL -->
    <div v-if="!isAuthorized" class="modal-overlay">
      <div class="modal">
        <h2>Enter Access Code</h2>
        <input
          v-model="inputCode"
          type="password"
          placeholder="Enter code"
        />
        <button @click="checkCode">Enter</button>
        <p v-if="error" class="error">Wrong code</p>
      </div>
    </div>

    <!-- MAIN APP -->
    <router-view v-if="isAuthorized" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const HARDCODED_CODE = 'LIB123' // 🔑 change this

const inputCode = ref('')
const isAuthorized = ref(false)
const error = ref(false)

// optional: remember access
onMounted(() => {
  const saved = localStorage.getItem('authorized')
  if (saved === 'true') {
    isAuthorized.value = true
  }
})

function checkCode() {
  if (inputCode.value === HARDCODED_CODE) {
    isAuthorized.value = true
    localStorage.setItem('authorized', 'true') // persist access
  } else {
    error.value = true
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

/* OVERLAY (blurred background) */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(6, 32, 9, 0.75); /* dark green tint */
  backdrop-filter: blur(6px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

/* MODAL CONTAINER */
.modal {
  background: linear-gradient(145deg, #0d2b0f, #123d17);
  padding: 2rem;
  border-radius: 16px;
  width: 320px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  text-align: center;
  color: #e8f5e9;
  animation: fadeInScale 0.3s ease;
}

/* TITLE */
.modal h2 {
  margin-bottom: 1rem;
  font-weight: 600;
  letter-spacing: 0.5px;
}

/* INPUT FIELD */
.modal input {
  margin-top: 10px;
  padding: 10px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #2e7d32;
  background: #081c0a;
  color: #e8f5e9;
  outline: none;
  transition: 0.2s;
}

.modal input::placeholder {
  color: #a5d6a7;
}

.modal input:focus {
  border-color: #66bb6a;
  box-shadow: 0 0 0 2px rgba(102, 187, 106, 0.3);
}

/* BUTTON */
.modal button {
  margin-top: 15px;
  padding: 10px;
  width: 100%;
  border-radius: 8px;
  border: none;
  background: linear-gradient(135deg, #2e7d32, #66bb6a);
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: 0.25s ease;
}

.modal button:hover {
  transform: translateY(-1px);
  box-shadow: 0 5px 15px rgba(102, 187, 106, 0.4);
}

/* ERROR MESSAGE */
.error {
  color: #ff8a80;
  margin-top: 10px;
  font-size: 0.9rem;
}

/* ANIMATION */
@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>