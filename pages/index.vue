<script setup lang="ts">
  const linkToOtherWindow = (url: string) => {
    window.open(url, '_blank');
  };
</script>

<template>
  <div>
    <!-- <div class="w-full">
      <img class="h-auto w-full" src="/images/icon_web.png" />
    </div> -->
    <!-- <div class="my-2 h-[1px] w-full bg-SubThemaColor"></div> -->
    <div class="my-4 flex h-5 w-full items-center justify-center text-xl">
      キャラクター
    </div>
    <div class="m-2 rounded-md bg-SubBgThemaColor p-2">
      <div class="flex w-full items-center justify-center">
        <div class="m-2 w-1/3">
          <nuxt-link :to="routePathList('character_ando')" class="">
            <div class="w-full rounded-full bg-SubThemaColor">
              <img
                class="h-auto w-full rounded-full"
                src="@/assets/images/ando.png"
                alt="アンドウさん"
              />
            </div>
            <div class="mt-2 flex items-center justify-center underline">
              アンドウさん
            </div>
          </nuxt-link>
        </div>
        <div class="m-2 w-1/3">
          <nuxt-link :to="routePathList('character_neko_chan')" class="">
            <div class="w-full rounded-full bg-SubThemaColor">
              <img
                class="h-auto w-full rounded-full"
                src="@/assets/images/neko-chan.png"
                alt="ねこちゃん"
              />
            </div>
            <div class="mt-2 flex items-center justify-center underline">
              ねこちゃん
            </div>
          </nuxt-link>
        </div>
        <div class="m-2 w-1/3">
          <nuxt-link :to="routePathList('character_paprika')" class="">
            <div class="w-full rounded-full bg-SubThemaColor">
              <img
                class="h-auto w-full rounded-full"
                src="@/assets/images/paprika.png"
                alt="パプリカくん"
              />
            </div>
            <div class="mt-2 flex items-center justify-center underline">
              パプリカくん
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="flex w-full items-center justify-center">
        <div class="m-2 w-1/3">
          <nuxt-link :to="routePathList('character_koto')" class="">
            <div class="w-full rounded-full bg-SubThemaColor">
              <img
                class="h-auto w-full rounded-full"
                src="@/assets/images/koto.png"
                alt="ことちゃん"
              />
            </div>
            <div class="mt-2 flex items-center justify-center underline">
              ことちゃん
            </div>
          </nuxt-link>
        </div>
        <!-- <div class="w-1/3 bg-red-300">
          <img class="h-auto w-full" src="/images/icon_web.png" />
        </div>
        <div class="w-1/3 bg-red-700">
          <img class="h-auto w-full" src="/images/icon_web.png" />
        </div> -->
      </div>
      <ButtonDefaultThema
        class="mb-3 mt-5 flex w-full items-center justify-center"
        msg="キャラクター一覧へ"
        @click="navigateTo({ path: routePathList('character_list') })"
      />
      <ButtonDefaultThema
        class="mb-3 mt-5 flex w-full items-center justify-center"
        msg="LINEスタンプ"
        @click="navigateTo({ path: routePathList('character_list') })"
      />
    </div>
    <!-- <div class="my-2 h-[1px] w-full bg-SubThemaColor"></div>
    <div>
      <div class="flex h-5 w-full items-center justify-center">ニュース</div>
      <div class="m-2 rounded-md bg-SubBgThemaColor p-2">
        <div class="w-full">
          <InformationDefaultArea />
        </div>
        <nuxt-link :to="routePathList('information_list')" class="">
          <div
            class="mb-3 mt-5 flex w-full items-center justify-center underline"
          >
            もっとみる
          </div>
        </nuxt-link>
      </div>
    </div>
    <div class="my-2 h-[1px] w-full bg-SubThemaColor"></div> -->

    <div class="my-4 flex h-5 w-full items-center justify-center text-xl">
      グッズ
    </div>
    <div class="m-2 rounded-md bg-SubBgThemaColor p-2">
      <div class="flex w-full items-center justify-center">
        <div class="m-2 w-1/3">
          <nuxt-link :to="routePathList('sns_suzuri')" class="">
            <div class="w-full rounded-full bg-SubThemaColor">
              <img
                class="h-auto w-full rounded-full"
                src="@/assets/images/shop_neko_chan.jpg"
                alt="ねこちゃんステッカー"
              />
            </div>
            <div class="mt-2 flex items-center justify-center underline">
              ねこちゃん<br />
              ステッカー
            </div>
          </nuxt-link>
        </div>
        <!-- <div class="m-2 w-1/3">
          <nuxt-link :to="routePathList('sns_suzuri')" target="_blank">
            <div class="w-full rounded-full bg-SubThemaColor">
              <img
                class="h-auto w-full rounded-full"
                src="@/assets/images/neko-chan.png"
                alt="ねこちゃん"
              />
            </div>
            <div class="mt-2 flex items-center justify-center underline">
              ねこちゃん
            </div>
          </nuxt-link>
        </div>
        <div class="m-2 w-1/3">
          <nuxt-link :to="routePathList('sns_suzuri')" target="_blank">
            <div class="w-full rounded-full bg-SubThemaColor">
              <img
                class="h-auto w-full rounded-full"
                src="@/assets/images/paprika.png"
                alt="パプリカくん"
              />
            </div>
            <div class="mt-2 flex items-center justify-center underline">
              パプリカくん
            </div>
          </nuxt-link>
        </div> -->
      </div>
      <nuxt-link :to="routePathList('sns_suzuri')" target="_blank">
        <div
          class="mb-3 mt-5 flex w-full items-center justify-center underline"
        >
          もっとみる
        </div>
      </nuxt-link>
      <ButtonDefaultThema
        class="mb-3 mt-5 flex w-full items-center justify-center"
        msg="Suzuriへ"
        @click="linkToOtherWindow(routePathList('sns_suzuri'))"
      />
    </div>
    <div class="my-2 h-[1px] w-full bg-SubThemaColor"></div>
  </div>
</template>
