<template>
    <div class="pt-32">
        <section class="relative">
            <div aria-hidden="true" class="absolute inset-0 top-60 grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-30">
                <div class="h-60 bg-gradient-to-br from-blue-500 to-purple-400 blur-[106px] dark:from-blue-700"></div>
                <div class="h-40 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600"></div>
            </div>
            <div class="relative mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
                <div class="text-center">
                    <h2 class="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl xl:text-5xl">
                        Products, Proudly from a family
                    </h2>
                    <p class="mx-auto mt-6 text-gray-700 dark:text-gray-300 md:w-3/4 lg:w-3/5">
                        A family based on the belief that products can be both beautiful and functional, comfortable and accessible, extremely high quality and affordable.
                    </p>
                </div>
                <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-xl">
                    <div class="space-y-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 xl:gap-8 sm:space-y-0 md:mb-8 md:mt-12">
                        <a v-for="product in products" :key="product.id" :href="product.link" class="block py-12 px-8 text-center bg-gray-50 rounded dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <img :src="product.logo.dark" :alt="product.title" class="mx-auto h-9 dark:block" />
                            <img :src="product.logo.light" :alt="product.title" class="mx-auto h-9 dark:hidden" />
                            <h3 class="text-lg font-semibold text-gray-800 dark:text-white mt-5">{{product.title}}</h3>
                            <p class="text-gray-500 dark:text-gray-400 mb-4">{{product.slogan}}</p>
                            <a :href="product.link" class="flex justify-center items-center text-base font-light text-blue-600 dark:text-blue-500">
                                Visit Website
                                <svg class="mt-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                            </a>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script setup lang="ts">
const products = [
    {'id': 0, 'title':'Trader4', 'slogan':'Trader Together', 'link':'https://trader4.net', 'logo':{'light':'https://next.trader4.net/img/h-logo.svg', 'dark':'https://next.trader4.net/img/h-logo-dark.svg'}},
    {'id': 1, 'title':'Werify', 'slogan':'We Verify', 'link':'https://werify.net', 'logo':{'light':'https://next.trader4.net/img/h-logo.svg', 'dark':'https://next.trader4.net/img/h-logo-dark.svg'}},
    {'id': 2, 'title':'Dalan Capital', 'slogan':'Connect Market', 'link':'https://dalan.capital', 'logo':{'light':'https://next.trader4.net/img/h-logo.svg', 'dark':'https://next.trader4.net/img/h-logo-dark.svg'}},
    {'id': 3, 'title':'Bulutly', 'slogan':'Anything You Think', 'link':'https://bulutly.net', 'logo':{'light':'https://next.trader4.net/img/h-logo.svg', 'dark':'https://next.trader4.net/img/h-logo-dark.svg'}},
    {'id': 4, 'title':'AzPays', 'slogan':'Payment Simplified', 'link':'https://azpays.net', 'logo':{'light':'https://next.trader4.net/img/h-logo.svg', 'dark':'https://next.trader4.net/img/h-logo-dark.svg'}},
    {'id': 5, 'title':'Streamfy', 'slogan':'Trader Together', 'link':'https://streamfy.net', 'logo':{'light':'https://next.trader4.net/img/h-logo.svg', 'dark':'https://next.trader4.net/img/h-logo-dark.svg'}},
    {'id': 6, 'title':'Mehrify', 'slogan':'Trader Together', 'link':'https://mehrify.net', 'logo':{'light':'https://next.trader4.net/img/h-logo.svg', 'dark':'https://next.trader4.net/img/h-logo-dark.svg'}},
    {'id': 7, 'title':'Carefy', 'slogan':'Trader Together', 'link':'https://carefy.net', 'logo':{'light':'https://next.trader4.net/img/h-logo.svg', 'dark':'https://next.trader4.net/img/h-logo-dark.svg'}},
    {'id': 8, 'title':'Meyl', 'slogan':'Trader Together', 'link':'https://meyl.io', 'logo':{'light':'https://next.trader4.net/img/h-logo.svg', 'dark':'https://next.trader4.net/img/h-logo-dark.svg'}},
    {'id': 9, 'title':'Pasles', 'slogan':'Trader Together', 'link':'https://pasles.net', 'logo':{'light':'https://next.trader4.net/img/h-logo.svg', 'dark':'https://next.trader4.net/img/h-logo-dark.svg'}},
    {'id': 10, 'title':'Bistoon', 'slogan':'Trader Together', 'link':'https://bistoon.net', 'logo':{'light':'https://next.trader4.net/img/h-logo.svg', 'dark':'https://next.trader4.net/img/h-logo-dark.svg'}},
    {'id': 11, 'title':'Daric', 'slogan':'Trader Together', 'link':'https://daric.vc', 'logo':{'light':'https://next.trader4.net/img/h-logo.svg', 'dark':'https://next.trader4.net/img/h-logo-dark.svg'}},
    {'id': 12, 'title':'Terme', 'slogan':'Trader Together', 'link':'https://terme.design', 'logo':{'light':'https://next.trader4.net/img/h-logo.svg', 'dark':'https://next.trader4.net/img/h-logo-dark.svg'}},
];
</script>