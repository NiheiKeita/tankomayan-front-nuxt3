<script setup lang="ts">
  // TODO(問題表示)
  import { Answer } from '@/types/answer';
  import { Question } from '@/types/question';
  const answerButtonClick = (isCorrect: Boolean) => {
    // TODO(解答正誤処理)
    console.log(isCorrect);
  };
  const question: Question = {
    id: 1,
    created_at: formatDate(Date.now()),
    name: '解答１',
    question_title: 'question_title',
    question_body: 'question_body',
  };
  const answers: Array<Answer> = [
    { id: 1, name: '解答１', is_correct: true },
    { id: 2, name: '解答２', is_correct: false },
    { id: 3, name: '解答３', is_correct: false },
  ];
</script>

<template>
  <div>
    <div>
      <div class="my-4 flex items-center justify-center">
        <QuestionBoardDefault class="w-4/5 md:w-1/3" :question="question" />
      </div>
    </div>
    <div class="mt-10">
      <div v-for="(answer, i) in answers" :key="i">
        <ButtonDefaultThema
          class="my-2"
          :msg="answer.name"
          @click="answerButtonClick(answer.is_correct)"
        />
      </div>
    </div>
    <div>
      <nuxt-link :to="routePathList('question_list')">
        <ButtonDefaultThema class="my-2 mt-10" :msg="question.name"
      /></nuxt-link>
    </div>
  </div>
</template>
