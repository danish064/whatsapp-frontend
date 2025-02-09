<template>
  <div id="currentChat" class="flex flex-col">
    <div class="py-2 px-3 text-ui-foreground bg-ui-background flex">
      <div class="flex">
        <img class="rounded-full" src="https://placehold.co/40x40" alt="" />
      </div>
    </div>
    <div class="bg-chat-background overflow-y-auto  py-1 px-3 h-full">
      <Message v-for="n in 20" />
      <Message v-for="n in 20" :isSent="true" />
    </div>

    <!-- New Message -->
    <div class="flex bg-ui-background px-3 py-2">
      <input type="text" class="py-2 px-2 w-full bg-ui-focus rounded-2xl" />
    </div>
  </div>
</template>
<script setup></script>
<style lang="postcss" scoped></style>
