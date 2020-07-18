<template>
  <div class="messages">
    <div class="messages-content" ref="scrollbar">
      <template v-for="message in messages">
        <ChatbotMessage v-if="message.chatbot" :key="message.id" :message="message"/>
        <PersonMessage v-else :key="message.id" :message="message"/>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import PersonMessage from './messages/PersonMessage.vue';
import ChatbotMessage from './messages/ChatbotMessage.vue';

export default {
  name: 'MessagesList',
  components: { ChatbotMessage, PersonMessage },
  watch: {
    messages() {
      this.$nextTick(this.scrollToBottom);
    },
  },
  computed: {
    ...mapState([
      'messages',
    ]),
  },
  methods: {
    scrollToBottom() {
      this.$refs.scrollbar.scrollTop = this.$refs.scrollbar.scrollHeight;
    },
  },
};
</script>
