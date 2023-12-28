<script setup lang="ts">
  // TODO(問題表示)
  import { Question } from '@/types/question';
  defineProps({
    question: {
      type: Object as () => Question,
      default: null,
    },
  });

  const myHeart = ref(false);
  const showThreeDotsMenu = ref(false);
  const heartClick = () => {
    myHeart.value = !myHeart.value;
    console.log(myHeart); // eslint-disable-line no-console
  };
  const threeDotsClick = () => {
    showThreeDotsMenu.value = !showThreeDotsMenu.value;
  };
</script>

<template>
  <div
    class="rounded-md border-8 border-BoardBorder bg-BoardBG px-2 pt-2 text-white shadow-[0_3px_10px_rgb(0,0,0,0.5)]"
  >
    <div class="relative flex justify-between">
      <div class="text-sm text-gray-100">時間</div>
      <a href="javascript:void(0)" @click="threeDotsClick">
        <img class="h-5" src="/images/three_dots.svg" />
      </a>
      <transition name="slide-fade-up" mode="out-in">
        <div
          v-if="showThreeDotsMenu"
          class="absolute right-0 bg-white pb-3 pl-1 pr-3 pt-2"
        >
          <div class="flex">
            <div class="pr-2">
              <div
                v-for="i in 7"
                :key="i"
                class="mt-1 h-3 w-3 rounded-full bg-BoardBG"
              ></div>
            </div>
            <ul>
              <li>
                <div class="flex w-full justify-end">
                  <a href="javascript:void(0)" @click="threeDotsClick">
                    <img class="h-4" src="/images/cross.svg" />
                  </a>
                </div>
              </li>
              <li class="mt-2 px-1">
                <a class="text-base text-black" href="#"
                  >マイリストに登録する</a
                >
              </li>
              <li class="h-[1px] w-full bg-cyan-500"></li>
              <li class="px-1">
                <a class="text-base text-black" href="#">フォローする</a>
              </li>
              <li class="h-[1px] w-full bg-cyan-500"></li>
              <li class="px-1">
                <a class="text-base text-black" href="#">ブロックする</a>
              </li>
              <li class="h-[1px] w-full bg-cyan-500"></li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
    <nuxt-link
      :to="routePathList('question_detail', 1)"
      class="inline-block w-full p-5"
    >
      <div class="mt-5 text-base">{{ question?.question_body }}</div>
    </nuxt-link>
    <nuxt-link
      :to="routePathList('question_detail', 1)"
      class="inline-block w-full p-5"
    >
      <div class="flex justify-end text-base">二瓶より</div>
    </nuxt-link>
    <div class="flex justify-start space-x-10">
      <a href="javascript:void(0)">
        <div class="flex space-x-2">
          <img class="h-5" src="/images/balloon.svg" />
          <div class="text-sm">12</div>
        </div>
      </a>
      <a href="javascript:void(0)">
        <div class="flex space-x-2">
          <img class="h-5" src="/images/bulb.svg" />
          <div class="text-sm">22</div>
        </div>
      </a>
      <a href="javascript:void(0)" @click="heartClick">
        <div class="flex space-x-2">
          <transition name="bounce" mode="out-in">
            <img v-if="myHeart" class="h-5" src="/images/heart_white.svg" />
            <img v-else class="h-5" src="/images/heart_black.svg" />
          </transition>
          <div class="text-sm">3</div>
        </div>
      </a>
    </div>
    <div class="flex justify-end space-x-2">
      <div class="h-2 w-5 rounded-l-3xl rounded-r-md bg-yellow-400"></div>
      <div class="h-2 w-6 rounded-l-3xl rounded-r-md bg-white"></div>
    </div>
  </div>
</template>
<style>
  .bounce-enter-active {
    animation: bounce-in 0.5s;
  }
  .bounce-leave-active {
    animation: bounce-in 0.5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.25);
    }
    100% {
      transform: scale(1);
    }
  }
  .slide-fade-up-enter-active {
    transition: all 0.3s ease-out;
  }

  .slide-fade-up-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .slide-fade-up-enter-from,
  .slide-fade-up-leave-to {
    transform: translateY(-20px);
    opacity: 0;
  }
</style>
