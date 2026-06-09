<template>
  <div class="relative min-h-screen w-screen text-white flex flex-col overflow-x-hidden bg-[#0b3d1f]">
    <div
      class="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20"
      :style="backgroundStyle"
    ></div>

    <div class="relative z-10 flex flex-col h-full w-full">
      <!-- Header Section -->
      <div class="shrink-0 px-3 pt-2 pb-3 sm:px-4 sm:pt-3 sm:pb-4 md:px-6 md:pt-4 md:pb-5 lg:px-8 lg:pt-5 lg:pb-6 xl:px-10 xl:pt-6 xl:pb-8">
        <div class="text-center mb-2 sm:mb-3">
          <h1
            class="bg-[linear-gradient(90deg,#FFC300_0%,#ffffff_50%,#1b5e20_100%)] bg-clip-text text-lg font-black uppercase leading-tight text-transparent drop-shadow-md sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl"
            style="font-family: Impact"
          >
            CARAGA STATE UNIVERSITY
          </h1>
          <h2
            class="mt-1 text-base font-bold uppercase text-green-100 sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl"
            style="font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"
          >
            HERO LEARNING COMMONS
          </h2>
        </div>
      </div>

      <!-- Main Content Area -->
      <div class="flex flex-col px-4 pb-4 gap-3 flex-1 min-h-0 sm:px-5 sm:pb-5 sm:gap-4 md:px-6 md:pb-6 md:gap-5 lg:px-8 lg:pb-8 lg:gap-6 xl:px-10 xl:pb-10 xl:gap-8 items-center sm:items-stretch">
        
        <!-- Date & Time Display -->
        <div
          class="w-full max-w-sm bg-white/40 border border-white/10 px-4 py-3 rounded-xl text-center shrink-0 sm:px-5 sm:py-4 sm:rounded-2xl md:px-6 md:py-5 lg:px-8 lg:py-6"
        >
          <div class="text-[10px] sm:text-xs md:text-sm opacity-70 uppercase font-bold tracking-wide">
            {{ formattedDate }}
          </div>
          <div class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-mono font-bold text-green-400 mt-1.5 sm:mt-2">
            {{ formattedTime }}
          </div>
        </div>

        <!-- Visitor Details Form -->
        <div class="w-full max-w-sm bg-white/10 border rounded-xl overflow-hidden flex flex-col shadow-2xl shrink-0 sm:rounded-2xl">
          <div class="p-3 sm:p-4 md:p-5 bg-white/10 flex justify-between items-center px-4 sm:px-5 md:px-6 shrink-0">
            <span class="text-xs sm:text-sm font-black tracking-widest uppercase">Visitor Details</span>
          </div>

          <div class="p-4 sm:p-5 md:p-6 bg-black/40 flex flex-col gap-3 sm:gap-4 md:gap-5">

            <!-- Name Field with Honorific -->
            <div class="flex flex-col gap-2 sm:gap-2.5">
              <label class="text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase text-white/60">
                Name
              </label>
              <div class="flex flex-col sm:flex-row gap-2 sm:gap-2.5">
                <select
                  v-model="honorificInput"
                  class="honorific-select p-2.5 sm:p-3 rounded border border-white/80 text-white bg-transparent text-xs sm:text-sm md:text-base w-full sm:w-24 md:w-28"
                >
                  <option value="">None</option>
                  <option value="Mr">Mr</option>
                  <option value="Ms">Ms</option>
                  <option value="Mrs">Mrs</option>
                </select>

                <input
                  v-model="idInput"
                  type="text"
                  placeholder="Enter visitor name"
                  class="flex-1 p-2.5 sm:p-3 rounded border border-white/80 text-white bg-transparent text-xs sm:text-sm md:text-base"
                />
              </div>
            </div>

            <!-- Designation Field -->
            <div class="flex flex-col gap-2 sm:gap-2.5">
              <label class="text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase text-white/60">
                Designation
              </label>
              <input
                v-model="designationInput"
                type="text"
                placeholder="Enter visitor's designation"
                class="w-full p-2.5 sm:p-3 rounded border border-white/80 text-white bg-transparent text-xs sm:text-sm md:text-base"
              />
            </div>

            <!-- Contact Information -->
            <div class="flex flex-col gap-2 sm:gap-2.5">
              <label class="text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase text-white/60">
                Email or contact number
              </label>
              <div class="flex flex-col sm:grid sm:grid-cols-[1fr_auto_1fr] sm:items-center gap-2 sm:gap-2.5">
                <input
                  v-model="emailInput"
                  type="email"
                  placeholder="Email address"
                  class="p-2.5 sm:p-3 rounded border border-white/80 text-white bg-transparent text-xs sm:text-sm md:text-base w-full"
                />
                <span class="hidden sm:block text-white/60 font-semibold text-xs sm:text-sm uppercase text-center">OR</span>
                <span class="sm:hidden text-white/60 font-semibold text-xs uppercase text-center">— OR —</span>
                <input
                  v-model="cellphoneInput"
                  type="text"
                  placeholder="Contact no."
                  class="p-2.5 sm:p-3 rounded border border-white/80 text-white bg-transparent text-xs sm:text-sm md:text-base w-full"
                />
              </div>
            </div>

            <!-- Institution/School/Company -->
            <div class="flex flex-col gap-2 sm:gap-2.5">
              <label class="text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase text-white/60">
                Institution/School/Company
              </label>
              <input
                v-model="institutionInput"
                type="text"
                placeholder="Institution / School / Company"
                @keyup.enter="handleLogin()"
                class="w-full p-2.5 sm:p-3 rounded border border-white/80 text-white bg-transparent text-xs sm:text-sm md:text-base"
              />
            </div>

            <!-- City Field -->
            <div class="flex flex-col gap-2 sm:gap-2.5">
              <label class="text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase text-white/60">
                City
              </label>
              <input
                v-model="cityInput"
                type="text"
                placeholder="City"
                @keyup.enter="handleLogin()"
                class="w-full p-2.5 sm:p-3 rounded border border-white/80 text-white bg-transparent text-xs sm:text-sm md:text-base"
              />
            </div>

            <!-- Province Field -->
            <div class="flex flex-col gap-2 sm:gap-2.5">
              <label class="text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase text-white/60">
                Province
              </label>
              <input
                v-model="provinceInput"
                type="text"
                placeholder="Province"
                @keyup.enter="handleLogin()"
                class="w-full p-2.5 sm:p-3 rounded border border-white/80 text-white bg-transparent text-xs sm:text-sm md:text-base"
              />
            </div>

            <!-- Submit Button -->
            <button
              @click="handleLogin()"
              :disabled="!canAddVisitor || isProcessing"
              class="w-full py-2.5 sm:py-3 md:py-4 rounded-lg font-bold transition-all border border-green-500 shadow-md text-xs sm:text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed bg-green-700 hover:bg-green-600"
            >
              {{ isProcessing ? 'ADDING...' : 'ADD' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Transition name="modal">
    <div
      v-if="showEventModal"
      class="fixed inset-0 z-50 flex items-center justify-center"
      style="background: rgba(0, 0, 0, 0.55); backdrop-filter: blur(4px)"
    >
      <div class="event-modal">
        <div class="event-modal-header">
          <div class="event-modal-icon">
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
              <rect
                x="2"
                y="3.5"
                width="12"
                height="10"
                rx="1.5"
                stroke="#3B6D11"
                stroke-width="1.3"
              />
              <path
                d="M5 2v3M11 2v3M2.5 7.5h11"
                stroke="#3B6D11"
                stroke-width="1.3"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div class="event-modal-header-text">
            <div class="event-modal-title">Select event</div>
            <div class="event-modal-subtitle">Choose an event to record attendance for</div>
          </div>
          <button @click="showEventModal = false" class="event-modal-close">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M2 2l8 8M10 2L2 10"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>

        <div class="event-modal-search-wrap">
          <svg
            class="event-modal-search-icon"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <circle cx="6" cy="6" r="4" stroke="#aaa" stroke-width="1.3" />
            <path d="M9.5 9.5l2 2" stroke="#aaa" stroke-width="1.3" stroke-linecap="round" />
          </svg>
          <input
            v-model="eventSearch"
            type="text"
            placeholder="Search events..."
            class="event-modal-search-input"
          />
        </div>

        <div class="event-modal-body">
          <div class="event-modal-section-label">Available events</div>
          <div class="event-modal-list">
            <button
              v-for="event in filteredEvents"
              :key="event.id"
              @click="selectedEvent = event"
              :class="['event-modal-item', selectedEvent?.id === event.id ? 'active' : '']"
            >
              <div class="event-modal-item-icon">
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <rect
                    x="2"
                    y="3.5"
                    width="12"
                    height="10"
                    rx="1.5"
                    stroke="currentColor"
                    stroke-width="1.3"
                  />
                  <path
                    d="M5 2v3M11 2v3M2.5 7.5h11"
                    stroke="currentColor"
                    stroke-width="1.3"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <div class="event-modal-item-text">
                <span class="event-modal-name">{{ event.title }}</span>
              </div>
              <div class="event-modal-radio">
                <div class="event-modal-radio-dot"></div>
              </div>
            </button>

            <div v-if="filteredEvents.length === 0" class="event-modal-empty">No events found.</div>
          </div>
        </div>

        <div class="event-modal-footer">
          <span class="event-modal-selection-hint">
            {{ selectedEvent ? '1 event selected' : 'No event selected' }}
          </span>
          <div class="event-modal-footer-actions">
            <button @click="showEventModal = false" class="event-modal-btn-cancel">Cancel</button>
            <button
              @click="goToEvent"
              :disabled="!selectedEvent"
              :class="['event-modal-btn-proceed', selectedEvent ? 'ready' : '']"
            >
              Proceed to event
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path
                  d="M2 6.5h9M8 3.5l3 3-3 3"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>

  <!-- Toast Notification -->
  <Toast :show="showToast" message="You are now logged in!" :duration="3000" />
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import Toast from '@/components/Toast.vue'
import {
  createVisitorLog,
  getVisitorLogs,
  updateVisitorTimeOut,
} from '@/services/attendanceVisitorsService'
import { supabase } from '@/supabase'

const ICON_LIBRARY = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" stroke-width="1.3"/>
  <path d="M5 8h6M5 5.5h6M5 10.5h4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
</svg>`

const ICON_EVENT = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.3"/>
  <path d="M8 5v3.5l2 1.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`

const ICON_VISITORS = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="6" cy="5" r="2" stroke="currentColor" stroke-width="1.3"/>
  <path d="M2 13c0-2.21 1.79-4 4-4s4 1.79 4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
  <circle cx="11.5" cy="5.5" r="1.5" stroke="currentColor" stroke-width="1.2"/>
  <path d="M13.5 13c0-1.66-1.12-3-2.5-3" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
</svg>`

const attendanceTypes = [
  { value: 'library', label: 'Library', icon: ICON_LIBRARY },
  { value: 'event', label: 'Event', icon: ICON_EVENT },
  { value: 'visitors', label: 'Visitors', icon: ICON_VISITORS },
]

interface Event {
  id: string
  title: string
}

interface SchoolInfo {
  school_name: string
  building_title: string
  system_name: string
  bg_path: string
  logo_path: string
  max_capacity: number
  opening_time: string
  closing_time: string
  address: string
}

const idInput = ref('')
const honorificInput = ref('')
const designationInput = ref('')
const emailInput = ref('')
const cellphoneInput = ref('')
const institutionInput = ref('')
const cityInput = ref('')
const provinceInput = ref('')
const attendanceLogs = ref<any[]>([])
const activeInsideCount = ref(0)
const isProcessing = ref(false)
const optionalTimeOutMap = ref<Record<string, string>>({})
const pendingMeta = ref<Record<string, { email: string; cellphone: string; institution: string; honorific?: string; designation?: string; gender?: string; city?: string; province?: string }>>({})
const currentTime = ref(new Date())
const showToast = ref(false)
let timer: any
let schoolInfoTimer: any
let attendancePageChannel: any = null

const attendanceType = ref<string>('visitors')
const showEventModal = ref<boolean>(false)
const events = ref<Event[]>([])
const selectedEvent = ref<Event | null>(null)
const eventSearch = ref<string>('')

const schoolInfo = ref<SchoolInfo>({
  school_name: '',
  building_title: '',
  system_name: '',
  bg_path: '',
  logo_path: '',
  max_capacity: 0,
  opening_time: '',
  closing_time: '',
  address: '',
})

const router = useRouter()

const backgroundStyle = computed(() => ({
  backgroundImage: `url('${schoolInfo.value.bg_path || '/hero-outside.png'}')`,
}))

const filteredEvents = computed(() => {
  const q = eventSearch.value.toLowerCase().trim()
  if (!q) return events.value
  return events.value.filter((e) => e.title.toLowerCase().includes(q))
})

const canAddVisitor = computed(() => {
  const hasContact = emailInput.value.trim().length > 0 || cellphoneInput.value.trim().length > 0
  return (
    idInput.value.trim().length > 0 &&
    hasContact &&
    institutionInput.value.trim().length > 0
  )
})

const fetchVisitorLogs = async () => {
  try {
    const logs = await getVisitorLogs()
    attendanceLogs.value = logs
  } catch (err) {
    console.error('Failed to fetch visitor logs:', err)
  }
}

const fetchActiveInsideCount = async () => {
  try {
    const now = new Date()
    const today = now.toISOString().split('T')[0]

    const { data, error } = await supabase
      .from('attendance_logs_visitors')
      .select('id, time_in')
      .gte('time_in', `${today}T00:00:00`)
      .lte('time_in', `${today}T23:59:59`)

    if (error) {
      console.error('Failed to fetch active visitor count:', error)
      activeInsideCount.value = 0
      return
    }

    activeInsideCount.value = data?.length || 0
    console.log('Active visitors count updated:', activeInsideCount.value, 'Records:', data)
  } catch (err) {
    console.error('Failed to fetch active visitor count:', err)
    activeInsideCount.value = 0
  }
}

const refreshAttendanceData = async () => {
  await Promise.all([fetchVisitorLogs(), fetchActiveInsideCount()])
}

const handleLogin = async () => {
  if (isProcessing.value) return

  const submittedName = idInput.value.trim()
  const submittedHonorific = honorificInput.value.trim()
  const submittedDesignation = designationInput.value.trim()
  const submittedEmail = emailInput.value.trim()
  const submittedCellphone = cellphoneInput.value.trim()
  const submittedInstitution = institutionInput.value.trim()
  const submittedCity = cityInput.value.trim()
  const submittedProvince = provinceInput.value.trim()
  const submittedGender = submittedHonorific === 'Mr' ? 'Male' : (submittedHonorific === 'Ms' || submittedHonorific === 'Mrs' ? 'Female' : '')
  const submittedContact =
    submittedEmail && submittedCellphone
      ? `${submittedEmail}/${submittedCellphone}`
      : (submittedCellphone || submittedEmail)

  if (!submittedName || !submittedContact || !submittedInstitution) return

  isProcessing.value = true

  try {
    const createdLog = await createVisitorLog({
      fullName: submittedName,
      honorific: submittedHonorific,
      designation: submittedDesignation,
      gender: submittedGender,
      contact: submittedContact,
      institution: submittedInstitution,
      city: submittedCity,
      province: submittedProvince,
    })

    const localRow = {
      ...(createdLog || {}),
      id: createdLog?.id ?? `${Date.now()}`,
      full_name: submittedName,
      honorific: submittedHonorific,
      designation: submittedDesignation,
      gender: submittedGender,
      contact: submittedContact,
      institution: submittedInstitution,
      city: submittedCity,
      province: submittedProvince,
      time_in: createdLog?.time_in ?? new Date().toISOString(),
    }

    attendanceLogs.value = [localRow, ...attendanceLogs.value]
    pendingMeta.value[localRow.id] = {
      email: submittedEmail,
      cellphone: submittedContact,
      institution: submittedInstitution,
      honorific: submittedHonorific,
      designation: submittedDesignation,
      gender: submittedGender,
      city: submittedCity,
      province: submittedProvince,
    }

    await refreshAttendanceData()

    // Show toast notification
    showToast.value = true

    idInput.value = ''
    honorificInput.value = ''
    designationInput.value = ''
    emailInput.value = ''
    cellphoneInput.value = ''
    institutionInput.value = ''
    cityInput.value = ''
    provinceInput.value = ''
  } catch (err) {
    console.error('Attendance error:', err)
  } finally {
    setTimeout(() => {
      isProcessing.value = false
    }, 2000)
  }
}

const markOptionalTimeOut = (logId: string) => {
  updateVisitorTimeOut(logId)
    .then(async () => {
      delete optionalTimeOutMap.value[logId]
      await refreshAttendanceData()
    })
    .catch((err) => {
      console.error('Failed to update visitor time out:', err)
      optionalTimeOutMap.value[logId] = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      })
    })
}

const fetchEvents = async () => {
  const { data, error } = await supabase.from('events').select('id, title').eq('is_active', true)

  if (error) {
    console.error('Error fetching events:', error)
    return
  }

  events.value = (data || []) as Event[]
}

const setAttendanceType = async (value: string) => {
  attendanceType.value = value
  await handleAttendanceChange()
}

const handleAttendanceChange = async () => {
  if (attendanceType.value === 'event') {
    await fetchEvents()
    eventSearch.value = ''
    selectedEvent.value = null
    showEventModal.value = true
  }

  if (attendanceType.value === 'visitors') {
    goToVisitors()
  }

  if (attendanceType.value === 'library') {
    goToLibrary()
  }
}

const goToEvent = () => {
  if (!selectedEvent.value) return
  router.push({ name: 'event', query: { id: selectedEvent.value.id } })
  showEventModal.value = false
}

const goToVisitors = () => {
  router.push({ name: 'visitors' })
  showEventModal.value = false
}

const goToLibrary = () => {
  router.push({ name: 'access' })
  showEventModal.value = false
}

onMounted(async () => {
  await refreshAttendanceData()
  timer = setInterval(() => (currentTime.value = new Date()), 1000)

  // Set up real-time subscription for visitor logs
  attendancePageChannel = supabase
    .channel('attendance_logs_visitors_channel')
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'attendance_logs_visitors',
      },
      () => {
        console.log('Visitor data changed, refreshing...')
        refreshAttendanceData()
      }
    )
    .subscribe()
})

onUnmounted(() => {
  clearInterval(timer)
  clearInterval(schoolInfoTimer)
  if (attendancePageChannel) {
    supabase.removeChannel(attendancePageChannel)
  }
})

const formattedDate = computed(() =>
  currentTime.value.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }),
)

const formattedTime = computed(() =>
  currentTime.value.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }),
)
</script>

<style>
.hidden-scroll {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.hidden-scroll::-webkit-scrollbar {
  display: none;
}

.attendance-pill-group {
  display: flex;
  background: rgba(255, 255, 255, 0.08);
  border: 0.5px solid rgba(255, 255, 255, 0.2);
  border-radius: 14px;
  padding: 4px;
  gap: 4px;
}

.attendance-pill-btn {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 8px 18px;
  border-radius: 10px;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.55);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition:
    background 0.18s ease,
    color 0.18s ease,
    transform 0.12s ease;
  white-space: nowrap;
  outline: none;
}

.attendance-pill-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.9);
}

.attendance-pill-btn:active {
  transform: scale(0.97);
}

.attendance-pill-btn.active {
  background: #16a34a;
  color: #ffffff;
  box-shadow: 0 2px 12px rgba(22, 163, 74, 0.4);
}

.pill-icon {
  display: flex;
  align-items: center;
  line-height: 0;
}

.event-modal {
  width: 100%;
  max-width: 480px;
  margin: 16px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.18);
  animation: modal-pop 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);
  max-height: 90vh;
  overflow-y: auto;
}

@media (min-width: 640px) {
  .event-modal {
    border-radius: 24px;
    max-height: 80vh;
  }
}

.event-modal-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border-bottom: 1px solid #f0f0f0;
  flex-wrap: wrap;
}

@media (min-width: 640px) {
  .event-modal-header {
    gap: 14px;
    padding: 22px 24px 18px;
  }
}

.event-modal-icon {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: #eaf3de;
  border: 1px solid #c8e09a;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

@media (min-width: 640px) {
  .event-modal-icon {
    width: 48px;
    height: 48px;
    border-radius: 14px;
  }
}

.event-modal-header-text {
  flex: 1;
}

.event-modal-title {
  font-size: 14px;
  font-weight: 800;
  color: #111;
  margin-bottom: 3px;
  letter-spacing: -0.01em;
}

@media (min-width: 640px) {
  .event-modal-title {
    font-size: 16px;
  }
}

.event-modal-subtitle {
  font-size: 11px;
  color: #999;
}

@media (min-width: 640px) {
  .event-modal-subtitle {
    font-size: 12.5px;
  }
}

.event-modal-close {
  width: 28px;
  height: 28px;
  border-radius: 8px;
  border: 1px solid #e8e8e8;
  background: #f5f5f5;
  color: #aaa;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  transition:
    background 0.15s,
    color 0.15s;
}

@media (min-width: 640px) {
  .event-modal-close {
    width: 32px;
    height: 32px;
    border-radius: 9px;
  }
}

.event-modal-close:hover {
  background: #ebebeb;
  color: #555;
}

.event-modal-search-wrap {
  position: relative;
  padding: 12px 16px 0;
}

@media (min-width: 640px) {
  .event-modal-search-wrap {
    padding: 16px 20px 0;
  }
}

.event-modal-search-icon {
  position: absolute;
  left: 28px;
  top: 20px;
  pointer-events: none;
}

@media (min-width: 640px) {
  .event-modal-search-icon {
    left: 34px;
    top: 26px;
  }
}

.event-modal-search-input {
  width: 100%;
  padding: 9px 12px 9px 32px;
  font-size: 12px;
  border-radius: 8px;
  border: 1px solid #e8e8e8;
  background: #f7f7f7;
  color: #111;
  box-sizing: border-box;
  outline: none;
  transition:
    border-color 0.15s,
    background 0.15s;
}

@media (min-width: 640px) {
  .event-modal-search-input {
    padding: 11px 14px 11px 36px;
    font-size: 13.5px;
    border-radius: 10px;
  }
}

.event-modal-search-input::placeholder {
  color: #c0c0c0;
}

.event-modal-search-input:focus {
  border-color: #3b6d11;
  background: #fff;
}

.event-modal-body {
  padding: 12px 16px 6px;
}

@media (min-width: 640px) {
  .event-modal-body {
    padding: 16px 20px 6px;
  }
}

.event-modal-section-label {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #c0c0c0;
  margin-bottom: 8px;
}

@media (min-width: 640px) {
  .event-modal-section-label {
    font-size: 10px;
    margin-bottom: 10px;
  }
}

.event-modal-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-height: 240px;
  overflow-y: auto;
  scrollbar-width: none;
}

.event-modal-list::-webkit-scrollbar {
  display: none;
}

.event-modal-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 11px 12px;
  border-radius: 10px;
  border: 1.5px solid #efefef;
  background: #fafafa;
  color: #333;
  cursor: pointer;
  text-align: left;
  width: 100%;
  transition: all 0.15s;
}

@media (min-width: 640px) {
  .event-modal-item {
    gap: 12px;
    padding: 14px 16px;
    border-radius: 12px;
  }
}

.event-modal-item:hover {
  background: #f3f3f3;
  border-color: #e0e0e0;
}

.event-modal-item.active {
  background: #f0f7e6;
  border: 1.5px solid #b8d98a;
  box-shadow: 0 0 0 3px rgba(59, 109, 17, 0.06);
}

.event-modal-item-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: #f0f0f0;
  border: 1px solid #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: #bbb;
  transition:
    background 0.15s,
    color 0.15s;
}

@media (min-width: 640px) {
  .event-modal-item-icon {
    width: 36px;
    height: 36px;
    border-radius: 9px;
  }
}

.event-modal-item.active .event-modal-item-icon {
  background: #c8e09a;
  border-color: #97c459;
  color: #27500a;
}

.event-modal-item-text {
  flex: 1;
  min-width: 0;
}

.event-modal-name {
  font-size: 12px;
  font-weight: 700;
  color: #222;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: 0.01em;
  transition: color 0.15s;
}

@media (min-width: 640px) {
  .event-modal-name {
    font-size: 14px;
  }
}

.event-modal-item.active .event-modal-name {
  color: #1e4a0a;
}

.event-modal-radio {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #d8d8d8;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition:
    border-color 0.15s,
    background 0.15s;
}

.event-modal-item.active .event-modal-radio {
  border-color: #3b6d11;
  background: #fff;
}

.event-modal-radio-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: transparent;
  transition: background 0.15s;
}

.event-modal-item.active .event-modal-radio-dot {
  background: #3b6d11;
}

.event-modal-empty {
  padding: 32px 0;
  text-align: center;
  font-size: 13px;
  color: #bbb;
}

/* Honorific select styling */
.honorific-select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: rgba(255,255,255,0.04) !important;
  color: #fff !important;
  border: 1px solid rgba(255,255,255,0.12) !important;
  padding: 8px 10px !important;
  height: auto !important;
}

.honorific-select option {
  color: #111 !important;
  background: #fff !important;
}

/* Hide native dropdown arrow in IE/Edge */
.honorific-select::-ms-expand {
  display: none;
}

.event-modal-footer {
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: space-between;
  align-items: flex-start;
  padding: 12px 16px 16px;
  border-top: 1px solid #f0f0f0;
  margin-top: 8px;
}

@media (min-width: 640px) {
  .event-modal-footer {
    flex-direction: row;
    align-items: center;
    gap: 8px;
    padding: 16px 20px 22px;
    margin-top: 10px;
  }
}

.event-modal-selection-hint {
  font-size: 11px;
  color: #bbb;
}

@media (min-width: 640px) {
  .event-modal-selection-hint {
    font-size: 12.5px;
  }
}

.event-modal-footer-actions {
  display: flex;
  gap: 8px;
  width: 100%;
}

@media (min-width: 640px) {
  .event-modal-footer-actions {
    width: auto;
  }
}

.event-modal-btn-cancel {
  padding: 8px 14px;
  border-radius: 8px;
  border: 1px solid #e5e5e5;
  background: #f5f5f5;
  color: #555;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s;
  flex: 1;
}

@media (min-width: 640px) {
  .event-modal-btn-cancel {
    padding: 10px 18px;
    border-radius: 10px;
    font-size: 13px;
    flex: none;
  }
}

.event-modal-btn-cancel:hover {
  background: #ebebeb;
  color: #222;
}

.event-modal-btn-proceed {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: 8px;
  border: none;
  background: #3b6d11;
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  cursor: not-allowed;
  opacity: 0.35;
  transition: all 0.15s;
  flex: 1;
}

@media (min-width: 640px) {
  .event-modal-btn-proceed {
    padding: 10px 20px;
    border-radius: 10px;
    font-size: 13px;
    flex: none;
    gap: 7px;
    justify-content: flex-start;
  }
}

.event-modal-btn-proceed.ready {
  opacity: 1;
  cursor: pointer;
}

.event-modal-btn-proceed.ready:hover {
  background: #2d560d;
  box-shadow: 0 3px 14px rgba(59, 109, 17, 0.32);
}

@keyframes modal-pop {
  from {
    opacity: 0;
    transform: scale(0.94) translateY(8px);
  }

  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.18s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>