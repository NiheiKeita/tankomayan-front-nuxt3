<script setup>
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
</script>

<template>
  <div class="my-20">
    <!-- <div class="flex w-full items-center justify-center">お問い合わせ</div> -->
    <div class="flex w-full items-center justify-center">
      <div class="flex justify-between space-x-5">
        <a :href="routePathList('sns_x')" target="_blank"
          ><div class="border-b border-black">
            <img class="m-1 h-3" src="@/assets/images/logo-black-x.png" /></div
        ></a>
        <a :href="routePathList('sns_suzuri')" target="_blank"
          ><div class="flex border-b border-black">
            <img class="h-5" src="@/assets/images/icon_suzuri.png" />
            <div class="ml-2 text-lg leading-none">SUZURI</div>
          </div></a
        >
        <!-- <div class="underline">Instagram</div> -->
        <!-- <div class="underline">Line</div> -->
      </div>
    </div>

    <ButtonDefaultThema
      class="mb-3 mt-5 flex w-full items-center justify-center"
      @click="goTop"
      >PAGE TOP</ButtonDefaultThema
    >
  </div>
</template>
