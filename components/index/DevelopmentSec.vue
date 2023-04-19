<template>
  <section>
    <div class="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0 developmentSec">
      <div class="space-y-6 md:flex lg:items-center lg:gap-6 lg:space-y-0">
        <div class="md:5/12 lg:w-6/12">
          <img class="md:-ml-8" src="/images/stats-login.webp" alt="tailus stats and login components" loading="lazy"
            width="1779" height="1592" />
        </div>
        <div class="md:7/12 lg:w-6/12">
          <h2 class="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl xl:text-5xl">
            Development is carried out by passionate developers
          </h2>
          <p class="mt-8 text-gray-600 dark:text-gray-300">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis
            voluptatem accusantium nemo perspiciatis delectus atque autem!
            repellat expedita consequatur! Officiis id consequatur atque
            doloremque!
          </p>
          <p class="mb-12 mt-4 text-gray-600 dark:text-gray-300">
            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
            expedita at? Asperiores nemo possimus nesciunt dicta veniam
            aspernatur quam mollitia.
          </p>

          <NuxtLink
            class="dark:bg-blue-400 relative flex h-11 w-max items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full rounded-3xl before:bg-blue-400 before:transition-transform before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-blue-400 hover:bg-blue-500 dark:hover:bg-blue-500"
            :to="{ name: 'contact' }">
            <span class="relative text-base font-semibold text-white dark:text-gray-900">Get started</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
