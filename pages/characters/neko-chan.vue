<script setup lang="ts"></script>

<template>
  <div>
    <div class="m-2 mt-10 rounded-md bg-SubBgThemaColor p-2">
      <div class="flex w-full items-center justify-center">
        <img
          class="h-auto w-1/2"
          src="@/assets/images/neko-chan.png"
          alt="ねこちゃん"
        />
      </div>
      <h1 class="mt-5 flex w-full items-center justify-center text-xl">
        ねこちゃん
      </h1>
      <div class="mt-5 flex w-full items-center justify-center px-5">
        説明文説明文説明文説明文説明文説明文説明文説明文<br />
        説明文説明文説明文説明文説<br />
        明文説明文説明文説明文説明文説明文
      </div>
    </div>
    <div class="my-4 mt-10 flex h-5 w-full items-center justify-center text-xl">
      グッズ
    </div>
    <div class="mt-5 flex w-full items-center justify-center">
      <div class="m-2 w-1/3">
        <nuxt-link :to="routePathList('sns_suzuri')" target="_blank">
          <div class="w-full rounded-full bg-SubThemaColor">
            <img
              class="h-auto w-full rounded-full"
              src="@/assets/images/shop_neko_chan.jpg"
              target="_blank"
              alt="ねこちゃんステッカー"
            />
          </div>
          <div class="mt-2 flex items-center justify-center underline">
            ねこちゃん<br />
            ステッカー
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
