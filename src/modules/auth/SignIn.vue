<template>
  <div class="d-flex flex-column flex-root" id="kt_app_root">
    <!--begin::Authentication - Sign-in -->
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

            <!--begin::Heading-->
            <div class="text-center mb-11">
              <!--begin::Title-->
              <h1 class="text-dark fw-bolder mb-3">Iniciar sesión</h1>
              <!--end::Title-->
              <!--begin::Subtitle-->
              <!-- <div class="text-gray-500 fw-semibold fs-6">
                  Your Social Campaigns
                </div> -->
              <!--end::Subtitle=-->
            </div>
            <!--begin::Heading-->
            <!--begin::Login options-->
            <!-- <div class="row g-3 mb-9">
                
                <div class="col-md-6">
 
                  <a
                    href="#"
                    class="
                      btn
                      btn-flex
                      btn-outline
                      btn-text-gray-700
                      btn-active-color-primary
                      bg-state-light
                      flex-center
                      text-nowrap
                      w-100
                    "
                  >
                    <img
                      alt="Logo"
                      src="/assets/media/svg/brand-logos/google-icon.svg"
                      class="h-15px me-3"
                    />Sign in with Google</a
                  >
                </div>
                <div class="col-md-6">
                  <a
                    href="#"
                    class="
                      btn
                      btn-flex
                      btn-outline
                      btn-text-gray-700
                      btn-active-color-primary
                      bg-state-light
                      flex-center
                      text-nowrap
                      w-100
                    "
                  >
                    <img
                      alt="Logo"
                      src="/assets/media/svg/brand-logos/apple-black.svg"
                      class="theme-light-show h-15px me-3"
                    />
                    <img
                      alt="Logo"
                      src="/assets/media/svg/brand-logos/apple-black-dark.svg"
                      class="theme-dark-show h-15px me-3"
                    />Sign in with Apple</a
                  >
                </div>
              </div>
              <div class="separator separator-content my-14">
                <span class="w-125px text-gray-500 fw-semibold fs-7"
                  >Or with email</span
                >
              </div> -->
            <div class="fv-row mb-8">
              <input
                type="text"
                placeholder="Email"
                v-model="form_state.email"
                autocomplete="off"
                class="form-control bg-transparent"
              />
              <!--end::Email-->
            </div>
            <!--end::Input group=-->
            <div class="fv-row mb-3">
              <!--begin::Password-->
              <input
                type="password"
                placeholder="Password"
                v-model="form_state.password"
                autocomplete="off"
                class="form-control bg-transparent"
                @keyup.enter="attempLogin"
              />
              <!--end::Password-->
            </div>
            <!--end::Input group=-->
            <!--begin::Wrapper-->
            <div
              class="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8"
            >
              <div></div>
              <!--begin::Link-->
              <a
                href="#"
                class="link-primary"
                @click="router.push({ name: 'forgot-password' })"
                >¿Olvidaste tu contraseña?</a
              >
              <!--end::Link-->
            </div>
            <!--end::Wrapper-->
            <!--begin::Submit button-->
            <div class="d-grid mb-10">
              <button
                type="submit"
                class="btn btn-primary"
                @click="attempLogin"
              >
                <!--begin::Indicator label-->
                <span class="indicator-label">Ingresar</span>
                <!--end::Indicator label-->
                <!--begin::Indicator progress-->
                <!-- <span class="indicator-progress"
                    >Please wait...
                    <span
                      class="spinner-border spinner-border-sm align-middle ms-2"
                    ></span
                  ></span> -->
                <!--end::Indicator progress-->
              </button>
            </div>
            <!--end::Submit button-->
            <!--begin::Sign up-->
            <!-- <div class="text-gray-500 text-center fw-semibold fs-6">
                Not a Member yet?
                <a
                  href="../../demo7/dist/authentication/layouts/corporate/sign-up.html"
                  class="link-primary"
                  >Sign up</a
                >
              </div> -->
            <!--end::Sign up-->

            <!--end::Form-->
          </div>
          <!--end::Wrapper-->
        </div>
        <!--end::Form-->
        <!--begin::Footer-->
        <div class="d-flex flex-center flex-wrap px-5">
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
        </div>
        <!--end::Footer-->
      </div>
      <!--end::Body-->
    </div>
    <!--end::Authentication - Sign-in-->
  </div>
</template>

<script setup>
import { reactive } from "vue-demi";
import { useRouter } from "vue-router";
import useLoginStore from "./store.js";
const store = useLoginStore();
const router = useRouter();
let form_state = reactive({
  email: "rommelmontoya97@gmail.com",
  password: "admin",
});

const attempLogin = async () => {
  store.attemptLogin(form_state);
};
</script>
