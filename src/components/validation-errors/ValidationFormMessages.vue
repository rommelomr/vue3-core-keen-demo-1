<script setup>
import { onMounted, ref } from 'vue'
import { translate } from './ErrorMessages'
const props = defineProps({
  validation: {
    type: String,
    required: true,
  },

  field: {
    type: String,
    required: true,
    default: '',
  },

  lang: {
    type: String,
    default: 'en',
  },
})
</script>
 
<template>
  <div style="color: salmon">
    {{ translate(field, validation, lang) }}
  </div>
</template>