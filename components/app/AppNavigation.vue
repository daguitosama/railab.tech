<template>
    <header
        id="main-navigation"
        ref="main_navigation"
        class="fixed top-0 left-0 w-full z-30 bg-surface-light dark:bg-surface-dark transition-all duration-300 ease-linear especial-shadow"
    >
        <AppNavigationMobile :links="Links" />
        <!-- desktop -->
        <AppNavigationLarge :links="Links" />
    </header>
</template>

<script setup>
import { navigationLinks as Links } from "@/data/data.js";
import { useEventListener, useThrottleFn } from "@vueuse/core";

let prevScrollPos = ref(0);
let main_navigation = ref(null);

function onScroll() {
    // if ...
    if (window.pageYOffset < prevScrollPos.value) {
        handleNav("open");
    } else {
        if (window.pageYOffset > 100) {
            handleNav("close");
        }
    }

    prevScrollPos.value = window.pageYOffset;
}

let onScrollThrottled = useThrottleFn(onScroll, 50);

// ---------------
// EventBindings
// ---------------
useEventListener("scroll", onScrollThrottled);

// ---------------
// Life Cycle
// ---------------
onMounted(() => {
    if (process.client) {
        prevScrollPos.value = window.pageYOffset;
    }
});

function handleNav(state /* 'open' || 'close' */) {
    if (process.client) {
        if (state == "open") {
            main_navigation.value.classList.remove(
                "transform",
                "-translate-y-32"
            );
        }
        if (state == "close") {
            main_navigation.value.classList.add("transform", "-translate-y-32");
        }
    }
}

// const route = useRoute();
function isOnPath(path /* string */) {
    // return route.name?.startsWith(path);
    return false;
}
</script>
