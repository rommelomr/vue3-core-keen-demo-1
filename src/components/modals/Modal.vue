<template>
  <div
    class="modal fade"
    :id="id"
    tabindex="-1"
    :aria-labelledby="id + 'Label'"
    aria-hidden="true"
  >
    <div class="modal-dialog" :class="['modal-' + size]">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" :id="id + 'Label'">{{ title }}</h1>
          <button
            type="button"
            class="btn-close"
            @click="closeModal()"
          ></button>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, reactive, ref } from "vue-demi";

const props = defineProps({
  title: {
    type: String,
  },
  size: {
    type: String,
    default: "",
  },
});
const emit = defineEmits(["onClose"]);

let id = ref("modal_" + Date.now());
let modal = reactive({});
let modal_events = reactive({});

const closeModal = () => {
  modal.hide();
};

onMounted(() => {
  modal = new bootstrap.Modal("#" + id.value, {});
  modal_events = document.getElementById(id.value);
  modal_events.addEventListener("hidden.bs.modal", (event) => {
    emit("onClose");
  });
  modal.show();
});
</script>
