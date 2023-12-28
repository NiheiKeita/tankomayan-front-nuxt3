<script setup lang="ts">
  defineProps({
    msg: {
      type: String,
      default: 'button',
    },
    num: {
      type: Number,
      default: 0,
    },
  });
  const emit = defineEmits(['click']);

  const clickEvent = () => {
    console.log('ckick'); // eslint-disable-line no-console
    emit('click');
  };
</script>

<template>
  <div
    class="flex h-24 w-24 items-center justify-center rounded-full bg-red-300"
  >
    <a href="javascript:void(0)" @click="clickEvent">
      <div class="flex items-center justify-center text-base">{{ num }}</div>
      <div class="flex items-center justify-center text-base">{{ msg }}</div>
    </a>
  </div>
</template>
