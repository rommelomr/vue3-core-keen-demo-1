<script setup>
import { defineComponent, inject, onMounted, reactive, ref } from "vue";
import CreateEventForm from "./CreateEventForm.vue";
import EventDetails from "./EventDetails.vue";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS, createEventId } from "./event-utils";
const swal = inject("$swal");
const props = defineProps({
  initialView: {
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

let event_to_update = reactive({});
let selected_event = reactive({
  name: "",
  start: "",
  end: "",
});
let modal_is_open = ref(false);
let component_displayed = ref("");
let form_mode = ref("");
let calendarApi = reactive({});
let event_data = reactive({});

let currentEvents = ref([]);

const setSelectedEvent = (info) => {
  selected_event.start = info.startStr;
  selected_event.end = info.endStr;
  if (form_mode.value == "update") selected_event.name = info.title;

  console.log(selected_event);
};
const handleWeekendsToggle = () => {
  calendarOptions.weekends = !calendarOptions.weekends; // update a property
};
const handleDateSelect = (selectInfo) => {
  calendarApi = selectInfo.view.calendar;
  form_mode.value = "create";
  component_displayed.value = "form";
  console.log(selectInfo);
  setSelectedEvent(selectInfo);
  modal_is_open.value = true;
};
const handleEventClick = (clickInfo) => {
  console.log(clickInfo.event);
  event_to_update = clickInfo.event;
  calendarApi = clickInfo.view.calendar;
  form_mode.value = "update";
  component_displayed.value = "details";
  setSelectedEvent(clickInfo.event);
  modal_is_open.value = true;

  //calendarApi.unselect(); // clear date selection
};
const handleEvents = (events) => {
  currentEvents = events;
};

const onSubmitEvent = (submitted) => {
  console.log(submitted);
  calendarApi.unselect(); // clear date selection
  let _message = "";
  if (form_mode.value == "create") {
    _message = "Evento guardado correctamente";
  } else {
    event_to_update.remove();
    _message = "Evento actualizado correctamente";
  }
  _message += ". Puede agregar otro evento para el mismo día";
  calendarApi.addEvent({
    id: createEventId(),
    title: submitted.data.name,
    start: submitted.data.start,
    end: submitted.data.end,
  });

  swal
    .fire({
      title: "",
      text: _message,
      icon: "success",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Continuar",
    })
    .then(() => {
      selected_event.name = "";
      form_mode.value = "create";
    });
};

const closeModal = () => {
  selected_event.start = "";
  selected_event.end = "";
  selected_event.name = "";
  form_mode.value = "";
  modal_is_open.value = false;
};

let calendarOptions = reactive({
  plugins: [
    dayGridPlugin,
    timeGridPlugin,
    interactionPlugin, // needed for dateClick
  ],
  headerToolbar: {
    left: "prev,next today",
    center: "title",
    right: "dayGridMonth,timeGridWeek,timeGridDay",
  },
  initialView: props.initialView ?? "dayGridMonth",
  initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
  editable: true,
  selectable: true,
  selectMirror: true,
  dayMaxEvents: true,
  weekends: true,
  longPressDelay: 0,
  select: handleDateSelect,
  eventClick: handleEventClick,
  eventsSet: handleEvents,
  /* you can update a remote database when these fire:
        eventAdd:
        eventChange:
        eventRemove:
        */
});

const onEdit = () => {
  component_displayed.value = "form";
};
const onDelete = () => {
  alert("onDelete");
};
</script>


<template>
  <FullCalendar :options="calendarOptions" />
  <HeaderModal
    @onClose="closeModal()"
    v-if="modal_is_open"
    :title="
      selected_event.name == ''
        ? 'Agregar nuevo evento'
        : 'Evento: ' + selected_event.name
    "
  >
    <template #body>
      <div class="row">
        <CreateEventForm
          :client="client"
          :barber="barber"
          :mode="form_mode"
          @onSubmit="onSubmitEvent"
          :calendar-api="calendarApi"
          :event-data="selected_event"
          v-if="component_displayed == 'form'"
        />
        <EventDetails
          v-else
          :event-data="selected_event"
          @onEdit="onEdit"
          @onDelete="onDelete"
        />
      </div>
    </template>
  </HeaderModal>
</template>
