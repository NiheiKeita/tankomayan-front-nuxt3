<script setup lang="ts">
  useHead({
    title: 'たんこまやん|アンドウさん',
    meta: [
      { property: 'og:title', content: 'たんこまやん|アンドウさん' },
      {
        property: 'og:description',
        content: 'たんこまやん|アンドウさんのページ',
      },
      { property: 'description', content: 'たんこまやん|アンドウさんのページ' },
    ],
  });
</script>

<template>
  <div>
    <div class="m-2 mt-10 rounded-md bg-SubBgThemaColor p-2">
      <div class="flex w-full items-center justify-center">
        <img
          class="h-auto w-1/2"
          src="@/assets/images/ando.png"
          alt="アンドウさん"
        />
      </div>
      <h1 class="mt-5 flex w-full items-center justify-center text-xl">
        アンドウさん
      </h1>
      <div class="mt-5 flex w-full items-center justify-center px-5">
        正体不明の謎の生物。<br />
        悪いことをしたり片思いの相手と話したりすると、すぐに顔にでる。そのため隠し事もできない。<br />
        ピーマンが嫌い。
      </div>
    </div>
    <div class="my-4 mt-10 flex h-5 w-full items-center justify-center text-xl">
      スタンプ
    </div>
    <div class="mt-5 flex w-full items-center justify-center">
      <div class="m-2 w-1/3">
        <nuxt-link :to="routePathList('stamp_ando')" target="_blank">
          <div class="w-full rounded-full bg-SubThemaColor">
            <img
              class="h-auto w-full rounded-full"
              src="@/assets/images/ando.png"
              target="_blank"
              alt="アンドウさん１"
            />
          </div>
          <div class="mt-2 flex items-center justify-center underline">
            アンドウさん１
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
