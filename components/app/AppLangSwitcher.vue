<template>
  <div>
    <div class="relative">
      <button
        ref="controlBtn"
        :aria-label="$t('common.langSwitcher.label')"
        aria-haspopup="true"
        aria-controls="lang_menu"
        class="p-2 rounded-xl border w-full h-full focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-light dark:focus-visible:ring-primary-dark hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-150 ease-linear"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="stroke-current w-full h-full"
        >
          <path
            d="M3 5H15M9 3V5M10.0482 14.5C8.52083 12.9178 7.28073 11.0565 6.41187 9M12.5 18H19.5M11 21L16 11L21 21M12.7511 5C11.7831 10.7702 8.06969 15.6095 3 18.129"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <!-- language options -->
      <transition name="fade-from-up">
        <div
          id="lang_menu"
          ref="controlMenu"
          v-show="switchIsOpen"
          class="absolute z-20  bg-white dark:bg-surface-dark border rounded-md py-2 px-4 shadow-md"
          aria-label="Language Options"
          :class="menuPositionClasses"

        >
          <ul :aria-label="$t('common.langSwitcher.optionsLabel')">
            <li v-for="locale in availableLocales" :key="locale.code">
              <nuxt-link
                class="hover:bg-gray-100 dark:hover:bg-gray-800 block py-1 px-2 rounded-lg text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-light"
                :to="switchLocalePath(locale.code)"
                @click.native="toogleSwitch('close')"
                >{{ locale.name }}</nuxt-link
              >
            </li>
          </ul>
        </div>
      </transition>
    </div>

    <!-- overlay -->
    <transition name="fade">
      <div
        v-if="switchIsOpen"
        @click="toogleSwitch('close')"
        class="bg-gray-100 dark:bg-surface-dark opacity-75 fixed z-10 inset-0"
      ></div>
    </transition>

   
  </div>
</template>

<script>
import { useEventListener, useTimeoutFn } from "@vueuse/core";
import {
  computed,
  onMounted,
  reactive,
  ref,
  toRefs,
} from "@vue/composition-api";
export default {
  props:{
    menuPosition:{
      type:String,
      default: "bottom-right"
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
    menuPositionClasses(){
      if(this.menuPosition == 'bottom-right'){
        return 'top-10 right-0'
      }
    }
  },

  setup() {
    const controlBtn = ref(null);
    const controlMenu = ref(null);
    const state = reactive({
      switchIsOpen: false,
    });

    /**
     * switcState: 'open' || 'close' || null -> toggle
     */
    function toogleSwitch(switchState) {
      if (!switchState) {
        state.switchIsOpen = !state.switchIsOpen;
        return;
      }
      switchState === "open"
        ? (state.switchIsOpen = true)
        : (state.switchIsOpen = false);
    }

    function handleKey(evt) {
      if (evt?.target == "Escape" || evt.code == 27) {
        toogleSwitch("close");
      }
    }

    function handleClick(evt) {
      if (process.client) {
        // console.log(evt.target);

        // if was in btn
        if (controlBtn.value.contains(evt?.target)) {
          toogleSwitch();

          if (state.switchIsOpen) {
            const { isActive, start, stop } = useTimeoutFn(() => {
              controlMenu.value.querySelector("a").focus();
            }, 1);
            start();
          }
        }
      }
    }

    // -------
    // EVENTS
    // -------
    useEventListener("keyup", handleKey);
    useEventListener("click", handleClick);

    

    return {
      toogleSwitch,
      controlBtn,
      controlMenu,
      ...toRefs(state),
    };
  },
};
</script>

<style>
</style>