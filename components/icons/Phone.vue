<template>
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    class="w-6 h-6"
    fill="currentColor"
    stroke="none"
  >
    <title>{{ title }}</title>
    <use href="/icons/phone.svg#phone" />
  </svg>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "icon",
    },
  },
};
</script>

