<script setup lang="ts"></script>

<template>
  <div>
    <div class="mt-10 w-full">
      <div class="flex w-full items-center justify-center">
        <img
          class="h-auto w-1/2"
          src="@/assets/images/paprika.png"
          alt="パプリカくん"
        />
      </div>
      <h1 class="mt-5 flex w-full items-center justify-center text-xl">
        パプリカくん
      </h1>
      <div class="mt-5 flex w-full items-center justify-center px-5">
        説明文説明文説明文説明文説明文説明文説明文説明文<br />
        説明文説明文説明文説明文説<br />
        明文説明文説明文説明文説明文説明文
      </div>
    </div>
    <div class="my-4 mt-10 flex h-5 w-full items-center justify-center text-xl">
      スタンプ
    </div>
    <div class="mt-5 flex w-full items-center justify-center">
      <div class="m-2 w-1/3">
        <nuxt-link :to="routePathList('stamp_paprika')" class="">
          <div class="w-full rounded-full bg-SubThemaColor">
            <img
              class="h-auto w-full rounded-full"
              src="@/assets/images/paprika.png"
              target="_blank"
              alt="パプリカくん"
            />
          </div>
          <div class="mt-2 flex items-center justify-center underline">
            パプリカくん
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
