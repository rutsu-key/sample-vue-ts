<template>
  <div>
    <h2>Album Name: {{ album?.collectionName }}</h2>
    <h4>ArtWork</h4>
    <img :src="album.artworkUrl100" alt="" />
    <h5>Price: {{ album.collectionPrice }} {{ album.currency }}</h5>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { setup } from "vue-class-component";
import { Result } from "../types/ItunesTypesInterface";

export default defineComponent({
  props: {
    album: {
      type: Object as PropType<Result>,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>
