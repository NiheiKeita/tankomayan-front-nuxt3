<script setup lang="ts">
  const linkToOtherWindow = (url: string) => {
    window.open(url, '_blank');
  };
  useHead({
    title: 'たんこまやん|TOP',
    meta: [
      { property: 'og:title', content: 'たんこまやん|TOP' },
      { property: 'og:description', content: 'たんこまやん|TOPのページ' },
      { property: 'description', content: 'たんこまやん|TOPのページ' },
    ],
  });
</script>

<template>
  <div>
    <!-- <div class="w-full">
      <img class="h-auto w-full" src="/images/icon_web.png" />
    </div> -->
    <!-- <div class="my-2 h-[1px] w-full bg-SubThemaColor"></div> -->
    <h2 class="my-4 flex h-5 w-full items-center justify-center text-xl">
      キャラクター
    </h2>
    <div class="m-2 rounded-md bg-SubBgThemaColor p-2">
      <div class="flex w-full flex-wrap items-baseline justify-center">
        <CharacterDefaultArea
          class="w-1/3 p-2"
          :link="routePathList('character_ando')"
          image="/images/characters/ando.png"
          alt="アンドウさん"
          >アンドウさん
        </CharacterDefaultArea>
        <CharacterDefaultArea
          class="w-1/3 p-2"
          :link="routePathList('character_neko_chan')"
          image="/images/characters/neko-chan.png"
          alt="ねこちゃん"
          >ねこちゃん
        </CharacterDefaultArea>
        <CharacterDefaultArea
          class="w-1/3 p-2"
          :link="routePathList('character_paprika')"
          image="/images/characters/paprika.png"
          alt="パプリカくん"
          >パプリカくん
        </CharacterDefaultArea>
        <CharacterDefaultArea
          class="w-1/3 p-2"
          :link="routePathList('character_koto')"
          image="/images/characters/koto.png"
          alt="ことちゃん"
          >ことちゃん
        </CharacterDefaultArea>
      </div>
      <!-- <ButtonDefaultThema
        class="mb-3 mt-5 flex w-full items-center justify-center"
        msg="キャラクター一覧へ"
        @click="navigateTo({ path: routePathList('character_list') })"
      /> -->
      <ButtonDefaultThema
        class="mb-3 mt-5 flex w-full items-center justify-center"
        @click="navigateTo({ path: routePathList('character_list') })"
        ><img
          class="mx-1 h-6"
          src="@/assets/images/icon_LINE.png"
        />LINEスタンプ</ButtonDefaultThema
      >
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

    <h2 class="my-4 flex h-5 w-full items-center justify-center text-xl">
      グッズ
    </h2>
    <div class="m-2 rounded-md bg-SubBgThemaColor p-2">
      <div class="flex w-full flex-wrap items-baseline justify-center">
        <GoodsDefaultArea
          class="w-1/3 p-2"
          :link="routePathList('shop_neko_chan_sticker')"
          image="/images/shop/neko_chan_sticker.jpg"
          alt="ねこちゃんステッカー"
        >
          ねこちゃん<br />
          ステッカー
        </GoodsDefaultArea>
        <GoodsDefaultArea
          class="w-1/3 p-2"
          :link="routePathList('shop_neko_chan_sweat')"
          image="/images/shop/neko_chan_sweat.jpg"
          alt="ねこちゃんスウェット"
        >
          ねこちゃん<br />
          スウェット
        </GoodsDefaultArea>
        <GoodsDefaultArea
          class="w-1/3 p-2"
          :link="routePathList('shop_neko_chan_cup')"
          image="/images/shop/neko_chan_cup.jpg"
          alt="ねこちゃんカップ"
        >
          ねこちゃん<br />
          カップ
        </GoodsDefaultArea>
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
        @click="linkToOtherWindow(routePathList('sns_suzuri'))"
      >
        <img
          class="mx-1 h-6"
          src="@/assets/images/icon_suzuri.png"
        />Suzuriへ</ButtonDefaultThema
      >
    </div>
    <div class="my-2 h-[1px] w-full bg-SubThemaColor"></div>
  </div>
</template>
