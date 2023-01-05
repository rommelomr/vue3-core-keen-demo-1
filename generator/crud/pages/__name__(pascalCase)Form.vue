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
      <label class="fs-6 fw-semibold mb-2">
        <span class="required">Email</span>
        <i
          class="fas fa-exclamation-circle ms-1 fs-7"
          data-bs-toggle="tooltip"
          title="Email address must be active"
        ></i>
      </label>

      <input
        type="email"
        class="form-control form-control-solid"
        placeholder=""
        name="email"
        value="sean@dellito.com"
      />
    </div>

    <div class="fv-row mb-15">
      <label class="fs-6 fw-semibold mb-2">Description</label>

      <input
        type="text"
        class="form-control form-control-solid"
        placeholder=""
        name="description"
      />
    </div>

    <div
      class="fw-bold fs-3 rotate collapsible mb-7"
      data-bs-toggle="collapse"
      href="#core_modal_billing_info"
      role="button"
      aria-expanded="false"
      aria-controls="kt_customer_view_details"
    >
      Shipping Information
      <span class="ms-2 rotate-180">
        <span class="svg-icon svg-icon-3">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </span>
    </div>

    <div id="core_modal_billing_info" class="collapse show">
      <div class="d-flex flex-column mb-7 fv-row">
        <label class="required fs-6 fw-semibold mb-2">Address Line 1</label>

        <input
          class="form-control form-control-solid"
          placeholder=""
          name="address1"
          value="101, Collins Street"
        />
      </div>

      <div class="d-flex flex-column mb-7 fv-row">
        <label class="fs-6 fw-semibold mb-2">Address Line 2</label>

        <input
          class="form-control form-control-solid"
          placeholder=""
          name="address2"
          value=""
        />
      </div>

      <div class="d-flex flex-column mb-7 fv-row">
        <label class="required fs-6 fw-semibold mb-2">Town</label>

        <input
          class="form-control form-control-solid"
          placeholder=""
          name="city"
          value="Melbourne"
        />
      </div>

      <div class="row g-9 mb-7">
        <div class="col-md-6 fv-row">
          <label class="required fs-6 fw-semibold mb-2">State / Province</label>

          <input
            class="form-control form-control-solid"
            placeholder=""
            name="state"
            value="Victoria"
          />
        </div>

        <div class="col-md-6 fv-row">
          <label class="required fs-6 fw-semibold mb-2">Post Code</label>

          <input
            class="form-control form-control-solid"
            placeholder=""
            name="postcode"
            value="3000"
          />
        </div>
      </div>

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
          name="country"
          aria-label="Select a Country"
          data-control="select2"
          data-placeholder="Select a Country..."
          data-dropdown-parent="#core_modal"
          class="form-select form-select-solid fw-bold"
        >
          <option value="">Select a Country...</option>
          <option value="AF">Afghanistan</option>
          <option value="AX">Aland Islands</option>
          <option value="AL">Albania</option>
        </select>
      </div>

      <div class="fv-row mb-7">
        <div class="d-flex flex-stack">
          <div class="me-5">
            <label class="fs-6 fw-semibold">Use as a billing adderess?</label>

            <div class="fs-7 fw-semibold text-muted">
              If you need more info, please check budget planning
            </div>
          </div>
        </div>
      </div>
    </div>
    <div align="right">
      <button
        type="button"
        class="btn btn-secondary"
        data-bs-dismiss="modal"
        @click="closeModal()"
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
  store.forms.create_update___name__(snakeCase) == "create"
    ? store.create__name__(pascalCase)(form_state)
    : store.update__name__(pascalCase)(form_state, store.items.__name__(snakeCase).selected_item.id);
};

const setForm = () => {
  form_state.name = store.items.__name__(snakeCase).selected_item.name;
  form_state.is_active = store.items.__name__(snakeCase).selected_item.is_active;
};
const closeModal = () => {
  store.setModal("");
  store.setModalTitle("");
  store.setFormMode("create_update___name__(snakeCase)", "");
};
onMounted(() => {
  if (store.forms.create_update___name__(snakeCase) != "create") setForm();
});
</script>

<script>
export default {
  name: "CreateUpdate",
};
</script>
