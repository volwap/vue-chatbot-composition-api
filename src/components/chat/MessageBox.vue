<template>
  <div class="message-box">
    <textarea
      class="message-input"
      placeholder="Введите сообщение..."
      v-model="comment"
      @keydown.enter.exact.prevent
      @keyup.enter.exact="sendMessage"
    ></textarea>
    <button
      type="submit"
      class="message-submit"
      @click="sendMessage"
    >Отправить</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'MessageBox',
  data() {
    return {
      comment: '',
    };
  },
  mounted() {
    this.sendChatbotMessage();
  },
  computed: {
    ...mapGetters([
      'nextChatbotMessage',
    ]),
  },
  methods: {
    sendMessage() {
      if (!this.comment) return;
      const message = {
        id: Date.now(),
        text: this.comment,
        date: new Date(),
      };
      this.$store.dispatch('sendMessage', message);
      this.comment = '';
      setTimeout(this.sendChatbotMessage, 1000 + (Math.random() * 20) * 100);
    },
    sendChatbotMessage() {
      if (this.comment) return;
      const message = {
        id: Date.now(),
        text: this.nextChatbotMessage,
        date: new Date(),
        chatbot: true,
      };
      this.saveMessage(message);
    },
    ...mapActions({
      saveMessage: 'sendMessage',
    }),
  },
};
</script>
