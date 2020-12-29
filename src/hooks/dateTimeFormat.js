import { computed } from 'vue';

export default function useDateTimeFormat(date) {
  const dateTime = computed(() => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  });

  return {
    dateTime,
  };
}
