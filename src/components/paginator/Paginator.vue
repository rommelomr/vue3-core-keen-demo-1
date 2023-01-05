<script setup>
import { computed, onMounted, reactive, ref, watch } from "vue-demi";

const props = defineProps({
  itemsPerPage: {
    type: Number,
    required: true,
    default: 10,
  },

  maxButtons: {
    type: Number,
    required: true,
    default: -1,
  },

  totalItems: {
    type: Number,
    required: true,
    default: -1,
  },

  totalPages: {
    type: Number,
    required: true,
    default: -1,
  },

  currentPage: {
    type: Number,
    required: true,
    default: -1,
  },
});

let side_buttons = reactive({
  left: 0,
  right: 0,
});

let table_results_num = ref(10);
const createSideButtonArray = (buttons_count, invert) => {
  let arr = [];
  if (invert) {
    for (
      let i = props.currentPage - buttons_count;
      i < props.currentPage;
      i++
    ) {
      arr.push(i);
    }
  } else {
    for (
      let i = props.currentPage + 1;
      i <= props.currentPage + buttons_count;
      i++
    ) {
      arr.push(i);
    }
  }
  return arr;
};

const calculateSideButtons = () => {
  let more_pages_than_buttons = props.maxButtons < props.totalPages;
  if (more_pages_than_buttons) {
    let n = props.currentPage - Math.ceil(props.maxButtons / 2);
    if (n <= 0) {
      let right_buttons_count = Math.floor(props.maxButtons / 2) - n;
      let left_buttons_count = Math.ceil(props.maxButtons / 2) - 1 + n;

      side_buttons.right = createSideButtonArray(right_buttons_count, false);
      side_buttons.left = createSideButtonArray(left_buttons_count, true);
    } else {
      let m =
        props.totalPages -
        (props.currentPage + Math.floor(props.maxButtons / 2));

      if (m <= 0) {
        let right_buttons_count = m + Math.floor(props.maxButtons / 2);
        let left_buttons_count = Math.ceil(props.maxButtons / 2) - 1 - m;

        side_buttons.right = createSideButtonArray(right_buttons_count, false);
        side_buttons.left = createSideButtonArray(left_buttons_count, true);
      } else {
        let right_buttons_count = Math.ceil(props.maxButtons / 2) - 1;
        let left_buttons_count = Math.floor(props.maxButtons / 2);
        side_buttons.right = createSideButtonArray(right_buttons_count, false);
        side_buttons.left = createSideButtonArray(left_buttons_count, true);
      }
    }
  }
};

const onChangePage = (page) => {
  emit("onChangePage", page);
};

const emit = defineEmits(["onChangePage"]);

const showLeftArrows = computed(() => {
  let more_pages_than_buttons = props.maxButtons < props.totalPages;
  let exist_pages_before = Math.ceil(props.maxButtons / 2) < props.currentPage;

  return exist_pages_before && more_pages_than_buttons;
});

const showRightArrows = computed(() => {
  let more_pages_than_buttons = props.maxButtons < props.totalPages;
  let exist_pages_after =
    props.currentPage + Math.floor(props.maxButtons / 2) < props.totalPages;

  return exist_pages_after && more_pages_than_buttons;
});

const buttons = computed(() => {
  if (props.maxButtons >= props.totalPages) {
    let aux_array = [];
    for (let i = 1; i <= props.totalPages; i++) {
      aux_array.push(i);
    }
    return aux_array;
  } else {
    return [props.currentPage];
  }
});

const leftButtons = computed(() => {
  let more_pages_than_buttons = props.maxButtons < props.totalPages;
  if (more_pages_than_buttons) {
    return [0, 1, 2, 3];
  } else {
    return [];
  }
});

onMounted(() => {
  calculateSideButtons();
});
</script>
<template>
  <div class="dataTables_paginate paging_simple_numbers">
    <ul class="pagination">
      <!-- <li class="paginate_button page-item" v-if="showLeftArrows">
        <a class="page-link clickable" @click="onChangePage(1)"> F </a>
      </li> -->
      <li class="paginate_button page-item" v-if="showLeftArrows">
        <a class="page-link clickable" @click="onChangePage(currentPage - 1)">
          <i class="previous"></i>
        </a>
      </li>

      <li
        class="paginate_button page-item"
        v-for="i in side_buttons.left"
        :key="i"
      >
        <a class="page-link clickable" @click="onChangePage(i)">{{ i }}</a>
      </li>

      <li
        class="paginate_button page-item"
        :class="[currentPage === j && 'active']"
        v-for="j in buttons"
        :key="j"
      >
        <a class="page-link clickable" @click="onChangePage(j)">{{ j }}</a>
      </li>

      <li
        class="paginate_button page-item"
        v-for="k in side_buttons.right"
        :key="k"
      >
        <a class="page-link clickable" @click="onChangePage(k)">{{ k }}</a>
      </li>

      <li class="paginate_button page-item" v-if="showRightArrows">
        <a class="page-link clickable" @click="onChangePage(currentPage + 1)">
          <i class="next"></i>
        </a>
      </li>
      <!-- <li class="paginate_button page-item" v-if="showRightArrows">
        <a class="page-link clickable" @click="onChangePage(totalPages)"> L </a>
      </li> -->
    </ul>
  </div>
</template>
<style scoped>
</style>