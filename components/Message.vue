<template>
  <div
    class="flex mb-1 text-foreground"
    :class="
      isSent ? 'sent-message justify-end' : 'justify-start received-message'
    "
  >
    <div
      class="px-3 py-2 rounded"
      :class="isSent ? 'bg-chat-sent' : 'bg-chat-recieved'"
    >
      {{ content }}
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  isSent: {
    type: Boolean,
    default: false,
  },
  content: {
    type: String,
    default: "Default Message",
  },
});
</script>
<style lang="postcss" scoped>
.message {
  /* @apply flex text-ui-foreground; */

  /* > div {
    @apply;
  } */
}
.sent-message {
  /* styles for sent message */
  /* @apply justify-end;

  > div {
    @apply bg-chat-sent;
  } */
}

.received-message {
  /* styles for received message */
  /* @apply justify-start;

  > div {
    @apply bg-chat-recieved;
  } */
}
</style>
