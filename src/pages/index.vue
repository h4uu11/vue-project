<template>
  <div>{{ moviePopular[1] }}</div>
</template>

<script setup>
//https://image.tmdb.org/t/p/w300_and_h450_bestv2/h32gl4a3QxQWNiNaR4Fc1uvLBkV.jpg
import { ref } from "vue";
import axios from "axios";

const moviePopular = ref();
const fetchMovie = async () => {
  const { data } = await axios.get(
    "https://api.themoviedb.org/3/movie/popular?api_key=b8b6d79a65a0dd63fd6652bb2c626e45&language=en-US&page=1"
  );
  moviePopular.value = data.results;
};
fetchMovie();
console.log(moviePopular);
</script>

<style lang="scss" scoped></style>
