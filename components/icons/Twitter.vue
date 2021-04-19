<template>
  <svg
    viewBox="0 0 24 24"
    width="20px"
    height="20px"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    stroke="currentColor"
    role="img"
  >
    <title>{{ title }}</title>
    <use href="/icons/twitter.svg#twitter" />
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

