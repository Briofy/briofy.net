<template>
  <div
    class="min-h-screen bg-white selection:bg-primary/10 selection:text-primary dark:bg-gray-900">
    <Header />
    <slot />
    <Footer />
  </div>
</template>
<script lang="ts" setup></script>
