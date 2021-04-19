<template>
  <svg
    width="38"
    height="38"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{{ title }}</title>
    <use href="/icons/plane.svg#plane" />
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

