<template>
  <div class="sticky top-0 flex w-full justify-between bg-ThemaColor">
    <nuxt-link :to="routePathList('top')" class="">
      <div class="flex justify-center">
        <img class="m-2 h-10" src="/images/icon_web.png" />
        <p
          class="flex items-center justify-center text-2xl font-bold leading-3 text-white"
        >
          たんこまやん
        </p>
      </div>
    </nuxt-link>
    <div class="flex items-center justify-center">
      <!-- <img class="m-2 h-10" src="/images/icon_web.png" /> -->
      <HambergerMenu />
    </div>
  </div>
</template>
