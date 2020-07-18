<template>
  <div class="chat">
    <ChatTitle v-bind:fio="'Boris Pavlov'" :post="'Full stack developer'"/>
    <MessagesList/>
    <MessageBox/>
  </div>
</template>

<script>
import ChatTitle from './chat/ChatTitle.vue';
import MessagesList from './chat/MessagesList.vue';
import MessageBox from './chat/MessageBox.vue';

export default {
  name: 'Chat',
  components: { MessageBox, MessagesList, ChatTitle },
};
</script>

<style lang="scss">
  @import "../styles/chat";
</style>
