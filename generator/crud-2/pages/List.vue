<template>
  <div
    id="kt_app_toolbar"
    class="
      app-toolbar
      align-items-center
      justify-content-between
      py-2 py-lg-6
      mb-6
    "
  >
    <!--begin::Toolbar wrapper-->
    <div
      class="d-flex flex-grow-1 flex-stack flex-wrap gap-2 mb-n10"
      id="kt_toolbar"
    >
      <!--begin::Page title-->
      <div class="page-title d-flex flex-column justify-content-center me-3">
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
          {{ store.module_name }}
        </h1>
        <!--end::Title-->
        <!--begin::Breadcrumb-->
        <ul
          class="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1"
        >
          <!--begin::Item-->
          <li class="breadcrumb-item text-muted">
            <a
              href="../../demo7/dist/index.html"
              class="text-muted text-hover-primary"
              >{{ store.module_name }}</a
            >
          </li>
          <!--end::Item-->

          <!--begin::Item-->
          <li class="breadcrumb-item">
            <span class="bullet bg-gray-400 w-5px h-2px"></span>
          </li>
          <!--end::Item-->
          <!--begin::Item-->
          <li class="breadcrumb-item text-dark">Lista</li>
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

  <div id="kt_app_content" class="app-content flex-column-fluid">
    <!--begin::Card-->
    <div class="card">
      <div class="row mt-6 mx-6">
        <div class="col">
          <div class="d-flex align-items-center position-relative my-1">
            <span class="svg-icon svg-icon-1 position-absolute ms-6">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  opacity="0.5"
                  x="17.0365"
                  y="15.1223"
                  width="8.15546"
                  height="2"
                  rx="1"
                  transform="rotate(45 17.0365 15.1223)"
                  fill="currentColor"
                />
                <path
                  d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <!--end::Svg Icon-->
            <input
              type="text"
              data-kt-customer-table-filter="search"
              class="form-control form-control-solid w-250px ps-15"
              placeholder="Buscar"
              v-model="search"
              @keyup="paginateBySearch"
            />
          </div>
        </div>
        <div class="col">
          <div
            class="d-flex justify-content-end"
            data-kt-customer-table-toolbar="base"
          >
            <!--begin::Filter-->
            <button
              type="button"
              class="btn btn-light-primary me-3 core-hidden"
              data-kt-menu-trigger="click"
              data-kt-menu-placement="bottom-end"
            >
              <span class="svg-icon svg-icon-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z"
                    fill="currentColor"
                  />
                </svg> </span
              >Filtro
            </button>
            <div
              class="menu menu-sub menu-sub-dropdown w-300px w-md-325px"
              data-kt-menu="true"
              id="kt-toolbar-filter"
            >
              <div class="px-7 py-5">
                <div class="fs-4 text-dark fw-bold">Filter Options</div>
              </div>

              <div class="separator border-gray-200"></div>

              <div class="px-7 py-5">
                <div class="mb-10">
                  <label class="form-label fs-5 fw-semibold mb-3">Month:</label>

                  <select
                    class="form-select form-select-solid fw-bold"
                    data-kt-select2="true"
                    data-placeholder="Select option"
                    data-allow-clear="true"
                    data-kt-customer-table-filter="month"
                    data-dropdown-parent="#kt-toolbar-filter"
                  >
                    <option value="aug">August</option>
                    <option value="sep">September</option>
                    <option value="oct">October</option>
                    <option value="nov">November</option>
                    <option value="dec">December</option>
                  </select>
                </div>

                <div class="mb-10">
                  <label class="form-label fs-5 fw-semibold mb-3"
                    >Payment Type:</label
                  >

                  <div
                    class="d-flex flex-column flex-wrap fw-semibold"
                    data-kt-customer-table-filter="payment_type"
                  >
                    <label
                      class="
                        form-check
                        form-check-sm
                        form-check-custom
                        form-check-solid
                        mb-3
                        me-5
                      "
                    >
                      <input
                        class="form-check-input"
                        type="radio"
                        name="payment_type"
                        value="all"
                        checked="checked"
                      />
                      <span class="form-check-label text-gray-600">All</span>
                    </label>

                    <label
                      class="
                        form-check
                        form-check-sm
                        form-check-custom
                        form-check-solid
                        mb-3
                        me-5
                      "
                    >
                      <input
                        class="form-check-input"
                        type="radio"
                        name="payment_type"
                        value="visa"
                      />
                      <span class="form-check-label text-gray-600">Visa</span>
                    </label>

                    <label
                      class="
                        form-check
                        form-check-sm
                        form-check-custom
                        form-check-solid
                        mb-3
                      "
                    >
                      <input
                        class="form-check-input"
                        type="radio"
                        name="payment_type"
                        value="mastercard"
                      />
                      <span class="form-check-label text-gray-600"
                        >Mastercard</span
                      >
                    </label>

                    <label
                      class="
                        form-check
                        form-check-sm
                        form-check-custom
                        form-check-solid
                      "
                    >
                      <input
                        class="form-check-input"
                        type="radio"
                        name="payment_type"
                        value="american_express"
                      />
                      <span class="form-check-label text-gray-600"
                        >American Express</span
                      >
                    </label>
                  </div>
                </div>

                <div class="d-flex justify-content-end">
                  <button
                    type="reset"
                    class="btn btn-light btn-active-light-primary me-2"
                    data-kt-menu-dismiss="true"
                    data-kt-customer-table-filter="reset"
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    class="btn btn-primary"
                    data-kt-menu-dismiss="true"
                    data-kt-customer-table-filter="filter"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
            <!--end::Filter-->

            <button
              type="button"
              class="btn btn-light-primary me-3 core-hidden"
              data-bs-toggle="modal"
              data-bs-target="#kt_customers_export_modal"
            >
              <span class="svg-icon svg-icon-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    opacity="0.3"
                    x="12.75"
                    y="4.25"
                    width="12"
                    height="2"
                    rx="1"
                    transform="rotate(90 12.75 4.25)"
                    fill="currentColor"
                  />
                  <path
                    d="M12.0573 6.11875L13.5203 7.87435C13.9121 8.34457 14.6232 8.37683 15.056 7.94401C15.4457 7.5543 15.4641 6.92836 15.0979 6.51643L12.4974 3.59084C12.0996 3.14332 11.4004 3.14332 11.0026 3.59084L8.40206 6.51643C8.0359 6.92836 8.0543 7.5543 8.44401 7.94401C8.87683 8.37683 9.58785 8.34458 9.9797 7.87435L11.4427 6.11875C11.6026 5.92684 11.8974 5.92684 12.0573 6.11875Z"
                    fill="currentColor"
                  />
                  <path
                    opacity="0.3"
                    d="M18.75 8.25H17.75C17.1977 8.25 16.75 8.69772 16.75 9.25C16.75 9.80228 17.1977 10.25 17.75 10.25C18.3023 10.25 18.75 10.6977 18.75 11.25V18.25C18.75 18.8023 18.3023 19.25 17.75 19.25H5.75C5.19772 19.25 4.75 18.8023 4.75 18.25V11.25C4.75 10.6977 5.19771 10.25 5.75 10.25C6.30229 10.25 6.75 9.80228 6.75 9.25C6.75 8.69772 6.30229 8.25 5.75 8.25H4.75C3.64543 8.25 2.75 9.14543 2.75 10.25V19.25C2.75 20.3546 3.64543 21.25 4.75 21.25H18.75C19.8546 21.25 20.75 20.3546 20.75 19.25V10.25C20.75 9.14543 19.8546 8.25 18.75 8.25Z"
                    fill="currentColor"
                  />
                </svg> </span
              >Exportar
            </button>
            <!--begin::Add customer-->
            <button
              v-show="selected_items.length == 0"
              @click="create__name__(pascalCase)()"
              type="button"
              class="btn btn-primary"
            >
              Agregar
            </button>
            <div v-show="selected_items.length != 0">
              <div class="d-flex justify-content-end align-items-center">
                <div class="fw-bold me-5">
                  <span class="me-2">{{ selected_items.length }}</span
                  >Selecionados
                </div>
                <a
                  class="
                    btn btn-sm btn-light btn-active-light-primary
                    clickable
                  "
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-end"
                  >Opciones
                  <!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
                  <span class="svg-icon svg-icon-5 m-0">
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
                  <!--end::Svg Icon--></a
                >
                <!--begin::Menu-->
                <div
                  class="
                    menu
                    menu-sub
                    menu-sub-dropdown
                    menu-column
                    menu-rounded
                    menu-gray-600
                    menu-state-bg-light-primary
                    fw-semibold
                    fs-7
                    w-125px
                    py-4
                  "
                  data-kt-menu="true"
                >
                  <!--begin::Menu item-->

                  <!--end::Menu item-->
                  <!--begin::Menu item-->
                  <div class="menu-item px-3">
                    <a @click="deleteMany()" href="#" class="menu-link px-3"
                      >Eliminar</a
                    >
                  </div>
                  <!--end::Menu item-->
                </div>
                <!--end::Menu-->
              </div>
            </div>
            <!--end::Add customer-->
          </div>
        </div>
      </div>
      <div class="card-body">
        <!--begin::Table container-->
        <div v-if="store.items.__name__(snakeCase).list.length > 0">
          <div class="table-responsive">
            <!--begin::Table-->
            <table class="table table-row-dashed align-middle gs-0 gy-3 my-0">
              <!--begin::Table head-->
              <thead>
                <!--begin::Table row-->
                <tr
                  class="
                    text-start text-gray-400
                    fw-bold
                    fs-7
                    text-uppercase
                    gs-0
                  "
                >
                  <th class="w-10px pe-2">
                    <div
                      class="
                        form-check
                        form-check-sm
                        form-check-custom
                        form-check-solid
                        me-3
                      "
                    >
                      <input
                        class="form-check-input"
                        type="checkbox"
                        @change="checkUncheckAll"
                      />
                    </div>
                  </th>
                  <th class="min-w-125px">Nombre</th>
                  <th class="min-w-125px">Categoría</th>
                  <th class="min-w-125px">Código</th>
                  <th class="min-w-125px">Precio</th>
                  <th class="min-w-125px">Status</th>
                  <th class="min-w-125px">Cantidad</th>
                  <th class="text-end min-w-70px">Actions</th>
                </tr>
                <!--end::Table row-->
              </thead>
              <!--end::Table head-->
              <!--begin::Table body-->
              <tbody class="fw-semibold text-gray-600">
                <tr
                  v-for="(item, i) in store.items.__name__(snakeCase).list"
                  :key="'item_' + i"
                >
                  <!--begin::Checkbox-->
                  <td>
                    <div
                      class="
                        form-check
                        form-check-sm
                        form-check-custom
                        form-check-solid
                      "
                    >
                      <input
                        class="form-check-input"
                        type="checkbox"
                        v-model="selected_items"
                        :value="item.id"
                      />
                    </div>
                  </td>
                  <!--end::Checkbox-->
                  <!--begin::Name=-->
                  <td>
                    <img
                      src="https://picsum.photos/200"
                      class="h-25px me-3"
                      alt=""
                    />{{ item.name }}
                  </td>
                  <!-- <td>
                            <a
                              href="../../demo7/dist/apps/customers/view.html"
                              class="text-gray-800 text-hover-primary mb-1"
                              ></a
                            >
                          </td> -->
                  <!--end::Name=-->
                  <!--begin::Email=-->
                  <td>
                    <a href="#" class="text-gray-600 text-hover-primary mb-1"
                      >Categoria 1</a
                    >
                  </td>
                  <!--end::Email=-->
                  <!--begin::Company=-->
                  <td>987654</td>
                  <!--end::Company=-->
                  <!--begin::Payment method=-->
                  <td data-filter="mastercard">$7751</td>
                  <!--end::Payment method=-->
                  <!--begin::Date=-->
                  <td>Activo</td>
                  <td>78</td>
                  <!--end::Date=-->
                  <!--begin::Action=-->

                  <td class="text-end">
                    <div class="dropdown">
                      <button
                        class="btn btn-sm btn-light btn-active-light-primary"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Opciones
                        <span class="svg-icon svg-icon-5 m-0">
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
                      </button>
                      <ul
                        class="
                          dropdown-menu
                          menu
                          menu-sub
                          menu-sub-dropdown
                          menu-column
                          menu-rounded
                          menu-gray-600
                          menu-state-bg-light-primary
                          fw-semibold
                          fs-7
                          w-125px
                          py-4
                        "
                      >
                        <li class="menu-item">
                          <a
                            href="#"
                            @click="update__name__(pascalCase)(item, i)"
                            class="menu-link px-3"
                            >Detalles</a
                          >
                        </li>

                        <li class="menu-item">
                          <a
                            href="#"
                            class="menu-link px-3"
                            @click="delete__name__(pascalCase)(item, item.id)"
                            >Eliminar</a
                          >
                        </li>
                      </ul>
                    </div>
                  </td>
                  <!--end::Action=-->
                </tr>
              </tbody>
              <!--end::Table body-->
            </table>
          </div>
          <div class="mt-6">
            <div style="float: left">
              <select
                name="kt_customers_table_length"
                aria-controls="kt_customers_table"
                class="form-select form-select-sm form-select-solid"
                v-model="items_per_page"
                @change="changeItemsPerPage"
              >
                <option :value="5">5</option>
                <option :value="10">10</option>
                <option :value="25">25</option>
                <option :value="50">50</option>
                <option :value="100">100</option>
              </select>
            </div>
            <div style="float: right">
              <Paginator
                v-if="
                  Math.ceil(
                    store.items.__name__(snakeCase).paginator.total_pages
                  ) > 1
                "
                :key="store.items.__name__(snakeCase).paginator.key"
                @onChangePage="onChangePage"
                :items-per-page="
                  store.items.__name__(snakeCase).paginator.items_per_page
                "
                :max-buttons="5"
                :total-items="
                  store.items.__name__(snakeCase).paginator.total_items
                "
                :total-pages="
                  Math.ceil(
                    store.items.__name__(snakeCase).paginator.total_pages
                  )
                "
                :current-page="
                  store.items.__name__(snakeCase).paginator.current_page
                "
              />
            </div>
          </div>
        </div>
        <div align="center" v-else>
          <p>No se han encontrado resultados</p>
        </div>
        <!--end::Table-->
      </div>
      <!--end: Card Body-->
    </div>
    <!--begin::Modals-->
    <!--begin::Modal - Customers - Add-->
    <div class="modal fade" tabindex="-1" aria-hidden="true">
      <!--begin::Modal dialog-->
      <div class="modal-dialog modal-dialog-centered mw-950px">
        <!--begin::Modal content-->
        <div class="modal-content">
          <!--begin::Form CORE-HIDDEN-->

          <!--end::Form-->
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="main-modal"
      tabindex="-1"
      data-bs-backdrop="static"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-scrollable modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              {{ store.modal_title }}
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="close__name__(pascalCase)Modal()"
            ></button>
          </div>
          <div class="modal-body">
            <pre>{{ store.forms }}</pre>
            <__name__(pascalCase)Form
            v-if="store.forms.create_update___name__(snakeCase) != ''" />
          </div>
          <!-- <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                        @click="store.closeModal()"
                      >
                        Cerrar
                      </button>
                      <button
                        v-if="store.form_mode != 'see'"
                        @click="handleSubmit()"
                        type="button"
                        class="btn btn-primary"
                      >
                        Guardar
                      </button>
                    </div> -->
        </div>
      </div>

      <!-- <__name__(pascalCase)Form v-show="store.modal != ''" /> -->
    </div>
    <!--end::Modal - Customers - Add-->
    <!--begin::Modal - Adjust Balance-->
    <div
      class="modal fade"
      id="kt_customers_export_modal"
      tabindex="-1"
      aria-hidden="true"
    >
      <!--begin::Modal dialog-->
      <div class="modal-dialog modal-dialog-centered mw-650px">
        <!--begin::Modal content-->
        <div class="modal-content">
          <!--begin::Modal header-->
          <div class="modal-header">
            <!--begin::Modal title-->
            <h2 class="fw-bold">Export Customers</h2>
            <!--end::Modal title-->
            <!--begin::Close-->
            <div
              id="kt_customers_export_close"
              class="btn btn-icon btn-sm btn-active-icon-primary"
            >
              <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
              <span class="svg-icon svg-icon-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    opacity="0.5"
                    x="6"
                    y="17.3137"
                    width="16"
                    height="2"
                    rx="1"
                    transform="rotate(-45 6 17.3137)"
                    fill="currentColor"
                  />
                  <rect
                    x="7.41422"
                    y="6"
                    width="16"
                    height="2"
                    rx="1"
                    transform="rotate(45 7.41422 6)"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <!--end::Svg Icon-->
            </div>
            <!--end::Close-->
          </div>
          <!--end::Modal header-->
          <!--begin::Modal body-->
          <div class="modal-body scroll-y mx-5 mx-xl-15 my-7">
            <!--begin::Form-->
            <form id="kt_customers_export_form" class="form" action="#">
              <!--begin::Input group-->
              <div class="fv-row mb-10">
                <!--begin::Label-->
                <label class="fs-5 fw-semibold form-label mb-5"
                  >Select Export Format:</label
                >
                <!--end::Label-->
                <!--begin::Input-->
                <select
                  data-control="select2"
                  data-placeholder="Select a format"
                  data-hide-search="true"
                  name="format"
                  class="form-select form-select-solid"
                >
                  <option value="excell">Excel</option>
                  <option value="pdf">PDF</option>
                  <option value="cvs">CVS</option>
                  <option value="zip">ZIP</option>
                </select>
                <!--end::Input-->
              </div>
              <!--end::Input group-->
              <!--begin::Input group-->
              <div class="fv-row mb-10">
                <!--begin::Label-->
                <label class="fs-5 fw-semibold form-label mb-5"
                  >Select Date Range:</label
                >
                <!--end::Label-->
                <!--begin::Input-->
                <input
                  class="form-control form-control-solid"
                  placeholder="Pick a date"
                  name="date"
                />
                <!--end::Input-->
              </div>
              <!--end::Input group-->
              <!--begin::Row-->
              <div class="row fv-row mb-15">
                <!--begin::Label-->
                <label class="fs-5 fw-semibold form-label mb-5"
                  >Payment Type:</label
                >
                <!--end::Label-->
                <!--begin::Radio group-->
                <div class="d-flex flex-column">
                  <!--begin::Radio button-->
                  <label
                    class="
                      form-check
                      form-check-custom
                      form-check-sm
                      form-check-solid
                      mb-3
                    "
                  >
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="1"
                      checked="checked"
                      name="payment_type"
                    />
                    <span class="form-check-label text-gray-600 fw-semibold"
                      >All</span
                    >
                  </label>
                  <!--end::Radio button-->
                  <!--begin::Radio button-->
                  <label
                    class="
                      form-check
                      form-check-custom
                      form-check-sm
                      form-check-solid
                      mb-3
                    "
                  >
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="2"
                      checked="checked"
                      name="payment_type"
                    />
                    <span class="form-check-label text-gray-600 fw-semibold"
                      >Visa</span
                    >
                  </label>
                  <!--end::Radio button-->
                  <!--begin::Radio button-->
                  <label
                    class="
                      form-check
                      form-check-custom
                      form-check-sm
                      form-check-solid
                      mb-3
                    "
                  >
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="3"
                      name="payment_type"
                    />
                    <span class="form-check-label text-gray-600 fw-semibold"
                      >Mastercard</span
                    >
                  </label>
                  <!--end::Radio button-->
                  <!--begin::Radio button-->
                  <label
                    class="
                      form-check
                      form-check-custom
                      form-check-sm
                      form-check-solid
                    "
                  >
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="4"
                      name="payment_type"
                    />
                    <span class="form-check-label text-gray-600 fw-semibold"
                      >American Express</span
                    >
                  </label>
                  <!--end::Radio button-->
                </div>
                <!--end::Input group-->
              </div>
              <!--end::Row-->
              <!--begin::Actions-->
              <div class="text-center">
                <button
                  type="reset"
                  id="kt_customers_export_cancel"
                  class="btn btn-light me-3"
                >
                  Discard
                </button>
                <button
                  type="submit"
                  id="kt_customers_export_submit"
                  class="btn btn-primary"
                >
                  <span class="indicator-label">Submit</span>
                  <span class="indicator-progress"
                    >Please wait...
                    <span
                      class="spinner-border spinner-border-sm align-middle ms-2"
                    ></span
                  ></span>
                </button>
              </div>
              <!--end::Actions-->
            </form>
            <!--end::Form-->
          </div>
          <!--end::Modal body-->
        </div>
        <!--end::Modal content-->
      </div>
      <!--end::Modal dialog-->
    </div>
    <!--end::Modal - New Card-->
    <!--end::Modals-->
  </div>
  <Footer />
</template>
<script setup>
import use__name__(pascalCase)Store from "../stores/index.js";
import __name__(pascalCase)Form from "../pages/__name__(pascalCase)Form.vue";
import Paginator from "@/components/paginator/Paginator.vue";
import { inject, onMounted, ref } from "vue-demi";
import { parseDate } from "@/utils/Functions.js";
import { confirm } from "@/utils/Swals.js";
const swal = inject("$swal");
const store = use__name__(pascalCase)Store();

let selected_items = ref([]);

const emit = defineEmits(["onDisplayPage"]);

const deleteMany = () => {
  confirm(
    swal,
    "¿Está seguro que desea eliminar los elementos seleccionados?",
    () => {
      console.log("eliminar items", selected_items.value);
    }
  );
};

const delete__name__(pascalCase) = (item, id) => {
  store.setSelectedItem("__name__(snakeCase)", item);
  confirm(swal, "¿Está seguro que desea eliminar este elemento?", () => {
    store.delete__name__(pascalCase)(id);
  });
};

const checkUncheckAll = (v) => {
  if (v.target.checked) {
    selected_items.value = [];
    store.items.__name__(snakeCase).list.map((item) => {
      selected_items.value.push(item.id);
    });
  } else {
    selected_items.value = [];
  }
};
const onChangePage = (a) => {
  store.setPagination({
    paginator: "__name__(snakeCase)",
    current_page: a,
  });
  store.set__name__(pascalCase)List();
};
let items_per_page = ref(store.items.__name__(snakeCase).paginator.items_per_page);

const changeItemsPerPage = () => {
  store.setPagination({
    paginator: "__name__(snakeCase)",
    items_per_page: items_per_page.value,
    current_page: 1,
  });
  store.set__name__(pascalCase)List();
};

let search = ref("");
const paginateBySearch = () => {
  store.setPagination({
    paginator: "__name__(snakeCase)",
    search: search.value,
  });
  store.set__name__(pascalCase)List();
};
const create__name__(pascalCase) = () => {
  store.setFormMode("create_update___name__(snakeCase)", "create");
  emit("onDisplayPage", {
    page_to_show: "#create-__name__(kebabCase)",
  });
  // store.setModal("create___name__(snakeCase)");
  // store.setModalTitle("Agregar __name__(snakeCase)");
  // store.setFormMode("create_update___name__(snakeCase)", "create");
};
const update__name__(pascalCase) = (item, index) => {
  store.setFormMode("create_update___name__(snakeCase)", "update");
  store.setSelectedItem("__name__(snakeCase)", item);
  store.setSelectedItemIndex("__name__(snakeCase)", index);
  emit("onDisplayPage", {
    page_to_show: "#create-__name__(kebabCase)",
  });
};

const close__name__(pascalCase)Modal = () => {
  store.setModal("");
  store.setModalTitle("");
  store.setFormMode("create_update___name__(snakeCase)", "");
  store.setSelectedItem("__name__(snakeCase)", {});
  store.setSelectedItemIndex("__name__(snakeCase)", -1);
};
onMounted(() => {
  console.log(store.items);
});
</script>

<script>
export default {
  name: "ListComponent",
};
</script>