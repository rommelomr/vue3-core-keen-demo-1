<template>
  <div
    id="kt_app_toolbar"
    class="app-toolbar align-items-center justify-content-between py-2 py-lg-6"
  >
    <!--begin::Toolbar wrapper-->
    <div
      class="d-flex flex-grow-1 flex-stack flex-wrap gap-2 mb-n10"
      id="kt_toolbar"
    >
      <!--begin::Page title-->
      <div class="page-title d-flex flex-column justify-content-center me-3">
        <!--begin::Title-->
        <h1
          class="
            page-heading
            d-flex
            text-dark
            fw-bold
            fs-3
            flex-column
            justify-content-center
            me-3
            my-0
          "
        >
          Detalles del cliente
        </h1>
        <!--end::Title-->
        <!--begin::Breadcrumb-->
        <ul
          class="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1"
        >
          <!--begin::Item-->
          <li class="breadcrumb-item text-muted">
            <a
              class="text-muted text-hover-primary clickable"
              @click="goToPage('#list')"
              >Clientes</a
            >
          </li>
          <!--end::Item-->
          <!--begin::Item-->
          <li class="breadcrumb-item">
            <span class="bullet bg-gray-400 w-5px h-2px"></span>
          </li>
          <!--end::Item-->
          <!--begin::Item-->
          <li class="breadcrumb-item text-dark">Detalles de cliente</li>
          <!--end::Item-->
        </ul>
        <!--end::Breadcrumb-->
      </div>
      <!--end::Page title-->
    </div>
    <!--end::Toolbar wrapper-->
  </div>
  <!--end::Toolbar-->
  <div id="kt_app_content" class="app-content flex-column-fluid">
    <!--begin::Card-->
    <div class="card mb-5 mb-xl-8">
      <!--begin::Card body-->
      <div class="card-body pt-15">
        <button @click="goToPage('#list')">go back</button>
        <pre>{{ store }}</pre>
      </div>
    </div>
  </div>
</template>
<script setup>
import use__name__(pascalCase)Store from "../stores/index.js";
const store = use__name__(pascalCase)Store();
const emit = defineEmits(["onDisplayPage"]);
const goToPage = (page) => {
  emit("onDisplayPage", {
    page_to_show: page,
  });
};
</script>
<script>
export default {
  name: "SecondPage",
};
</script>
