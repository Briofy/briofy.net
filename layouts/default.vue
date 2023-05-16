<template>
  <Html :lang="locale" :dir="head.htmlAttrs?.dir">
    <Body>
      <div
        class="min-h-screen overflow-hidden bg-white selection:bg-primary/10 selection:text-primary dark:bg-gray-900">
        <Header />
        <slot />
        <Footer />
      </div>
    </Body>
  </Html>
</template>
<script lang="ts" setup>
//i18n
const { locale, t } = useI18n();
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true,
});
</script>
