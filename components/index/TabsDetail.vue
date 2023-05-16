<template>
  <div v-if="item" class="mt-20">
    <div class="gap-6 space-y-12 md:flex md:space-y-0">
      <div class="relative md:w-1/2">
        <div class="flex flex-col justify-center">
          <div>
            <h3
              class="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
              {{ item.title }}
            </h3>
            <p class="mt-8 text-gray-600 dark:text-gray-300">
              {{ item.subtitle }}
            </p>
            <div class="mt-12 space-y-6">
              <div
                v-for="feature in item.features"
                class="flex items-center gap-6">
                <div
                  class="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                  <img
                    class="m-auto h-8 w-auto"
                    :src="feature.img"
                    alt="icon illustration"
                    loading="lazy"
                    width="512"
                    height="512" />
                </div>
                <div class="w-[calc(100%-7.5rem)]">
                  <h4
                    class="text-lg font-semibold text-gray-800 dark:text-white">
                    {{ feature.text }}
                  </h4>
                  <p class="mt-1 text-gray-600 dark:text-gray-400">
                    {{ feature.value }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="-m-4 overflow-hidden p-4 sm:-mx-12 sm:px-12 md:mx-0 md:w-1/2 md:overflow-visible md:px-0">
        <div
          class="relative bg-gray-100 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200 dark:bg-gray-800 dark:before:border-gray-700 dark:after:border-gray-700">
          <div class="relative h-96 overflow-clip py-10 sm:h-[32rem] lg:p-20">
            <div
              data-target="panel-0 "
              class="panel-preview absolute inset-0 z-0 flex scale-100 items-end overflow-hidden px-6 opacity-100 transition duration-500 sm:px-10">
              <!-- panel-preview absolute inset-0 z-0 flex translate-y-[100%] scale-75 items-end overflow-hidden px-6 opacity-50 transition duration-500 sm:px-10 -->
              <img
                :src="item.image"
                class="mx-auto h-80 w-96 rounded-t-3xl border object-cover object-top shadow-2xl sm:h-[28rem]"
                alt="tailus screenshot"
                loading="lazy"
                width="850"
                height="1780" />
            </div>
            <!-- <div
              data-target="panel-1"
              class="panel-preview absolute inset-0 z-10 flex translate-y-0 scale-100 items-end overflow-hidden px-6 opacity-100 transition duration-500 sm:px-10">
              <img
                src="/images/screenshots/tailus-home-dark.webp"
                class="mx-auto h-80 w-96 rounded-t-3xl border object-cover object-top shadow-2xl dark:border-transparent sm:h-[28rem]"
                alt="tailus screenshot dark-mode"
                loading="lazy"
                width="850"
                height="1780" />
            </div>
            <div
              data-target="panel-2"
              class="panel-preview absolute inset-0 z-0 flex translate-y-[100%] scale-75 items-end overflow-hidden px-6 opacity-50 transition duration-500 sm:px-10">
              <img
                src="/images/screenshots/tailus-contact.webp"
                class="mx-auto h-80 w-96 rounded-t-3xl border object-cover object-top shadow-2xl dark:border-transparent sm:h-[28rem]"
                alt="tailus contact screenshot"
                loading="lazy"
                width="850"
                height="1780" />
            </div> -->
          </div>
        </div>
      </div>
      <!-- <div
        class="-m-4 overflow-hidden p-4 sm:-mx-12 sm:px-12 md:mx-0 md:w-1/2 md:overflow-visible md:px-0">
        <div
          class="relative bg-gray-100 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200"></div>
      </div> -->
    </div>
  </div>
</template>
<script lang="ts" setup>
import { PropType } from "vue";
defineProps({
  item: {
    type: Object as PropType<IItem>,
  },
});
</script>
