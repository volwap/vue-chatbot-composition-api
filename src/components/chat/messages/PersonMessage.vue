<template>
  <div class="message new message-personal">
    <span>{{message.text}}</span>
    <div class="timestamp">{{dateTime}}</div>
  </div>
</template>

<script>
import useDateTimeFormat from '../../../hooks/dateTimeFormat';

export default {
  name: 'PersonMessage',
  props: {
    message: Object,
  },
  setup(props) {
    const { dateTime } = useDateTimeFormat(props.message.date);

    return {
      dateTime,
    };
  },
};
</script>
