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
import { ref, nextTick, onUpdated } from 'vue';
import { mapState } from 'vuex';
import PersonMessage from './messages/PersonMessage.vue';
import ChatbotMessage from './messages/ChatbotMessage.vue';

export default {
  name: 'MessagesList',
  components: { ChatbotMessage, PersonMessage },
  computed: {
    ...mapState([
      'messages',
    ]),
  },
  setup() {
    const scrollbar = ref(null); // reactive({})

    function scrollToBottom() {
      scrollbar.value.scrollTop = scrollbar.value.scrollHeight;
    }

    onUpdated(() => {
      nextTick(scrollToBottom);
    });

    return {
      scrollbar,
    };
  },
};
</script>
