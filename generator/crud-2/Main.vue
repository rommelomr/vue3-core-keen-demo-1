<template>
  <div class="container">
    <div id="list" class="hidden-to-fade">
      <List v-if="store.active_page == '#list'" @onDisplayPage="displayPage" />
    </div>
    <div id="create-__name__(kebabCase)" class="hidden-to-fade">
      <__name__(pascalCase)Form v-if="store.active_page ==
      '#create-__name__(kebabCase)'" @onDisplayPage="displayPage" />
    </div>
  </div>
</template>
<script setup>
import List from "./pages/List.vue";
import __name__(pascalCase)Form from "./pages/__name__(pascalCase)Form.vue";
import { fade, fadeIn } from "@/utils/Functions.js";
import use__name__(pascalCase)Store from "./stores/index.js";
import { onMounted } from "vue-demi";
const store = use__name__(pascalCase)Store();
const displayPage = (fade_effect) => {
  fade(store.active_page, fade_effect.page_to_show,()=>{

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
  name: "__name__(pascalCase)MainComponent",
};
</script>
