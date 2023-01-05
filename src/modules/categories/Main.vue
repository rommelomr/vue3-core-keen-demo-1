<template>
  <div class="container">
    <div id="list" class="hidden-to-fade">
      <List v-if="store.active_page == '#list'" @onDisplayPage="displayPage" />
    </div>
    <div id="second-area" class="hidden-to-fade">
      <SecondPage @onDisplayPage="displayPage" />
    </div>
  </div>
</template>
<script setup>
import List from "./pages/List.vue";
import SecondPage from "./pages/SecondPage.vue";
import { fade, fadeIn } from "@/utils/Functions.js";
import useCategoriesStore from "./stores/index.js";
import { onMounted } from "vue-demi";
const store = useCategoriesStore();
const displayPage = (fade_effect) => {
  fade(store.active_page, fade_effect.page_to_show, () => {
    store.setActivePage(fade_effect.page_to_show);
  });
};
onMounted(() => {
  store.init();
  fadeIn(document.querySelector(store.active_page));
});
</script>
<script>
export default {
  name: "MainComponent",
};
</script>
