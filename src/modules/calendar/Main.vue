<template>
  <div class="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
    <!--begin::Wrapper container-->
    <div class="app-container container-xxl d-flex flex-row flex-column-fluid">
      <!--begin::Main-->
      <div class="app-main flex-column flex-row-fluid" id="kt_app_main">
        <!--begin::Content wrapper-->
        <div class="d-flex flex-column flex-column-fluid">
          <!--begin::Toolbar-->
          <div
            id="kt_app_toolbar"
            class="
              app-toolbar
              align-items-center
              justify-content-between
              py-2 py-lg-6
            "
          >
            <!--begin::Toolbar wrapper-->
            <div
              class="d-flex flex-grow-1 flex-stack flex-wrap gap-2 mb-n10"
              id="kt_toolbar"
            >
              <!--begin::Page title-->
              <div
                class="
                  page-title
                  d-flex
                  flex-column
                  justify-content-center
                  me-3
                "
              >
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
                  Calendario
                </h1>
                <!--end::Title-->
              </div>
              <!--end::Page title-->
            </div>
            <!--end::Toolbar wrapper-->
          </div>
          <!--end::Toolbar-->
          <!--begin::Content-->
          <div id="kt_app_content" class="app-content flex-column-fluid">
            <div class="card">
              <div class="card-body">
                <Calendar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Calendar from "@/components/calendar/Calendar.vue";
</script>

<style>
</style>