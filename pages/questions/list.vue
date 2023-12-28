<script setup lang="ts">
  // TODO(問題表示)
  import { Question } from '@/types/question';

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
</script>

<template>
  <div>
    <div
      v-for="(question, i) in questions"
      :key="i"
      class="my-4 flex items-center justify-center"
    >
      <QuestionBoardDefault class="w-4/5 md:w-1/3" :question="question" />
    </div>
  </div>
</template>
