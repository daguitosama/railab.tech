<template>
  <article class="">
    <div
      class="w-12 h-12 rounded-2xl shadow-md bg-gradient-to-br flex items-center justify-center"
      :class="serviceItem.iconColors"
    >
      <!-- icon slot -->
      <slot></slot>
    </div>
    <h2 class="max-w-sm mt-6 font-extrabold text-3xl">{{ serviceItem.title }}</h2>
    <div v-if="serviceItem.textContent" class="max-w-sm mt-4 opacity-80 text-lg">
      <p>{{ serviceItem.textContent }}</p>
    </div>
    <div v-if="serviceItem.listContent" class="max-w-sm mt-4 opacity-80 text-lg">
      <ul class="list-disc ml-5">
        <li v-for="(element, i) in serviceItem.listContent" :key="i">{{ element }}</li>
      </ul>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    serviceItem: {
      type: Object,
      default: () => ({
        iconColors: "from-cyan-400 to-cyan-800",
        iconTitle: "title",
        title: `Service Title`,
        textContent: null,
        listContent: null,
      }),
    },
  },
};
</script>

<style>
</style>