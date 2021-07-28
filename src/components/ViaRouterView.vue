<template>
  <RouterView
    v-slot="{ Component }"
    v-bind="$attrs"
    class="via-router-view"
  >
    <KeepAlive v-if="$route.meta.keepAlive">
      <component :is="Component" />
    </KeepAlive>
    <component
      :is="Component"
      v-else
    />
  </RouterView>
</template>
