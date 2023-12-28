<script setup lang="ts">
  const handleClick = () => {
    console.log('nihei'); // eslint-disable-line no-console
    return navigateTo({
      path: routePathList('register_input'),
    });
  };

  const { data } = await useFetch('http://127.0.0.1:8000/api/users/');
  console.log(data.value);
</script>

<template>
  <div>
    <div class="justify-center">
      <ButtonDefaultThema class="my-2" msg="新規登録" @click="handleClick" />
      <ButtonDefaultThema class="my-2" msg="ログイン" />
      {{ data }}
    </div>
    <h1 class="text-lg text-gray-400">Main Page</h1>
    <h1 class="text-lg text-gray-400">Main Page</h1>
    <h1 class="text-lg text-gray-400">Main Page</h1>
  </div>
</template>
