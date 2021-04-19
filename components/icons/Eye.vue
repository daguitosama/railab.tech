<template>
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{{ title }}</title>
    <use href="/icons/eye.svg#eye" />
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

