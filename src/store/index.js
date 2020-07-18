import Vue from 'vue';
import Vuex from 'vuex';
import { ADD_MESSAGE } from './mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    messages: [],
    chatbotMessages: [
      'Чат - хорошее место для общения',
      'Я думаю, что вы - хороший человек',
      'Почему вы так думаете?',
      'Можете объяснить?',
      'В любом случае я должен идти',
      'Было приятно поболтать с вами',
      'Пришло время написать больше кода',
      'Счастливо оставаться!',
      ':)',
    ],
  },
  getters: {
    chatbotMessagesCount: (state) => state.messages.filter((value) => value.chatbot).length,
    nextChatbotMessage: ({ chatbotMessages }, getters) => {
      const count = getters.chatbotMessagesCount;
      const index = count < chatbotMessages.length ? count : count - 1;
      return chatbotMessages[index];
    },
  },
  mutations: {
    [ADD_MESSAGE]: (state, message) => {
      state.messages.push(message);
    },
  },
  actions: {
    sendMessage(context, message) {
      setTimeout(() => {
        context.commit(ADD_MESSAGE, message);
      }, 500);
    },
  },
  modules: {
  },
});
