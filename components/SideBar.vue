<template>
  <div class="flex flex-col py-3 px-2 bg-ui-background">
    <nav class="flex flex-col items-center">
      <NuxtLink
        class="flex items-center justify-center w-12 h-12 bg-ui-background hover:bg-ui-hover rounded"
        to="/"
        :class="route.path === '/' ? 'bg-ui-focus' : ''"
      >
        <svg
          class="w-6 h-6 text-ui-foreground"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </NuxtLink>
    </nav>
  </div>
</template>
<script setup>
const route = useRoute();
</script>
