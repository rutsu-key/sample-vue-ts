<template>
  <div>
    <form @submit.prevent="searchItunes(searchText)">
      <input type="text" v-model="searchText" />
      <button @click="searchItunes(searchText)">Search</button>
      <div v-if="data.results">
        <div v-for="album in data.results" :key="album.amgArtistId">
          <TheShowAlbum :album="album" />
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRef, toRefs } from "vue";
import { itunesSearch } from "../services/iTunesAPI";
import { ItunesTypes } from "../types/ItunesTypesInterface";
import TheShowAlbum from "../components/TheShowAlbum.vue";

export default defineComponent({
  name: "App",
  components: { TheShowAlbum },
  // data: () => {
  //   return {
  //     data: {} as ItunesTypes,
  //     searchText: "",
  //   };
  // },
  // methods: {
  //   async searchItunes(search: string): Promise<void> {
  //     const value = itunesSearch(search);
  //     // console.log("data", value);
  //     this.data = await value;
  //     console.log("data", this.data);
  //   },
  // },
  // vue 3 のComposition APIのやり方
  setup() {
    let albums = reactive<{ data: ItunesTypes }>({ data: {} });
    let searchText = ref("");
    // Vue3 typescriptでは返却する型がなくても返却する型を指定すること
    const searchItunes = async (search: string): Promise<void> => {
      const value = await itunesSearch(search);
      albums.data = value;
      console.log("data", value);
    };
    return { searchItunes, ...toRefs(albums), searchText };
  },
});
</script>
