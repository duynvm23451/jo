<template>
  <img :src="avatarUrl" class="h-8 w-8 rounded-full object-contain" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const avatarUrl = ref(
  'https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg'
)
</script>
