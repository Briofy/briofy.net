<template>
  <nav
    class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 fixed top-0 inset-x-0 z-20 w-full border-b bg-white/80 backdrop-blur navbar-active">
    <div
      class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
      <a href="https://flowbite.com" class="flex items-center">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo" />
        <span class="self-center text-xl font-semibold whitespace-nowrap"
          >Briofy</span
        >
      </a>
      <div class="flex items-center lg:order-2">
        <button
          aria-label="switche theme"
          class="switcher group relative flex h-9 w-9 rounded-full before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="transistion relative m-auto hidden h-5 w-5 fill-gray-500 duration-300 group-hover:rotate-180 group-hover:fill-yellow-400"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clip-rule="evenodd"></path>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="transistion relative m-auto h-5 w-5 fill-gray-500 duration-300 group-hover:-rotate-90 group-hover:fill-blue-900"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
        </button>
        <div
          id="tooltip-dark"
          role="tooltip"
          class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip"
          data-popper-placement="top"
          style="
            position: absolute;
            inset: auto auto 0px 0px;
            margin: 0px;
            transform: translate3d(0px, -715px, 0px);
          ">
          Toggle dark mode
          <div
            class="tooltip-arrow"
            data-popper-arrow=""
            style="
              position: absolute;
              left: 0px;
              transform: translate3d(15.5px, 0px, 0px);
            "></div>
        </div>

        <div
          id="tooltip-statistics"
          role="tooltip"
          class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip"
          data-popper-placement="top"
          style="
            position: absolute;
            inset: auto auto 0px 0px;
            margin: 0px;
            transform: translate3d(0px, -715px, 0px);
          ">
          View analytics
          <div
            class="tooltip-arrow"
            data-popper-arrow=""
            style="
              position: absolute;
              left: 0px;
              transform: translate3d(35px, 0px, 0px);
            "></div>
        </div>

        <!-- Dropdown menu -->
        <div
          class="hidden z-50 my-4 w-56 text-base list-none bg-white rounded divide-y divide-gray-100 shadow"
          id="dropdown"
          data-popper-placement="bottom"
          style="
            position: absolute;
            inset: 0px auto auto 0px;
            margin: 0px;
            transform: translate3d(81px, 214px, 0px);
          ">
          <div class="py-3 px-4">
            <span class="block text-sm font-semibold text-gray-900"
              >Neil sims</span
            >
            <span class="block text-sm font-light text-gray-500 truncate"
              >name@flowbite.com</span
            >
          </div>
          <ul class="py-1 font-light text-gray-500" aria-labelledby="dropdown">
            <li>
              <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-100"
                >My profile</a
              >
            </li>
            <li>
              <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-100"
                >Account settings</a
              >
            </li>
          </ul>
          <ul class="py-1 font-light text-gray-500" aria-labelledby="dropdown">
            <li>
              <a
                href="#"
                class="flex items-center py-2 px-4 text-sm hover:bg-gray-100"
                ><svg
                  class="mr-2 w-5 h-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clip-rule="evenodd"></path>
                </svg>
                My likes</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex items-center py-2 px-4 text-sm hover:bg-gray-100"
                ><svg
                  class="mr-2 w-5 h-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                </svg>
                Collections</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex justify-between items-center py-2 px-4 text-sm hover:bg-gray-100">
                <span class="flex items-center">
                  <svg
                    class="mr-2 w-5 h-5 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                      clip-rule="evenodd"></path>
                  </svg>
                  Pro version
                </span>
                <svg
                  class="w-5 h-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"></path>
                </svg>
              </a>
            </li>
          </ul>
          <ul class="py-1 font-light text-gray-500" aria-labelledby="dropdown">
            <li>
              <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-100"
                >Sign out</a
              >
            </li>
          </ul>
        </div>
        <a
          href="#"
          class="text-blue-600 ml-1 lg:ml-3 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 lg:px-5 py-2 lg:py-2.5 focus:outline-none"
          >Log out</a
        >
        <button
          data-collapse-toggle="mobile-menu-2"
          type="button"
          class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="mobile-menu-2"
          aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
          <svg
            class="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
      <div
        class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
        id="mobile-menu-2">
        <ul
          class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 text-center">
          <li v-for="(link, index) in navLinks" :key="index">
            <NuxtLink
              :to="link.link"
              class="block py-2 pr-4 pl-3 text-blue-600 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0"
              aria-current="page">
              {{ link.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
const navLinks = ref([
  { title: "Home", link: "/" },
  { title: "Company", link: "/company" },
  { title: "Marketplace", link: "/market-place" },
  { title: "Features", link: "/features" },
  { title: "Team", link: "/team" },
  { title: "Contact", link: "/contact" },
]);
</script>

<style scoped></style>
