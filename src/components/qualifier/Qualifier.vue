<template>
  <div>
    <HeaderModal :title="'Califícanos'" @onClose="close">
      <template #body>
        <div>
          <div id="qualifier-page-one" align="center">
            <div class="row">
              <div class="col">
                <span class="">Pésimio</span>
                <svg
                  v-for="i in 5"
                  :key="i"
                  class="star"
                  :class="[calification >= i && 'selected-star']"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  @click="selectStar(i)"
                >
                  <path
                    d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span class="">Excelente</span>
                <div class="my-8">
                  <span>Observación del cliente</span>
                  <textarea
                    class="form-control form-control-solid"
                    name=""
                    id=""
                    cols="30"
                    rows="4"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div
            id="qualifier-page-two"
            class="hidden-to-fade"
            style="height: 7vh"
          >
            <div class="row">
              <div class="col" align="center">
                <span style="font-size: 16px"
                  >¡Muchas gracias por tu colaboración!</span
                >
              </div>
            </div>
          </div>
        </div>
        <div align="center" v-if="current_page.number < final_page">
          <button
            class="btn btn-secondary btn-sm mx-2"
            @click="goToPage(current_page.number - 1)"
          >
            Regresar
          </button>
          <button
            class="btn btn-primary btn-sm"
            @click="goToPage(current_page.number + 1)"
          >
            Continuar
          </button>
        </div>
      </template>
    </HeaderModal>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue-demi";

const emit = defineEmits(["onClose"]);
const close = () => {
  emit("onClose");
};

let calification = ref(1);
const selectStar = (i) => {
  calification.value = i;
};

const fadeIn = (element_to_show) => {
  element_to_show.style.opacity = 0;
  element_to_show.style.display = "block";

  const show_interval = setInterval(() => {
    element_to_show.style.opacity = +element_to_show.style.opacity + 0.1;

    if (element_to_show.style.opacity == 1) {
      clearInterval(show_interval);
    }
  }, 20);
};
const fadeOut = (element_to_hide) => {
  element_to_hide.style.opacity = 1;
  const hide_interval = setInterval(() => {
    element_to_hide.style.opacity -= 0.1;
    if (element_to_hide.style.opacity == 0) {
      element_to_hide.style.display = "none";
      clearInterval(hide_interval);
    }
  }, 20);
};
const fade = (hide, show) => {
  let element_to_hide = document.querySelector(hide);
  let element_to_show = document.querySelector(show);
  fadeOut(element_to_hide);
  setTimeout(() => {
    fadeIn(element_to_show);
  }, 200);
};
let current_page = reactive({
  id: "#qualifier-page-one",
  number: 1,
});
let final_page = ref(2);
const goToPage = (page) => {
  current_page.number = page;
  switch (page) {
    case 1: {
      fade(current_page.id, "#qualifier-page-one");
      current_page.id = "#qualifier-page-one";

      break;
    }
    case 2: {
      fade(current_page.id, "#qualifier-page-two");
      current_page.id = "#qualifier-page-two";

      break;
    }
  }
};
</script>

<style>
.star {
  cursor: pointer;
  width: 50px;
  height: 50px;
  stroke: rgb(252, 198, 47);
  color: rgba(252, 197, 47, 0);
  transition: 0.5s;
}
.star:hover {
  width: 65px;
  height: 65px;
  color: rgb(252, 198, 47);
  transition: 0.5s;
}
.selected-star {
  color: rgb(252, 198, 47);
}
.hidden-to-fade {
  opacity: 0;
  display: none;
}
</style>