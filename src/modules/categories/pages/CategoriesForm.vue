<template>
  <div>
    <div class="fv-row mb-7">
      <label class="form-check form-switch form-check-custom form-check-solid">
        <input
          class="form-check-input"
          v-model="form_state.status"
          type="checkbox"
          :checked="form_state.status"
          :disabled="store.forms.create_update_categories == 'see'"
        />
        <span
          class="form-check-label fw-semibold text-muted"
          for="core_modal_billing"
          >{{ form_state.status == "active" ? "Activo" : "Inactivo" }}</span
        >
      </label>
    </div>
    <div class="fv-row mb-7">
      <label class="required fs-6 fw-semibold mb-2">Nombre</label>

      <input
        type="text"
        class="form-control form-control-solid"
        v-model="form_state.name"
        placeholder="Nombre"
        :readonly="store.forms.create_update_categories == 'see'"
      />
      <ValidationFormMessages
        v-if="errors['name']"
        :validation="errors['name']"
        lang="es"
        field="name"
      />
    </div>
    <div class="fv-row mb-7">
      <div class="d-flex flex-column mb-7 fv-row">
        <label class="fs-6 fw-semibold mb-2">
          <span class="required">Tipo</span>
          <i
            class="fas fa-exclamation-circle ms-1 fs-7"
            data-bs-toggle="tooltip"
            title="Country of origination"
          ></i>
        </label>

        <select
          v-model="form_state.type"
          aria-label="Seleccione un tipo"
          data-control="select2"
          data-placeholder="Seleccione un tipo..."
          data-dropdown-parent="#core_modal"
          class="form-select form-select-solid fw-bold"
          :disabled="store.forms.create_update_categories == 'see'"
        >
          <option value="Producto">Producto</option>
          <option value="Servicio">Servicio</option>
        </select>
      </div>
      <ValidationFormMessages
        v-if="errors['type']"
        :validation="errors['type']"
        lang="es"
        field="type"
      />
    </div>
    <div class="fv-row mb-7">
      <label class="required fs-6 fw-semibold mb-2">Descripción</label>

      <textarea
        class="form-control form-control-solid"
        v-model="form_state.description"
        :readonly="store.forms.create_update_categories == 'see'"
        cols="30"
        rows="10"
      ></textarea>
      <ValidationFormMessages
        v-if="errors['description']"
        :validation="errors['description']"
        lang="es"
        field="description"
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
        v-if="store.forms.create_update_categories != 'see'"
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
import useCategoriesStore from "../stores/index.js";
import ValidationFormMessages from "@/components/validation-errors/ValidationFormMessages.vue";
import { required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
const swal = inject("$swal");
const store = useCategoriesStore();
let errors = reactive({});
const setErrors = (err) => {
  err.map((x) => {
    errors[x.$property] = x.$validator;
  });
  console.log(errors);
};

let form_state = reactive({
  name: "",
  type: "Producto",
  description: "",
  status: true,
});

const rules = {
  name: { required },
  type: { required },
  description: { required },
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
  let success =
    store.forms.create_update_categories == "create"
      ? store.createCategories(form_state)
      : store.updateCategories(
          form_state,
          store.items.categories.selected_item.id
        );
};

const setForm = (mode) => {
  //API WARNING
  //SELECTED ITEM COMES WITH API ATTRIBUTE NAMES
  form_state.name =
    mode == "clear" ? "" : store.items.categories.selected_item.name;
  form_state.type =
    mode == "clear"
      ? "Producto"
      : store.items.categories.selected_item.type_category;
  form_state.description =
    mode == "clear" ? "" : store.items.categories.selected_item.description;
  form_state.status =
    mode == "clear" ? "active" : store.items.categories.selected_item.status;
};

onMounted(() => {
  if (store.forms.create_update_categories != "create") setForm();
});
</script>

<script>
export default {
  name: "CategoriesFormComponent",
};
</script>
