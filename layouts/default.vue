<template>
  <Html :lang="locale" :dir="head.htmlAttrs?.dir">
    <Title>{{ $t("meta.title") }}</Title>
    <Body>
      <div
        class="min-h-screen overflow-hidden bg-white selection:bg-primary/10 selection:text-primary dark:bg-gray-900"
      >
        <Header />
        <slot />
        <Footer />
      </div>
    </Body>
  </Html>
</template>
<script lang="ts" setup>
//i18n
const { locale } = useI18n();
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true,
});

// redirect if route was /
const route = useRoute();
const router = useRouter();
const switchLocalePath = useSwitchLocalePath();
if (route.fullPath === "/") {
  router.replace(switchLocalePath("en"));
}
</script>
