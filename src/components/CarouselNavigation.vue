<template>
  <div class="flex gap-2">
    <!-- Left Arrow Button -->
    <button
      @click="handleScrollLeft"
      class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
      :disabled="isAtStart"
      :class="{ 'opacity-50 cursor-not-allowed': isAtStart }"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 5L4 12L11 19M4 12H20"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>

    <!-- Right Arrow Button -->
    <button
      @click="handleScrollRight"
      class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
      :disabled="isAtEnd"
      :class="{ 'opacity-50 cursor-not-allowed': isAtEnd }"
    >
      <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.75 7.75H17.25M17.25 7.75L10.25 0.75M17.25 7.75L10.25 14.75" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    </button>
  </div>
</template>

<script>
export default {
  name: 'CarouselNavigation',

  props: {
    // The carousel element passed from parent
    carouselElement: {
      type: Object,
      default: null,
    },
    // How far to scroll (in pixels)
    scrollDistance: {
      type: Number,
      default: 300,
    },
  },

  data() {
    return {
      isAtStart: true,
      isAtEnd: false,
    }
  },

  mounted() {
    // When component loads, check if we're at start or end
    this.checkPosition()

    // Listen for scroll events to update button states
    if (this.carouselElement) {
      this.carouselElement.addEventListener('scroll', this.checkPosition)
    }
  },

  beforeDestroy() {
    // Clean up listener when component is removed
    if (this.carouselElement) {
      this.carouselElement.removeEventListener('scroll', this.checkPosition)
    }
  },

  methods: {
    handleScrollLeft() {
      if (!this.carouselElement) return

      // Scroll left by the specified distance
      this.carouselElement.scrollBy({
        left: -this.scrollDistance,
        behavior: 'smooth',
      })

      // Update button states after a short delay
      setTimeout(() => {
        this.checkPosition()
      }, 100)
    },

    handleScrollRight() {
      if (!this.carouselElement) return

      // Scroll right by the specified distance
      this.carouselElement.scrollBy({
        left: this.scrollDistance,
        behavior: 'smooth',
      })

      // Update button states after a short delay
      setTimeout(() => {
        this.checkPosition()
      }, 100)
    },

    checkPosition() {
      if (!this.carouselElement) return

      // Are we at the start? (scrolled all the way left)
      this.isAtStart = this.carouselElement.scrollLeft <= 1

      // Are we at the end? (scrolled all the way right)
      const maxScroll = this.carouselElement.scrollWidth - this.carouselElement.clientWidth
      this.isAtEnd = this.carouselElement.scrollLeft >= maxScroll - 1
    },
  },
}
</script>
