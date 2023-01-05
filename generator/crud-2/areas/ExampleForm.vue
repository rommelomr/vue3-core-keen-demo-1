<template>
  <div>
    <!-- <div class="fv-row mb-7">
      <label class="form-check form-switch form-check-custom form-check-solid">
        <input
          class="form-check-input"
          v-model="form_state.is_active"
          type="checkbox"
          :checked="form_state.is_active"
          :disabled="store.forms.example_form == 'see'"
        />
        <span
          class="form-check-label fw-semibold text-muted"
          for="core_modal_billing"
          >{{ form_state.is_active ? "Activo" : "Inactivo" }}</span
        >
      </label>
    </div> -->
    <div class="fv-row mb-7">
      <label class="required fs-6 fw-semibold mb-2">Nombre</label>

      <input
        type="text"
        class="form-control form-control-solid"
        v-model="form_state.name"
        placeholder="Nombre"
        :readonly="store.forms.example_form == 'see'"
      />
      <ValidationFormMessages
        v-if="errors['name']"
        :validation="errors['name']"
        lang="es"
        field="name"
      />
    </div>

    <div align="right">
      <button
        type="button"
        class="btn btn-secondary"
        data-bs-dismiss="modal"
        @click="store.closeModal()"
      >
        Cerrar
      </button>
      <button
        v-if="store.forms.example_form != 'see'"
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
import { inject, onMounted, reactive } from "vue-demi";
import useClientsStore from "../stores/index.js";
import ValidationFormMessages from "@/components/validation-errors/ValidationFormMessages.vue";
import { required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
const swal = inject("$swal");
const store = useClientsStore();
let errors = reactive({});
const setErrors = (err) => {
  err.map((x) => {
    errors[x.$property] = x.$validator;
  });
  console.log(errors);
};

let form_state = reactive({
  name: "",
  is_active: true,
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
  store.forms.example_form == "create"
    ? store.createExample(form_state)
    : store.updateExample(form_state, store.selected_item.id);
};

const setForm = () => {
  //API WARNING
  //SELECTED ITEM COMES WITH API ATTRIBUTE NAMES
  // form_state.name = store.selected_item.name;
  // form_state.last_name = store.selected_item.last_name;
  // form_state.email = store.selected_item.email;
  // form_state.phone = store.selected_item.phone;
  // form_state.whatsapp = store.selected_item.whatsapp;
  // form_state.is_active = store.selected_item.is_active;
};

onMounted(() => {
  if (store.forms.example_form != "create") setForm();
});
</script>

<script>
export default {
  name: "ExampleFormComponent",
};
</script>
