<template>
  <div>
    <div class="fv-row mb-7">
      <label class="form-check form-switch form-check-custom form-check-solid">
        <input
          class="form-check-input"
          v-model="form_state.is_active"
          type="checkbox"
          :checked="form_state.is_active"
          :disabled="store.forms.create_update___name__(snakeCase) == 'see'"
        />
        <span
          class="form-check-label fw-semibold text-muted"
          for="core_modal_billing"
          >{{ form_state.is_active ? "Activo" : "Inactivo" }}</span
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
        :readonly="store.forms.create_update___name__(snakeCase) == 'see'"
      />
      <ValidationFormMessages
        v-if="errors['name']"
        :validation="errors['name']"
        lang="es"
        field="name"
      />
    </div>

    <div class="fv-row mb-7">
      <label class="required fs-6 fw-semibold mb-2">Teléfono</label>

      <input
        type="number"
        class="form-control form-control-solid"
        v-model="form_state.phone"
        placeholder="Teléfono"
        :readonly="store.forms.create_update___name__(snakeCase) == 'see'"
      />
      <ValidationFormMessages
        v-if="errors['phone']"
        :validation="errors['phone']"
        lang="es"
        field="phone"
      />
    </div>

    <div class="fv-row mb-7">
      <div class="d-flex flex-column mb-7 fv-row">
        <label class="fs-6 fw-semibold mb-2">
          <span class="required">Country</span>
          <i
            class="fas fa-exclamation-circle ms-1 fs-7"
            data-bs-toggle="tooltip"
            title="Country of origination"
          ></i>
        </label>

        <select
          v-model="form_state.country"
          aria-label="Select a Country"
          data-control="select2"
          data-placeholder="Select a Country..."
          data-dropdown-parent="#core_modal"
          class="form-select form-select-solid fw-bold"
          :disabled="store.forms.create_update___name__(snakeCase) == 'see'"
        >
          <option value="">Select a Country...</option>
          <option value="AF">Afghanistan</option>
          <option value="AX">Aland Islands</option>
          <option value="AL">Albania</option>
        </select>
      </div>
      <ValidationFormMessages
        v-if="errors['country']"
        :validation="errors['country']"
        lang="es"
        field="country"
      />
    </div>
    <div class="fv-row mb-7">
      <label class="required fs-6 fw-semibold mb-2">Descripción</label>

      <textarea
        :readonly="store.forms.create_update___name__(snakeCase) == 'see'"
        class="form-control form-control-solid"
        v-model="form_state.description"
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
        v-if="store.forms.create_update___name__(snakeCase) != 'see'"
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
import use__name__(pascalCase)Store from "../stores/index.js";
import ValidationFormMessages from "@/components/validation-errors/ValidationFormMessages.vue";
import { required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
const swal = inject("$swal");
const store = use__name__(pascalCase)Store();
let errors = reactive({});
const setErrors = (err) => {
  err.map((x) => {
    errors[x.$property] = x.$validator;
  });
  console.log(errors);
};

let form_state = reactive({
  name: "",
  phone: "",
  country: "",
  description: "",
  is_active: true,
});

const rules = {
  name: { required },
  phone: { required },
  country: { required },
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
  store.forms.create_update___name__(snakeCase) == "create"
    ? store.create__name__(pascalCase)(form_state)
    : store.update__name__(pascalCase)(form_state, store.items.__name__(snakeCase).selected_item.id);
};

const setForm = () => {
  //API WARNING
  //SELECTED ITEM COMES WITH API ATTRIBUTE NAMES
  form_state.name = store.items.__name__(snakeCase).selected_item.name;
  form_state.is_active = store.items.__name__(snakeCase).selected_item.is_active;
};

onMounted(() => {
  if (store.forms.create_update___name__(snakeCase) != "create") setForm();
});
</script>

<script>
export default {
  name: "__name__PascalCase__FormComponent",
};
</script>
