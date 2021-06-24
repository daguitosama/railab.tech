<template>
  <div class="lg:hidden">
    <button
      aria-controls="mobile-nav-menu"
      :aria-expanded="!isOpen"
      :aria-label="label"
      @click="handleClick"
      class="
        focus:outline-none
        focus:ring-2
        focus-visible:ring-primary-light-hover
        dark:focus-visible:ring-primary-dark-hover
        transition-all
        duration-150
        rounded-lg
        px-1
        py-1
        relative
        hover:bg-gray-100
        dark:hover:bg-gray-800
      " 
    >
      <svg
        class="w-6 h-6"
        viewBox="0 0 20 20"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          :class="
            isOpen
              ? 'absolute transform origin-center rotate-45 translate-y-0.5'
              : ''
          "
          class="transition-all duration-150 -translate-x-0.5"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3 7C3 6.44772 3.44772 6 4 6H16C16.5523 6 17 6.44772 17 7C17 7.55228 16.5523 8 16 8H4C3.44772 8 3 7.55228 3 7Z"
        />
        <path
          :class="
            isOpen
              ? 'absolute transform origin-center -rotate-45 -translate-y-0.5'
              : ''
          "
          class="transition-all duration-150 -translate-x-0.5"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3 13C3 12.4477 3.44772 12 4 12H16C16.5523 12 17 12.4477 17 13C17 13.5523 16.5523 14 16 14H4C3.44772 14 3 13.5523 3 13Z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "Navigation Menu",
    },
  },
  methods: {
    handleClick() {
      this.$emit("toogle");
    },
  },
  computed: {
    fillColor() {
      return this.$colorMode.value === "light" ? "#4A5568" : "";
    },
  },
};
</script>

<style scoped>
</style>