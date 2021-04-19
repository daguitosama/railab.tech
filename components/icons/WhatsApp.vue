<template>
  <svg
    viewBox="0 0 50 50"
    width="25px"
    height="25px"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    stroke="currentColor"
    role="img"
  >
    <title>{{ title }}</title>
    <use href="/icons/whatsapp.svg#whatsapp" />
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

