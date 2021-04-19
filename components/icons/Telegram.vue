<template>
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    stroke="currentColor"
    role="img"
  >
    <title>{{ title }}</title>
    <use href="/icons/telegram.svg#telegram" />
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

