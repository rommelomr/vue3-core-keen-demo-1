<template>
  <div>
    <!--begin::Wrapper-->
    <div class="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
      <!--begin::Wrapper container-->
      <div
        class="app-container container-xxl d-flex flex-row flex-column-fluid"
      >
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
                    Perfil
                  </h1>
                  <!--end::Title-->
                  <!--begin::Breadcrumb-->
                  <ul
                    class="
                      breadcrumb breadcrumb-separatorless
                      fw-semibold
                      fs-7
                      my-0
                      pt-1
                    "
                  >
                    <!--begin::Item-->
                    <li class="breadcrumb-item text-muted">
                      <a
                        href="../../demo7/dist/index.html"
                        class="text-muted text-hover-primary"
                        >Perfil</a
                      >
                    </li>
                    <!--end::Item-->

                    <!--end::Item-->
                  </ul>
                  <!--end::Breadcrumb-->
                </div>
                <!--end::Page title-->
                <!--begin::Actions-->

                <!--end::Actions-->
              </div>
              <!--end::Toolbar wrapper-->
            </div>
            <!--end::Toolbar-->
            <!--begin::Content-->
            <div id="kt_app_content" class="app-content flex-column-fluid">
              <div class="card mb-5 mb-xl-10">
                <!--begin::Card header-->
                <div
                  class="card-header border-0 cursor-pointer"
                  role="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#kt_account_profile_details"
                  aria-expanded="true"
                  aria-controls="kt_account_profile_details"
                >
                  <!--begin::Card title-->
                  <div class="card-title m-0">
                    <h3 class="fw-bold m-0">Dealles del perfil</h3>
                  </div>
                  <!--end::Card title-->
                </div>
                <!--begin::Card header-->
                <!--begin::Content-->
                <div
                  id="kt_account_settings_profile_details"
                  class="collapse show"
                >
                  <!--begin::Form-->
                  <div
                    id="kt_account_profile_details_form"
                    class="form fv-plugins-bootstrap5 fv-plugins-framework"
                    novalidate="novalidate"
                  >
                    <!--begin::Card body-->
                    <div class="card-body border-top p-9">
                      <!--begin::Input group-->
                      <div class="row mb-6">
                        <!--begin::Label-->
                        <label class="col-lg-4 col-form-label fw-semibold fs-6"
                          >Avatar</label
                        >
                        <!--end::Label-->
                        <!--begin::Col-->
                        <div class="col-lg-8">
                          <ImagePicker
                            @onAddImage="setImage"
                            @onRemoveImage="removeImage"
                            :image-url="photo"
                            :key="photo_rerender"
                          />
                        </div>
                        <!--end::Col-->
                      </div>
                      <!--end::Input group-->
                      <!--begin::Input group-->
                      <div class="row mb-6">
                        <!--begin::Label-->
                        <label
                          class="
                            col-lg-4 col-form-label
                            required
                            fw-semibold
                            fs-6
                          "
                          >Nombre completo</label
                        >
                        <!--end::Label-->
                        <!--begin::Col-->
                        <div class="col-lg-8">
                          <!--begin::Row-->
                          <div class="row">
                            <!--begin::Col-->
                            <div
                              class="col-lg-6 fv-row fv-plugins-icon-container"
                            >
                              <input
                                type="text"
                                class="
                                  form-control
                                  form-control-lg
                                  form-control-solid
                                  mb-3 mb-lg-0
                                "
                                placeholder="Nombre"
                                v-model="user_info.name"
                              />
                              <div
                                class="
                                  fv-plugins-message-container
                                  invalid-feedback
                                "
                              ></div>
                            </div>
                            <!--end::Col-->
                            <!--begin::Col-->
                            <div
                              class="col-lg-6 fv-row fv-plugins-icon-container"
                            >
                              <input
                                type="text"
                                class="
                                  form-control
                                  form-control-lg
                                  form-control-solid
                                "
                                placeholder="Apellido"
                                v-model="user_info.last_name"
                              />
                              <div
                                class="
                                  fv-plugins-message-container
                                  invalid-feedback
                                "
                              ></div>
                            </div>
                            <!--end::Col-->
                          </div>
                          <!--end::Row-->
                        </div>
                        <!--end::Col-->
                      </div>
                      <!--end::Input group-->
                      <!--begin::Input group-->
                      <div class="row mb-6">
                        <!--begin::Label-->
                        <label
                          class="
                            col-lg-4 col-form-label
                            required
                            fw-semibold
                            fs-6
                          "
                          >Empresa</label
                        >
                        <!--end::Label-->
                        <!--begin::Col-->
                        <div class="col-lg-8 fv-row fv-plugins-icon-container">
                          <input
                            type="text"
                            class="
                              form-control form-control-lg form-control-solid
                            "
                            placeholder="Empresa"
                            v-model="user_info.company"
                          />
                          <div
                            class="
                              fv-plugins-message-container
                              invalid-feedback
                            "
                          ></div>
                        </div>
                        <!--end::Col-->
                      </div>
                      <!--end::Input group-->
                      <!--begin::Input group-->
                      <div class="row mb-6">
                        <!--begin::Label-->
                        <label class="col-lg-4 col-form-label fw-semibold fs-6">
                          <span class="required">Teléfono</span>
                          <i
                            class="fas fa-exclamation-circle ms-1 fs-7"
                            data-bs-toggle="tooltip"
                            aria-label="Phone number must be active"
                            data-bs-original-title="Phone number must be active"
                            data-kt-initialized="1"
                          ></i>
                        </label>
                        <!--end::Label-->
                        <!--begin::Col-->
                        <div class="col-lg-8 fv-row fv-plugins-icon-container">
                          <input
                            type="tel"
                            class="
                              form-control form-control-lg form-control-solid
                            "
                            placeholder="Teléfono"
                            v-model="user_info.phone"
                          />
                          <div
                            class="
                              fv-plugins-message-container
                              invalid-feedback
                            "
                          ></div>
                        </div>
                        <!--end::Col-->
                      </div>
                      <!--end::Input group-->

                      <!--begin::Input group-->
                      <div class="row mb-6">
                        <!--begin::Label-->
                        <label class="col-lg-4 col-form-label fw-semibold fs-6">
                          <span class="required">Pais</span>
                          <i
                            class="fas fa-exclamation-circle ms-1 fs-7"
                            data-bs-toggle="tooltip"
                            aria-label="Country of origination"
                            data-bs-original-title="Country of origination"
                            data-kt-initialized="1"
                          ></i>
                        </label>
                        <!--end::Label-->
                        <!--begin::Col-->
                        <div class="col-lg-8 fv-row">
                          <select
                            aria-label="Seleccione una categoría"
                            data-placeholder="Seleccione una categoría..."
                            class="form-select form-select-solid fw-bold"
                            v-model="user_info.country"
                          >
                            <option value="a">Seleccione un pais...</option>
                            <option value="b">pais 1</option>
                            <option value="c">pais 2</option>
                            <option value="d">pais 3</option>
                          </select>
                        </div>
                        <!--end::Col-->
                      </div>
                      <!--end::Input group-->
                    </div>
                    <!--end::Card body-->
                    <!--begin::Actions-->
                    <div
                      class="card-footer d-flex justify-content-end py-6 px-9"
                    >
                      <button
                        type="submit"
                        class="btn btn-primary"
                        id="kt_account_profile_details_submit"
                        @click="updateProfile"
                      >
                        Guardar cambios
                      </button>
                    </div>
                    <!--end::Actions-->
                    <input type="hidden" />
                  </div>
                  <!--end::Form-->
                </div>
                <!--end::Content-->
              </div>

              <div class="card mb-5 mb-xl-10">
                <!--begin::Card header-->
                <div
                  class="card-header border-0 cursor-pointer"
                  role="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#kt_account_signin_method"
                >
                  <div class="card-title m-0">
                    <h3 class="fw-bold m-0">Métodos de inicio de sesión</h3>
                  </div>
                </div>
                <!--end::Card header-->
                <!--begin::Content-->
                <div
                  id="kt_account_settings_signin_method"
                  class="collapse show"
                >
                  <!--begin::Card body-->
                  <div class="card-body border-top p-9">
                    <!--begin::Email Address-->
                    <div v-if="update_email_form_displayed">
                      <div class="row mb-6">
                        <div class="col-lg-6 mb-4 mb-lg-0">
                          <div class="fv-row mb-0 fv-plugins-icon-container">
                            <label
                              for="emailaddress"
                              class="form-label fs-6 fw-bold mb-3"
                              >Ingrese el nuevo email</label
                            >
                            <input
                              type="email"
                              class="
                                form-control form-control-lg form-control-solid
                              "
                              placeholder="Email"
                              v-model="update_email_form.email"
                            />
                            <div
                              class="
                                fv-plugins-message-container
                                invalid-feedback
                              "
                            ></div>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="fv-row mb-0 fv-plugins-icon-container">
                            <label
                              for="confirmemailpassword"
                              class="form-label fs-6 fw-bold mb-3"
                              >Confirmar contraseña</label
                            >
                            <input
                              type="password"
                              class="
                                form-control form-control-lg form-control-solid
                              "
                              v-model="update_email_form.password"
                              id="confirmemailpassword"
                            />
                            <div
                              class="
                                fv-plugins-message-container
                                invalid-feedback
                              "
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex">
                        <button
                          id="kt_signin_submit"
                          type="button"
                          class="btn btn-primary me-2 px-6"
                          @click="updateEmail"
                        >
                          Guardar
                        </button>
                        <button
                          @click="update_email_form_displayed = false"
                          id="kt_signin_cancel"
                          type="button"
                          class="
                            btn btn-color-gray-400 btn-active-light-primary
                            px-6
                          "
                        >
                          Cancelar
                        </button>
                      </div>
                    </div>
                    <div v-else class="d-flex flex-wrap align-items-center">
                      <!--begin::Label-->
                      <div id="kt_signin_email">
                        <div class="fs-6 fw-bold mb-1">Email</div>
                        <div class="fw-semibold text-gray-600">
                          {{ auth.user.email }}
                        </div>
                      </div>
                      <!--end::Label-->
                      <!--begin::Edit-->

                      <!--end::Edit-->
                      <!--begin::Action-->
                      <div id="kt_signin_email_button" class="ms-auto">
                        <button
                          @click="update_email_form_displayed = true"
                          class="btn btn-light btn-active-light-primary"
                        >
                          Cambiar email
                        </button>
                      </div>
                      <!--end::Action-->
                    </div>

                    <!--end::Email Address-->
                    <!--begin::Separator-->
                    <div class="separator separator-dashed my-6"></div>
                    <!--end::Separator-->
                    <!--begin::Password-->
                    <div v-if="reset_password_form_is_displayed">
                      <div class="row mb-1">
                        <div class="col-lg-6">
                          <div class="fv-row mb-0 fv-plugins-icon-container">
                            <label
                              for="currentpassword"
                              class="form-label fs-6 fw-bold mb-3"
                              >Contraseña actual</label
                            >
                            <input
                              type="password"
                              class="
                                form-control form-control-lg form-control-solid
                              "
                              v-model="reset_password_form.current"
                            />
                            <div
                              class="
                                fv-plugins-message-container
                                invalid-feedback
                              "
                            ></div>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="fv-row mb-0 fv-plugins-icon-container">
                            <label
                              for="newpassword"
                              class="form-label fs-6 fw-bold mb-3"
                              >Nueva contraseña</label
                            >
                            <input
                              type="password"
                              class="
                                form-control form-control-lg form-control-solid
                              "
                              v-model="reset_password_form.password"
                            />
                            <div
                              class="
                                fv-plugins-message-container
                                invalid-feedback
                              "
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div class="form-text mb-5">
                        La contraseña debe tener al menos 8 caracteres y
                        contener símbolos
                      </div>
                      <div class="d-flex">
                        <button
                          id="kt_password_submit"
                          type="button"
                          class="btn btn-primary me-2 px-6"
                          @click="updatePassword"
                        >
                          Guardar
                        </button>
                        <button
                          @click="reset_password_form_is_displayed = false"
                          id="kt_password_cancel"
                          type="button"
                          class="
                            btn btn-color-gray-400 btn-active-light-primary
                            px-6
                          "
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                    <div
                      v-else
                      class="d-flex flex-wrap align-items-center mb-10"
                    >
                      <!--begin::Label-->
                      <div id="kt_signin_password">
                        <div class="fs-6 fw-bold mb-1">Contraseña</div>
                        <div class="fw-semibold text-gray-600">
                          ************
                        </div>
                      </div>
                      <!--end::Label-->
                      <!--begin::Action-->
                      <div id="kt_signin_password_button" class="ms-auto">
                        <button
                          @click="reset_password_form_is_displayed = true"
                          class="btn btn-light btn-active-light-primary"
                        >
                          Cambiar contraseña
                        </button>
                      </div>
                      <!--end::Action-->
                    </div>

                    <!--end::Password-->
                    <!--begin::Notice-->
                    <div
                      class="
                        mt-4
                        notice
                        d-flex
                        bg-light-primary
                        rounded
                        border-primary border border-dashed
                        p-6
                      "
                    >
                      <!--begin::Icon-->
                      <!--begin::Svg Icon | path: icons/duotune/general/gen048.svg-->
                      <span class="svg-icon svg-icon-2tx svg-icon-primary me-4">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.3"
                            d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M10.5606 11.3042L9.57283 10.3018C9.28174 10.0065 8.80522 10.0065 8.51412 10.3018C8.22897 10.5912 8.22897 11.0559 8.51412 11.3452L10.4182 13.2773C10.8099 13.6747 11.451 13.6747 11.8427 13.2773L15.4859 9.58051C15.771 9.29117 15.771 8.82648 15.4859 8.53714C15.1948 8.24176 14.7183 8.24176 14.4272 8.53714L11.7002 11.3042C11.3869 11.6221 10.874 11.6221 10.5606 11.3042Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <!--end::Svg Icon-->
                      <!--end::Icon-->
                      <!--begin::Wrapper-->
                      <div
                        class="
                          d-flex
                          flex-stack flex-grow-1 flex-wrap flex-md-nowrap
                        "
                      >
                        <!--begin::Content-->
                        <div class="mb-3 mb-md-0 fw-semibold">
                          <h4 class="text-gray-900 fw-bold">
                            Asegura tu cuenta
                          </h4>
                          <div class="fs-6 text-gray-700 pe-7">
                            La autenticación de dos factores agrega una capa
                            adicional de seguridad a su cuenta. Para iniciar
                            sesión, además deberá proporcionar un código de 6
                            dígitos
                          </div>
                        </div>
                        <!--end::Content-->
                        <!--begin::Action-->
                        <a
                          class="
                            btn btn-primary
                            px-6
                            align-self-center
                            text-nowrap
                            clickable
                          "
                          data-bs-toggle="modal"
                          data-bs-target="#kt_modal_two_factor_authentication"
                          @click="changeAuthorizationTwoFactor"
                          >{{ twofa ? "Inhabilitar" : "habilitar" }}</a
                        >
                        <!--end::Action-->
                      </div>
                      <!--end::Wrapper-->
                    </div>
                    <!--end::Notice-->
                  </div>
                  <!--end::Card body-->
                </div>
                <!--end::Content-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue-demi";
import useAuthStore from "./store.js";
import LoginServices from "./services.js";
let auth = useAuthStore();
const init = async () => {
  let response = await LoginServices.getProfileInfo();
  console.log(response);

  user_info.name = response.data.data.name;
  user_info.last_name = response.data.data.lastname;
  user_info.company = response.data.data.company;
  user_info.phone = response.data.data.phone;
  user_info.country = response.data.data.country;

  photo.value = response.data.data.photo;
  photo_rerender.value++;

  twofa.value = response.data.data.twofa != "not";
};

const setImage = (file) => {
  user_info.photo = file;
  console.log(user_info);
};
const removeImage = () => {
  user_info.photo = "";
};

let photo = ref("");
let photo_rerender = ref(0);
let user_info = reactive({
  name: "",
  last_name: "",
  company: "",
  phone: "",
  country: "",
  photo: {},
});

let update_email_form_displayed = ref(false);
let update_email_form = reactive({
  email: "",
  password: "",
});

let reset_password_form_is_displayed = ref(false);
let reset_password_form = reactive({
  current: "",
  password: "",
});

let twofa = ref(false);

//begin: api methods
const updateProfile = async () => {
  auth.updateProfile(user_info);
};

const updateEmail = async () => {
  if (await auth.updateEmail(update_email_form)) {
    update_email_form_displayed.value = false;
  }
};
const updatePassword = async () => {
  if (await auth.updatePassword(reset_password_form)) {
    reset_password_form_is_displayed.value = false;
  }
};
const changeAuthorizationTwoFactor = async () => {
  if (await auth.changeAuthorizationTwoFactor(twofa.value ? "not" : "yes")) {
    twofa.value = !twofa.value;
  }
};

//end: api methods
onMounted(() => {
  init();
});
</script>

<style>
</style>