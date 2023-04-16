<template>
  <section class="mt-32">
    <div class="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
      <div class="text-center">
        <h2 class="text-3xl font-bold text-gray-800 md:text-4xl xl:text-5xl">
          For growing teams and organizations
        </h2>
        <p class="mx-auto mt-6 text-gray-700 md:w-3/4 lg:w-3/5">
          A growing team doesn't need to mean growing pains. Privacy, and the
          right tool for every step of your journey - Jira Software friction -
          company size.
        </p>

        <div role="tablist" aria-label="tabs"
          class="relative mx-auto mt-12 grid h-12 w-auto grid-cols-3 items-center gap-x-1 overflow-hidden rounded-full border border-gray-200 bg-gray-100 px-[3px] text-gray-600 sm:w-max">
          <div class="tab-indicator absolute h-10 rounded-full bg-white shadow-md transition-[left] duration-500"></div>

          <button v-for="(tabItem, tabIndex) in tabBtn" :key="tabIndex" @click="changeTab(tabIndex)" :class="
            activeTabData == TabData[tabIndex]
              ? 'bg-stone-50 shadow-lg text-blue-700 duration-400 '
              : ''
          " role="tab" aria-selected="true" aria-controls="panel-0" tabindex="0" title="tab item"
            class="tab relative block rounded-full py-2.5 px-4 hover:text-blue-700 transition-all delay-100">
            <span class="m-auto block w-max text-sm font-medium tracking-wider">{{ tabItem }}</span>
          </button>
        </div>
      </div>
      <TransitionFade>
        <div v-if="showTransition">
          <IndexTabsDetail :item="activeTabData" />
        </div>
      </TransitionFade>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const tabBtn = ref(["first tab", "second tab", "third tab"]);
const showTransition = ref(false)

const TabData = ref<IItem[]>([
  {
    title:
      " Make work flow across teams while connecting back to company goals",
    subtitle:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! repellat expedita consequatur! Officiis id consequatur atque doloremque!",
    image: "/images/screenshots/tailus-home.png",
    features: [
      {
        text: "Together as one",
        value: "Accusantium nemo perspiciatis delectus atque autem!",
        img: "/images/icons/4727266.png",
      },
      {
        text: "New ideas",
        value:
          "Accusalectus atque autem accusantium nemo perspiciatis delectus atque autem!",
        img: "/images/icons/584796.png",
      },
    ],
  },
  {
    title: "Make work flow across teams while connecting back to company goals",
    subtitle:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! repellat expedita consequatur! Officiis id consequatur atque doloremque!",
    image: "/images/screenshots/tailus-home-dark.webp",
    features: [
      {
        text: "Together as one",
        value: "Accusantium nemo perspiciatis delectus atque autem!",
        img: "/images/icons/6106288.png",
      },
      {
        text: "New ideas",
        value:
          "Accusalectus atque autem accusantium nemo perspiciatis delectus atque autem!",
        img: "/images/icons/2313906.png",
      },
    ],
  },
  {
    title: "Make work flow across teams while connecting back to company goals",
    subtitle:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! repellat expedita consequatur! Officiis id consequatur atque doloremque!",
    image: "/images/screenshots/tailus-contact.webp",
    features: [
      {
        text: "Together as one",
        value: "Accusantium nemo perspiciatis delectus atque autem!",
        img: "/images/icons/3340200.png",
      },
      {
        text: "Growth",
        value:
          "Accusalectus atque autem accusantium nemo perspiciatis delectus atque autem!",
        img: "/images/icons/5405929.png",
      },
    ],
  },
]);

const activeTabData = ref<IItem>(TabData.value[0]);

const useTransition = () => {
  showTransition.value = false
  setTimeout(() => {
    showTransition.value = true
  }, 1000);
}

const changeTab = (index: number) => {
  activeTabData.value = TabData.value[index]
  useTransition()
}

</script>
