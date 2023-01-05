  <template>
  <div class="d-flex flex-column flex-root" id="kt_app_root">
    <!--begin::Authentication - Password reset -->
    <div class="d-flex flex-column flex-lg-row flex-column-fluid full-height">
      <!--begin::Aside-->
      <div
        class="
          d-flex
          flex-lg-row-fluid
          w-lg-50
          bgi-size-cover bgi-position-center
        "
        style="background-image: url(assets/media/misc/auth-bg.png)"
      >
        <!--begin::Content-->
        <div class="d-flex flex-column flex-center p-6 p-lg-10 w-100">
          <!--begin::Logo-->
          <a href="../../demo7/dist/index.html" class="mb-0 mb-lg-20">
            <img
              alt="Logo"
              src="/assets/media/logos/dark.png"
              class="h-40px h-lg-90px"
            />
          </a>
          <!--end::Logo-->
          <!--begin::Image-->
          <img
            class="
              d-none d-lg-block
              mx-auto
              w-300px w-lg-75 w-xl-500px
              mb-10 mb-lg-20
            "
            src="/assets/media/misc/auth-screens.png"
            alt=""
          />
          <!--end::Image-->
          <!--begin::Title-->
          <h1
            class="d-none d-lg-block text-white fs-2qx fw-bold text-center mb-7"
          >
            Sistema administrativo para barbería.
          </h1>
          <!--end::Title-->
          <!--begin::Text-->
          <div class="d-none d-lg-block text-white fs-base text-center">
            En este sistema podras administrar y organizar tus finanzas y
            servicios.
            <!-- In this kind of post,
            <a href="#" class="opacity-75-hover text-warning fw-semibold me-1"
              >the blogger</a
            >introduces a person they’ve interviewed <br />and provides some
            background information about
            <a href="#" class="opacity-75-hover text-warning fw-semibold me-1"
              >the interviewee</a
            >and their <br />work following this is a transcript of the
            interview. -->
          </div>
          <!--end::Text-->
        </div>
        <!--end::Content-->
      </div>
      <!--begin::Aside-->
      <!--begin::Body-->
      <div class="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10">
        <!--begin::Form-->
        <div class="d-flex flex-center flex-column flex-lg-row-fluid">
          <!--begin::Wrapper-->
          <div class="w-lg-500px p-10">
            <!--begin::Form-->
            <form
              class="form w-100"
              novalidate="novalidate"
              id="kt_password_reset_form"
              data-kt-redirect-url="../../demo7/dist/authentication/layouts/corporate/new-password.html"
              action="#"
            >
              <!--begin::Heading-->
              <div class="text-center mb-10">
                <!--begin::Title-->
                <h1 class="text-dark fw-bolder mb-3">
                  ¿Olvidaste tu contraseña?
                </h1>
                <!--end::Title-->
                <!--begin::Link-->
                <div class="text-gray-500 fw-semibold fs-6">
                  Ingresa el email de tu cuenta.
                </div>
                <!--end::Link-->
              </div>
              <!--begin::Heading-->
              <!--begin::Input group=-->
              <div class="fv-row mb-8">
                <!--begin::Email-->
                <input
                  type="text"
                  placeholder="Email"
                  v-model="form_state.email"
                  autocomplete="off"
                  class="form-control bg-transparent"
                />
                <!--end::Email-->
              </div>
              <!--begin::Actions-->
              <div class="d-flex flex-wrap justify-content-center pb-lg-0">
                <button
                  type="button"
                  class="btn btn-primary me-4"
                  @click="recoverPassword()"
                >
                  <!--begin::Indicator label-->
                  <span class="indicator-label">Enviar</span>
                  <!--end::Indicator label-->
                  <!--begin::Indicator progress-->
                  <span class="indicator-progress"
                    >Please wait...
                    <span
                      class="spinner-border spinner-border-sm align-middle ms-2"
                    ></span
                  ></span>
                  <!--end::Indicator progress-->
                </button>
                <a
                  href="#"
                  @click="router.push({ name: 'sign-in' })"
                  class="btn btn-light"
                  >Regresar</a
                >
              </div>
              <!--end::Actions-->
            </form>
            <!--end::Form-->
          </div>
          <!--end::Wrapper-->
        </div>
        <!--end::Form-->
        <!--begin::Footer-->
        <div class="d-flex flex-center flex-wrap px-5">
          <!--begin::Links-->
          <!-- <div class="d-flex fw-semibold text-primary fs-base">
            <a href="https://keenthemes.com" class="px-5" target="_blank"
              >Terms</a
            >
            <a href="https://devs.keenthemes.com" class="px-5" target="_blank"
              >Plans</a
            >
            <a
              href="https://themes.getbootstrap.com/product/keen-the-ultimate-bootstrap-admin-theme/"
              class="px-5"
              target="_blank"
              >Contact Us</a
            >
          </div> -->
          <!--end::Links-->
        </div>
        <!--end::Footer-->
      </div>
      <!--end::Body-->
    </div>
    <!--end::Authentication - Password reset-->
  </div>
</template>

<script setup>
import { reactive } from "vue-demi";
import { useRouter } from "vue-router";
import useLoginStore from "./store.js";
const store = useLoginStore();
const router = useRouter();
let form_state = reactive({
  email: "",
});

const recoverPassword = () => {
  store.recover_password(form_state);
};
</script>