<template>
  <div class="flex items-center gap-1">
    <div class="flex">
      <svg
        v-for="star in 5"
        :key="star"
        class="w-4 h-4"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient :id="`grad-${star}-${uniqueId}`">
            <stop offset="0%" :stop-color="getStarFill(star) > 0 ? '#FBBF24' : '#D1D5DB'" />
            <stop :offset="`${getStarFill(star) * 100}%`" stop-color="#FBBF24" />
            <stop :offset="`${getStarFill(star) * 100}%`" stop-color="#D1D5DB" />
            <stop offset="100%" stop-color="#D1D5DB" />
          </linearGradient>
        </defs>
        <path
          d="M10 1.66669L12.575 6.88335L18.3333 7.72502L14.1667 11.7834L15.15 17.5167L10 14.8084L4.85 17.5167L5.83333 11.7834L1.66667 7.72502L7.425 6.88335L10 1.66669Z"
          :fill="`url(#grad-${star}-${uniqueId})`"
          :stroke="getStarFill(star) > 0 ? '#FBBF24' : '#D1D5DB'"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StarRating',
  props: {
    rating: {
      type: Number,
      required: true,
      default: 0
    }
  },
  data() {
    return {
      uniqueId: Math.random().toString(36).substr(2, 9)
    }
  },
  methods: {
    getStarFill(starPosition) {
      const rating = this.rating
      
      if (rating >= starPosition) {
        return 1 // Full star
      } else if (rating > starPosition - 1 && rating < starPosition) {
        return rating - (starPosition - 1) // Partial star
      } else {
        return 0 // Empty star
      }
    }
  }
}
</script>