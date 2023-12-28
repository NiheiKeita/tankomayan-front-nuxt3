<script setup lang="ts">
  // TODO(お知らせを表示)
</script>

<template>
  <div class="w-full justify-between">
    <div class="relative flex w-full justify-between">
      <div class="flex h-20 w-20 items-center justify-center">
        <img src="/images/icon_web.png" />
      </div>
      <div class="flex h-20 w-20 items-center justify-center">
        <img src="/images/icon_web.png" />
      </div>
      <div class="absolute flex h-20 items-center justify-center pe-20 ps-20">
        <div class="">
          <p class="text-base">フォローされました</p>
          <p class="text-base">５時間前</p>
        </div>
      </div>
    </div>
    <div class="h-[0.5px] w-full bg-ThemaColorInversion opacity-10"></div>
  </div>
</template>
