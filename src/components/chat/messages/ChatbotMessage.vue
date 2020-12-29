<template>
  <div class="message new" :class="{'loading': loading}">
    <figure class="avatar">
      <img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg"
           alt="avatar"/>
    </figure>
    <span>{{message.text}}</span>
    <div class="timestamp">{{dateTime}}</div>
  </div>
</template>

<script>
import useDateTimeFormat from '../../../hooks/dateTimeFormat';

export default {
  name: 'ChatbotMessage',
  props: {
    message: Object,
  },
  data() {
    return {
      loading: true,
    };
  },
  created() {
    setTimeout(() => {
      this.loading = false;
    }, 1000 + (Math.random() * 20) * 100);
  },
  setup(props) {
    return {
      ...useDateTimeFormat(props.message.date),
    };
  },
};
</script>
