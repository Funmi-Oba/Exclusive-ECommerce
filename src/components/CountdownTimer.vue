<template>
  <div class="flex gap-4">
    <div v-for="(unit, index) in timeUnits" :key="unit.label" :class="['flex flex-col items-center', boxClass]">
      <slot
        name="unit"
        :label="unit.label"
        :value="formatTime(unit.value)"
      >
        <!-- Default layout if no slot is provided -->
        <div class="flex flex-col items-center justify-center">
          <h2 :class="numberClass">{{ formatTime(unit.value) }}</h2>
          <p :class="labelClass">{{ unit.label }}</p>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountdownTimer',
  
  props: {
    // End date/time for countdown (timestamp or Date object)
    endDate: {
      type: [Number, Date, String],
      default: null
    },
    // Or provide initial time values
    days: {
      type: Number,
      default: 0
    },
    hours: {
      type: Number,
      default: 0
    },
    minutes: {
      type: Number,
      default: 0
    },
    seconds: {
      type: Number,
      default: 0
    },
    boxClass: { type: String, default: '' },
    numberClass: { type: String, default: '' },
    labelClass: { type: String, default: '' },
  },


  data() {
    return {
      timeRemaining: {
        days: this.days,
        hours: this.hours,
        minutes: this.minutes,
        seconds: this.seconds
      },
      timer: null,
      endTime: null
    }
  },

  computed: {
    timeUnits() {
      return [
        { label: 'Days', value: this.timeRemaining.days },
        { label: 'Hours', value: this.timeRemaining.hours },
        { label: 'Minutes', value: this.timeRemaining.minutes },
        { label: 'Seconds', value: this.timeRemaining.seconds }
      ]
    }
  },

  mounted() {
    this.initializeCountdown()
  },

  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  },

  methods: {
    initializeCountdown() {
      const now = new Date().getTime()

      // If endDate is provided, use it
      if (this.endDate) {
        this.endTime = new Date(this.endDate).getTime()
      } else {
        // Otherwise calculate from initial values
        const duration = (this.timeRemaining.days * 24 * 60 * 60 * 1000) +
                        (this.timeRemaining.hours * 60 * 60 * 1000) +
                        (this.timeRemaining.minutes * 60 * 1000) +
                        (this.timeRemaining.seconds * 1000)
        
        this.endTime = now + duration
      }

      // Start countdown
      this.timer = setInterval(() => {
        this.updateCountdown()
      }, 1000)
    },

    updateCountdown() {
      const now = new Date().getTime()
      const distance = this.endTime - now

      if (distance < 0) {
        clearInterval(this.timer)
        this.timeRemaining = { days: 0, hours: 0, minutes: 0, seconds: 0 }
        this.$emit('countdown-ended')
        return
      }

      this.timeRemaining.days = Math.floor(distance / (1000 * 60 * 60 * 24))
      this.timeRemaining.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      this.timeRemaining.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      this.timeRemaining.seconds = Math.floor((distance % (1000 * 60)) / 1000)

      this.$emit('countdown-update', { ...this.timeRemaining })
    },

    formatTime(value) {
      return value.toString().padStart(2, '0')
    }
  }
}
</script>