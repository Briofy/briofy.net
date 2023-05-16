<template>
  <header class="">
    <nav
      class="dark:bg-gray-800 shadow-md dark:shadow-md bg-white fixed top-0 inset-x-0 z-20 w-full border-b bg-white/80 backdrop-blur navbar-active navbar-active dark:border-gray-700 dark:bg-gray-900/80 border-gray-100 px-4 lg:px-6 py-2.5">
      <div
        class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <a href="https://briofy.net" class="flex items-center">
          <img
            src="/images/logo/logo-without-text.svg"
            class="mr-3 h-6 sm:h-9"
            alt=" Briofy Logo" />
          <span
            class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
            >Briofy</span
          >
        </a>
        <div class="flex items-center lg:order-2">
          <button
            data-collapse-toggle="mobile-menu-search"
            aria-controls="mobile-menu-search"
            aria-expanded="false"
            type="button"
            class="lg:hidden inline-flex mr-2 lg:mr-0 items-center text-gray-800 dark:text-gray-400 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2.5 lg:px-5 py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
          </button>
          <div
            class="mt-12 hidden lg:border-l border-gray-200 -ml-1 lg:flex w-full flex-col space-y-2 sm:flex-row md:w-max lg:mt-0 lg:mr-6 lg:space-y-0 lg:pl-6">
            <a
              href="./pages/contact.html"
              class="relative ml-auto flex h-9 w-full items-center justify-center before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-primaryLight sm:px-4 lg:before:border lg:before:border-gray-200 lg:before:bg-gray-100 lg:dark:before:bg-gray-800">
              <span
                class="relative text-sm font-semibold text-blue-700 dark:text-gray-900 lg:text-primary lg:dark:text-white"
                >Get started</span
              >
            </a>
          </div>

          <button
            id="theme-toggle"
            type="button"
            aria-label="switche theme"
            class="switcher group relative hidden h-7 w-7 rounded-full before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 lg:flex">
            <svg
              id="theme-toggle-dark-icon"
              xmlns="http://www.w3.org/2000/svg"
              class="hidden dark:block transistion relative m-auto h-5 w-5 fill-gray-500 duration-300 group-hover:rotate-180 group-hover:fill-yellow-400 dark:fill-gray-300"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clip-rule="evenodd"></path>
            </svg>
            <svg
              id="theme-toggle-light-icon"
              xmlns="http://www.w3.org/2000/svg"
              class="block dark:hidden transistion relative m-auto h-5 w-5 fill-gray-500 duration-300 group-hover:-rotate-90 group-hover:fill-blue-900"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
          </button>

          <button
            type="button"
            data-dropdown-toggle="language-dropdown"
            class="inline-flex items-center text-gray-800 dark:text-gray-300 font-medium rounded-lg text-sm px-2.5 lg:px-5 py-2.5 mr-2 focus:outline-none">
            <img
              class="mr-2 w-5 h-5 rounded-full"
              :src="activeLocale.flagSrc"
              alt="" />
          </button>
          <!-- Dropdown -->
          <div
            class="hidden z-50 my-4 w-48 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
            id="language-dropdown">
            <ul class="py-1" role="none">
              <li
                v-for="(localItem, localIndex) in localeItems"
                :key="localIndex">
                <NuxtLink
                  :to="switchLocalePath(localItem.lang)"
                  class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                  @click="switchActiveLocale(localIndex)">
                  <div class="inline-flex items-center">
                    <img
                      class="h-3.5 w-3.5 rounded-full mr-2"
                      :src="localItem.flagSrc"
                      alt="" />
                    {{ localItem.text }}
                  </div>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 transition-all"
          id="mobile-menu-search">
          <ul
            class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li v-for="(link, index) in navLinks" :key="index">
              <NuxtLink
                active-class="text-blue-700 dark:!text-blue-400"
                class="block py-2 pr-4 pl-3 hover:dark:text-blue-400 hover:text-blue-700 rounded text-gray-500 lg:p-0 dark:text-white"
                aria-current="page"
                :to="localePath(link.link)">
                {{ link.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath();

const navLinks = ref([
  { title: "Home", link: "/" },
  { title: "Company", link: "/company" },
  { title: "Marketplace", link: "/market-place" },
  { title: "Features", link: "/features" },
  { title: "Team", link: "/team" },
  { title: "Contact", link: "/contact" },
]);

const localeItems = ref([
  {
    lang: "en",
    flagSrc: "/images/icons/flags/en.svg",
    text: "English",
  },
  {
    lang: "de",
    flagSrc: "/images/icons/flags/de.svg",
    text: "Deutch",
  },
  {
    lang: "it",
    flagSrc: "/images/icons/flags/it.svg",
    text: "Italiano",
  },
]);

const activeLocale = ref(
  localeItems.value.find((x) => x.lang === useI18n().locale.value) ??
    localeItems.value[0]
);

const switchActiveLocale = (index: number) => {
  activeLocale.value = localeItems.value[index];
};
</script>

<style scoped></style>
