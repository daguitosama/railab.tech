<template>
  <div class="mt-16 md:mt-20 lg:mt-24 font-extrabold text-5xl">
    <h1
      v-if="!sectionHeadingId"
    >
      {{ sectionHeading }}
    </h1>

    <!-- id needed case -->
    <h1
      v-else
      :id="sectionHeadingId"
    >
      {{ sectionHeading }}
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    sectionHeading: {
      type: String,
      default: "Service Section Title",
    },
    sectionHeadingId: {
      type: String,
      default: null,
    },
  },
};
</script>

<style>
</style>