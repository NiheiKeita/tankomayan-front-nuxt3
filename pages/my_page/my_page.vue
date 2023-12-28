<script setup lang="ts">
  // TODO(問題表示)
  import { Question } from '@/types/question';
  import { User } from '@/types/user';
  const myId = 'keita1996';
  const user: User = {
    id: 1,
    created_at: formatDate(Date.now()),
    name: 'nihei',
    posts_number: 1,
    likes_number: 2,
    answers_number: 3,
    followers_number: 44,
    follows_number: 555,
  };
  const questions: Array<Question> = [
    {
      id: 1,
      created_at: formatDate(Date.now()),
      name: '解答１',
      question_title: 'question_title',
      question_body: 'question_body',
    },
    {
      id: 1,
      created_at: formatDate(Date.now()),
      name: '解答１',
      question_title: 'question_title',
      question_body: 'question_body',
    },
    {
      id: 1,
      created_at: formatDate(Date.now()),
      name: '解答１',
      question_title: 'question_title',
      question_body: 'question_body',
    },
  ];
  const select = ref('post');
  const profileEditClick = () => {
    return navigateTo({
      path: routePathList('profile_edit'),
    });
  };
  const createQuestionClick = () => {
    return navigateTo({
      path: routePathList('question_create'),
    });
  };
  const iconClick = (route: string) => {
    if (route == null) {
      return;
    }
    return navigateTo({
      path: routePathList(route),
    });
  };
  const tabClick = (tabName: string) => {
    console.log(tabName);
    select.value = tabName;
  };
  const copy = (value: string) => {
    const textCode = value;
    navigator.clipboard.writeText(textCode);
    alert('”' + textCode + '” をコピーしました');
    // copytoClipboarad(textCode);
  };
</script>

<template>
  <div class="md:mx-[20%]">
    <div class="my-4 flex items-center justify-center text-base">
      <div class="flex w-2/5 items-center justify-center">
        <div>
          <img class="h-16 w-16" src="/images/magnifying_glass.svg" />
          <div class="mt-3 flex items-center justify-center">nihei</div>
        </div>
      </div>
      <div class="w-3/5">
        <div class="flex items-center justify-evenly">
          <MypageDefaultIcon msg="投稿" :num="user.posts_number" />
          <MypageDefaultIcon msg="いいね" :num="user.likes_number" />
          <MypageDefaultIcon msg="解答" :num="user.answers_number" />
        </div>
        <div class="mt-4 flex items-center justify-evenly">
          <MypageDefaultIcon
            msg="フォロワー"
            :num="user.followers_number"
            @click="iconClick('followers')"
          />
          <MypageDefaultIcon
            msg="フォロー中"
            :num="user.follows_number"
            @click="iconClick('follows')"
          />
        </div>
      </div>
    </div>
    <div class="my-2 ms-4 flex items-center justify-start">
      <a
        href="javascript:void(0)"
        class="text-sm text-blue-700"
        @click="copy('@' + myId)"
      >
        @{{ myId }}</a
      >
    </div>
    <div class="my-2 flex items-center justify-evenly">
      <ButtonDefaultThema
        msg="プロフィールを編集する"
        @click="profileEditClick"
      />
      <ButtonDefaultThema msg="投稿する" @click="createQuestionClick" />
    </div>
    <div class="my-4 flex items-center justify-center">
      <div class="flex h-10 w-full">
        <ButtonTabDefault
          msg="投稿"
          :select="select == 'post'"
          @click="tabClick('post')"
        />
        <ButtonTabDefault
          msg="履歴"
          :select="select == 'history'"
          @click="tabClick('history')"
        />
        <ButtonTabDefault
          msg="マイリスト"
          :select="select == 'mylist'"
          @click="tabClick('mylist')"
        />
        <ButtonTabDefault
          msg="保存"
          :select="select == 'save'"
          @click="tabClick('save')"
        />
      </div>
    </div>
    <div>
      <div
        v-for="(question, i) in questions"
        :key="i"
        class="my-4 flex items-center justify-center"
      >
        <QuestionBoardDefault class="w-4/5 md:w-1/2" :question="question" />
      </div>
    </div>
  </div>
</template>
