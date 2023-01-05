<template>
  <div>
    <div class="fv-row mb-7">
      <label class="fs-6 fw-semibold mb-2">
        <span class="required">Servicio</span>
        <i
          class="fas fa-exclamation-circle ms-1 fs-7"
          data-bs-toggle="tooltip"
          title="Country of origination"
        ></i>
      </label>
      <select
        v-model="form_state.barber"
        aria-label="Seleccione un servicio"
        data-control="select2"
        data-placeholder="Seleccione un servicio..."
        data-dropdown-parent="#core_modal"
        class="form-select form-select-solid fw-bold"
      >
        <option value="">Seleccione un servicio...</option>
        <option value="">Servicio 1</option>
        <option value="">Servicio 2</option>
        <option value="">Servicio 3</option>
      </select>
      <ValidationFormMessages
        v-if="errors['service']"
        :validation="errors['service']"
        lang="es"
        field="service"
      />
    </div>
    <div v-if="client == null" class="fv-row mb-7">
      <label class="fs-6 fw-semibold mb-2">
        <span class="required">Cliente</span>
        <i
          class="fas fa-exclamation-circle ms-1 fs-7"
          data-bs-toggle="tooltip"
          title="Country of origination"
        ></i>
      </label>
      <select
        v-model="form_state.barber"
        aria-label="Seleccione un cliente"
        data-control="select2"
        data-placeholder="Seleccione un cliente..."
        data-dropdown-parent="#core_modal"
        class="form-select form-select-solid fw-bold"
      >
        <option value="">Seleccione un cliente...</option>
        <option value="">Cliente 1</option>
        <option value="">Cliente 2</option>
        <option value="">Cliente 3</option>
      </select>
      <ValidationFormMessages
        v-if="errors['client']"
        :validation="errors['client']"
        lang="es"
        field="client"
      />
    </div>

    <div v-if="barber == null" class="fv-row mb-7">
      <label class="fs-6 fw-semibold mb-2">
        <span class="required">Barbero</span>
        <i
          class="fas fa-exclamation-circle ms-1 fs-7"
          data-bs-toggle="tooltip"
          title="Country of origination"
        ></i>
      </label>

      <select
        v-model="form_state.barber"
        aria-label="Seleccione un barbero"
        data-control="select2"
        data-placeholder="Seleccione un barbero..."
        data-dropdown-parent="#core_modal"
        class="form-select form-select-solid fw-bold"
      >
        <option value="">Seleccione un barbero...</option>
        <option value="">Barbero 1</option>
        <option value="">Barbero 2</option>
        <option value="">Barbero 3</option>
      </select>
      <ValidationFormMessages
        v-if="errors['barber']"
        :validation="errors['barber']"
        lang="es"
        field="barber"
      />
    </div>
    <div class="fv-row mb-7">
      <label class="required fs-6 fw-semibold mb-2">Hora</label>

      <input
        type="time"
        class="form-control form-control-solid"
        v-model="form_state.hour"
        placeholder="Nombre"
        :readonly="false"
      />
      <ValidationFormMessages
        v-if="errors['hour']"
        :validation="errors['hour']"
        lang="es"
        field="hour"
      />
    </div>

    <div align="right">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
        Cerrar
      </button>
      <button
        v-if="formMode != 'see'"
        @click="handleSubmit()"
        type="button"
        class="btn btn-primary mx-4"
      >
        Guardar
      </button>
    </div>
  </div>
</template>
<script setup>
import { inject, onMounted, reactive, ref } from "vue-demi";
import ValidationFormMessages from "@/components/validation-errors/ValidationFormMessages.vue";
import { required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

const props = defineProps({
  eventData: {
    type: Object,
  },
  formMode: {
    type: String,
  },
  client: {
    type: Object,
    default: null,
  },
  barber: {
    type: Object,
    default: null,
  },
});

const swal = inject("$swal");

let errors = reactive({});
const setErrors = (err) => {
  err.map((x) => {
    errors[x.$property] = x.$validator;
  });
  console.log(errors);
};

let form_state = reactive({
  service: "",
  barber: "",
  hour: "",
  start: "",
  end: "",
});

const rules = {
  name: { required },
};

const handleSubmit = async () => {
  let v$ = useVuelidate(rules, form_state, { $autoDirty: true });
  await v$.value.$validate();
  if (v$.value.$invalid) {
    setErrors(v$.value.$errors);
    swal.fire({
      title: "",
      text: "El formulario no está llenado correctamente. Por favor corríjalo.",
      icon: "warning",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Ok",
    });

    return;
  }
  props.formMode == "create"
    ? createEvent(form_state)
    : updateEvent(form_state, props.eventData.id);
  form_state.name = "";
};
let event_id = ref("");
const emit = defineEmits(["onSubmit"]);
const createEvent = () => {
  emit("onSubmit", {
    data: form_state,
  });
};
const updateEvent = () => {
  emit("onSubmit", {
    id: event_id.value,
    data: form_state,
  });
};

const setForm = () => {
  event_id.value = props.eventData.id;
  form_state.event = props.eventData.event;
  form_state.barber = props.eventData.barber;
  form_state.hour = props.eventData.hour;
  form_state.start = props.eventData.start;
  form_state.end = props.eventData.end;
};
let modal = reactive({});
onMounted(() => {
  if (props.form_mode != "create") setForm();
});
</script>

<script>
export default {
  name: "CreateEventFormComponent",
};
</script>
