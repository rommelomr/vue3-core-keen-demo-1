<template>
  <div>
    <div class="d-flex align-items-center">
      <!--begin::Icon-->
      <!--begin::Svg Icon | path: icons/duotune/general/gen014.svg-->
      <div
        class="symbol symbol-circle symbol-50px overflow-hidden me-3"
        style="margin-top: -25px"
        data-bs-toggle="tooltip"
      >
        <div
          v-if="(Math.floor(Math.random() * 100) * 3) % 2 == 0"
          class="symbol-label fs-3 bg-light-danger text-danger"
        >
          M
        </div>
        <img
          v-else
          src="https://picsum.photos/200"
          alt="Emma Smith"
          class="w-100"
        />
      </div>
      <!--end::Svg Icon-->
      <!--end::Icon-->
      <div class="mb-9">
        <!--begin::Event name-->
        <div class="d-flex align-items-center mb-2">
          <span class="fs-3 fw-bold me-3" data-kt-calendar="event_name"
            >Agustin Mendoza</span
          >
          <span class="badge badge-light-success" data-kt-calendar="all_day"
            >Cliente</span
          >
        </div>
        <!--end::Event name-->
        <!--begin::Event description-->
        <div class="fs-8" data-kt-calendar="event_description">
          Este agendamiento fué generado por el administrador.
        </div>
      </div>
    </div>
    <div class="d-flex align-items-center">
      <!--begin::Icon-->
      <!--begin::Svg Icon | path: icons/duotune/general/gen014.svg-->
      <div
        class="symbol symbol-circle symbol-50px overflow-hidden me-3"
        style="margin-top: -10px"
        data-bs-toggle="tooltip"
      >
        <div
          v-if="(Math.floor(Math.random() * 100) * 3) % 2 == 0"
          class="symbol-label fs-3 bg-light-danger text-danger"
        >
          M
        </div>
        <img
          v-else
          src="https://picsum.photos/200"
          alt="Emma Smith"
          class="w-100"
        />
      </div>
      <!--end::Svg Icon-->
      <!--end::Icon-->
      <div class="mb-9">
        <div class="d-flex align-items-center mb-2 mt-6">
          <span class="fs-3 fw-bold me-3" data-kt-calendar="event_name"
            >Alberto Montoya</span
          >
          <span class="badge badge-light-primary" data-kt-calendar="all_day"
            >Barbero</span
          >
        </div>
        <div class="fs-8" data-kt-calendar="event_description">
          {{ eventData.start }}
        </div>
        <!--end::Event description-->
      </div>
    </div>

    <div class="d-flex">
      <!--begin::Icon-->
      <!--begin::Svg Icon | path: icons/duotune/general/gen014.svg-->
      <i class="fs-2 me-5 bi bi-info-circle"></i>
      <!--end::Svg Icon-->
      <!--end::Icon-->
      <div class="mb-9">
        <!--begin::Event description-->
        <div class="fs-8" data-kt-calendar="event_description">
          Servicio: Sin iniciar
        </div>
        <!--end::Event description-->
      </div>
    </div>

    <div align="center">
      <button @click="emit('onEdit')" class="btn btn-primary btn-sm mx-2">
        Editar
      </button>
      <button @click="emit('onDelete')" class="btn btn-danger btn-sm">
        Eliminar
      </button>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  eventData: {
    type: Object,
  },
});

const emit = defineEmits(["onDelete", "onEdit"]);
</script>
