<template>
  <template v-if="isLoading">
    <div class="card-list">
      <router-link
        :to="`/movie/${item.id}`"
        class="card"
        v-for="item in moviePopular"
      >
        <div class="card__title">
          {{ item.title }}
        </div>
        <div class="card__desc">
          {{ item.overview }}
        </div>
        <div class="card__img">
          <img
            :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${item.poster_path}`"
            alt=""
          />
        </div>
      </router-link>
    </div>
  </template>
  <template v-else>loading</template>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";

let isLoading = ref(false);

let moviePopular = ref();
const fetchMovies = async () => {
  try {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=b8b6d79a65a0dd63fd6652bb2c626e45&language=en-US&page=1"
    );
    moviePopular.value = data.results;
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = true;
  }
};
fetchMovies();
console.log(moviePopular);
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}
.card {
  width: calc(25% - 15px);
  padding: 20px;
  border-radius: 10px;
  background-color: #111;
  &-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
}
</style>
