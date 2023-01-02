<template>
    <div class="relative">
        <div class="relative">
            <button
                id="lang-selector-btn"
                ref="controlBtn"
                :aria-label="$t('langSwitcher.label')"
                aria-haspopup="true"
                aria-controls="lang_menu"
                class="py-2 px-2 rounded-xl border h-full focus:outline-none focus:ring focus:ring-brand focus:ring-offset-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-shadow duration-200 ease-linear flex items-center"
            >
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="fill-current"
                    aria-hidden="true"
                >
                    <path
                        d="M7.752 2.59506e-07C9.80996 0.00582657 11.7815 0.827844 13.2341 2.28567C14.6867 3.74349 15.5016 5.71804 15.5 7.776C15.4931 9.78717 14.7046 11.7169 13.3012 13.1574C11.8978 14.598 9.9893 15.4366 7.979 15.496L7.733 15.5C5.72144 15.4957 3.79035 14.7095 2.34786 13.3075C0.90537 11.9056 0.0645103 9.99762 0.00299999 7.987L0 7.742C0.00212059 5.68761 0.819847 3.71812 2.27346 2.26639C3.72707 0.814652 5.69761 -0.000531 7.752 2.59506e-07ZM9.701 8.5H5.798C5.953 11.397 6.974 13.843 7.684 13.993L7.752 14C8.432 13.998 9.472 11.635 9.684 8.77L9.701 8.5ZM13.956 8.5H11.204C11.113 10.46 10.674 12.283 10.016 13.576C11.0309 13.1806 11.925 12.5271 12.6099 11.6802C13.2948 10.8332 13.7467 9.82218 13.921 8.747L13.956 8.5ZM4.295 8.5H1.545C1.68102 9.62243 2.11864 10.687 2.81134 11.5806C3.50404 12.4742 4.42592 13.1634 5.479 13.575C4.864 12.367 4.443 10.7 4.317 8.889L4.295 8.499V8.5ZM5.483 1.924L5.368 1.97C4.34179 2.39383 3.44685 3.08309 2.77501 3.96704C2.10318 4.85099 1.67865 5.89779 1.545 7H4.295C4.38 5.17 4.766 3.46 5.354 2.19L5.483 1.924ZM7.745 1.5C7.043 1.502 5.961 4.012 5.798 7H9.702C9.546 4.097 8.524 1.657 7.81 1.506L7.745 1.499V1.5ZM10.025 1.932L10.048 1.982C10.691 3.27 11.117 5.066 11.205 7H13.953C13.8144 5.88 13.3762 4.81812 12.6848 3.92621C11.9933 3.0343 11.0751 2.34538 10.025 1.932Z"
                    />
                </svg>
                <!-- <span class="ml-2 font-medium">
                    {{ localeName }}
                </span> -->
            </button>

            <!-- language options -->
            <transition name="fade-from-up">
                <div
                    id="lang_menu"
                    ref="controlMenu"
                    v-show="switchIsOpen"
                    class="absolute z-10 bg-white dark:bg-surface-dark border rounded-xl py-4 shadow-md"
                    aria-label="Language Options"
                    :class="menuPositionClasses"
                >
                    <ul :aria-label="$t('langSwitcher.optionsLabel')">
                        <li
                            v-for="locale in availableLocales"
                            :key="locale.code"
                        >
                            <nuxt-link
                                class="hover:bg-gray-100 dark:hover:bg-gray-800 block py-2 px-6 font-medium focus:outline-none focus:ring-2 focus:ring-brand rounded-lg dark:focus:ring-primary-dark"
                                :to="switchLocalePath(locale.code)"
                                @click.native="toogleSwitch('close')"
                                >{{ locale.name }}</nuxt-link
                            >
                        </li>
                    </ul>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import { useEventListener, useTimeoutFn } from "@vueuse/core";

export default {
    props: {
        menuPosition: {
            type: String,
            default: "bottom-left",
        },
    },
    computed: {
        availableLocales() {
            return this.$i18n.locales.filter(
                (i) => i.code !== this.$i18n.locale
            );
        },
        menuPositionClasses() {
            if (this.menuPosition == "bottom-right") {
                return "top-10 right-0";
            } else {
                return "top-12 left-0";
            }
        },
        localeName() {
            return this.$i18n.localeProperties.name;
        },
    },

    setup() {
        const controlBtn = ref(null);
        const controlMenu = ref(null);
        const state = reactive({
            switchIsOpen: false,
        });
        var langMenuFocussables;

        onMounted(() => {
            // console.log("onMounted");
            initMenuFocusables();
        });

        /**
         * switcState: 'open' || 'close' || null -> toggle
         */
        function toogleSwitch(switchState) {
            if (process.client) {
                if (!switchState) {
                    state.switchIsOpen = !state.switchIsOpen;

                    if (state.switchIsOpen && langMenuFocussables.length) {
                        langMenuFocussables[0].focus();
                    }

                    return;
                }
                switchState === "open"
                    ? (state.switchIsOpen = true)
                    : (state.switchIsOpen = false);

                if (langMenuFocussables.length) {
                    langMenuFocussables[0].focus();
                }
            }
        }

        function handleKey(evt) {
            // tabTrabing   TODO
            // if (
            //   evt.code == "Tab" &&
            //   state.switchIsOpen &&
            //   langMenuFocussables.length
            // ) {
            //   // console.log(
            //   //   "TT focusing: " + langMenuFocussables[langMenuFocussables.length - 1]
            //   // );
            //   // backwards
            //   if (evt.shiftKey) {
            //     if (evt.target === langMenuFocussables[0]) {
            //       langMenuFocussables[langMenuFocussables.length - 1].focus();
            //     }
            //     // forward
            //     else {
            //       if (
            //         evt.target === langMenuFocussables[langMenuFocussables.length - 1]
            //       ) {
            //         langMenuFocussables[0].focus();
            //       }
            //     }
            //   }
            // }

            if (evt.code == "Escape") {
                toogleSwitch("close");
            }
        }

        function handleClick(evt) {
            if (process.client) {
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

        function initMenuFocusables() {
            if (process.client) {
                langMenuFocussables = Array.from(
                    controlMenu.value.querySelectorAll("a")
                );
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

<style></style>
