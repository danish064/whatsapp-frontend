<template>
  <div id="defaultLayout" class="h-screen w-full flex">
    <!-- SideBar -->
    <SideBar />

    <!-- Current Page -->
    <div class="w-full">
      <slot />
    </div>
  </div>
</template>
