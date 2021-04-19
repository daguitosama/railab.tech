<template>
  <div class="pt-20 lg:pt-24 font-extrabold text-4xl">
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
      default: "T",
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