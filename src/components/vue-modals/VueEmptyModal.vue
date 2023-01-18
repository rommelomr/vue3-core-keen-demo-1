<template>
  <div
    class="modal fade"
    :id="id"
    tabindex="-1"
    :aria-labelledby="id + 'Label'"
    aria-hidden="true"
    :data-bs-backdrop="isStatic ? 'static' : null"
    :class="[scrollable && 'modal-dialog-scrollable']"
  >
    <div class="modal-dialog" :class="['modal-' + size]">
      <div class="modal-content">
        <div class="modal-body">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, reactive, ref } from "vue-demi";

const props = defineProps({
  show: {
    type: Boolean,
    default: true,
  },
  size: {
    type: String,
    default: "",
  },
  isStatic: {
    type: Boolean,
    default: false,
  },
  scrollable: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["onClose"]);

let id = ref("modal_" + Date.now());
let modal = reactive({});

const closeModal = () => {
  modal.hide();
};
watch(
  () => props.show,
  (first) => {
    if (first) {
      modal.show();
    } else {
      modal.hide();
    }
  }
);
onMounted(() => {
  modal = new Modal(document.getElementById(id.value));
  console.log(props.show);
  if (props.show) {
    modal.show();
  }
  const _modal = document.getElementById(id.value);
  _modal.addEventListener("hidden.bs.modal", (event) => {
    emit("onClose");
  });
});
</script>
