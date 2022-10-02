<template>
  <template v-if="isLoading">
    <div>{{ movieDetail.title }}</div>
    <div>{{ movieDetail.overview }}</div>
    <div>
      <img
        :src="`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movieDetail.backdrop_path}`"
        alt=""
      />
    </div>
  </template>
  <template v-else> loading </template>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
let isLoading = ref(false);

let movieDetail = ref();
const fetchMovieDetail = async () => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/` +
        route.params.code +
        `?api_key=b8b6d79a65a0dd63fd6652bb2c626e45&language=en-US`
    );
    movieDetail.value = data;
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = true;
  }
};
fetchMovieDetail();
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}
</style>
