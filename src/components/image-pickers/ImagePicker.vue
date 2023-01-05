<template>
  <!--end::Card header-->
  <!--begin::Card body-->

  <!--begin::Image input-->
  <!--begin::Image input placeholder-->

  <!--end::Image input placeholder-->
  <div
    class="
      image-input image-input-empty image-input-outline image-input-placeholder
      mb-3
    "
    data-kt-image-input="true"
  >
    <!--begin::Preview existing avatar-->
    <div
      class="image-input-wrapper w-150px h-150px"
      :style="`background-image:url(${preview})`"
    ></div>
    <!--end::Preview existing avatar-->
    <!--begin::Label-->
    <label
      v-if="preview == ''"
      class="
        btn btn-icon btn-circle btn-active-color-primary
        w-25px
        h-25px
        bg-body
        shadow
      "
      data-kt-image-input-action="change"
      data-bs-toggle="tooltip"
      title="Change avatar"
    >
      <i class="bi bi-pencil-fill fs-7"></i>
      <!--begin::Inputs-->
      <input
        id="image"
        type="file"
        name="avatar"
        accept=".png, .jpg, .jpeg"
        @change="uploadImage"
      />
      <input type="hidden" name="avatar_remove" />
      <!--end::Inputs-->
    </label>
    <!--end::Label-->
    <!--begin::Cancel-->
    <span
      v-if="preview != ''"
      class="
        btn btn-icon btn-circle btn-active-color-primary
        d-flex
        w-25px
        h-25px
        bg-body
        shadow
      "
      data-kt-image-input-action="cancel"
      data-bs-toggle="tooltip"
      data-kt-initialized="1"
      title="Cancel avatar"
      @click="removeImage"
    >
      <i class="bi bi-x fs-2"></i>
    </span>
    <!--end::Cancel-->
    <!--begin::Remove-->
    <span
      class="
        btn btn-icon btn-circle btn-active-color-primary
        w-25px
        h-25px
        bg-body
        shadow
      "
      data-kt-image-input-action="remove"
      data-bs-toggle="tooltip"
      title="Remove avatar"
    >
      <i class="bi bi-x fs-2"></i>
    </span>
    <!--end::Remove-->
  </div>
  <!--end::Image input-->

  <!--end::Card body-->
</template>

<script setup>
import { extractFile } from "@/utils/Functions.js";
import { onMounted, ref } from "vue-demi";
const props = defineProps({
  imageUrl: {
    type: String,
    default: "",
  },
});
const emit = defineEmits(["onAddImage", "onRemoveImage"]);
let preview = ref("");
const uploadImage = () => {
  let file = extractFile("image");
  emit("onAddImage", file);
  preview.value = URL.createObjectURL(file);
};
const removeImage = () => {
  preview.value = "";
  emit("onRemoveImage");
};
onMounted(() => {
  preview.value = props.imageUrl;
});
</script>

<style>
</style>