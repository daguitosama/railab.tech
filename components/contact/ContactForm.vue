<template>
  <div>
    <form @submit.prevent class="bg-gray-100 dark:bg-gray-800 py-6 px-4 rounded-lg shadow-lg">
      <div>
        <label for="name" class="block ml-2 text-sm"> Email </label>
        <input type="email" name="email" required placeholder="Su correo" autocomplete="email"
        class="block w-full mt-1 p-2 rounded-lg shadow dark:bg-gray-700 focus:outline-none focus:ring focus:ring-primary-light dark:focus:ring-primary-dark" />
      </div>

      <div class="mt-4">
        <label for="message" class="block ml-2 text-sm"> Mensaje </label>
        <textarea  name="message" required placeholder="Su mensaje" 
        class="block w-full mt-1 p-2  rounded-lg shadow dark:bg-gray-700 focus:outline-none focus:ring focus:ring-primary-light dark:focus:ring-primary-dark" />
      </div>

      <div class="mt-6">
          <button class="text-white bg-primary-light dark:bg-primary-dark w-full py-2 rounded-lg shadow">Enviar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>