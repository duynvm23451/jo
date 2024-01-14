<template>
  <img :src="avatarUrl" class="h-8 w-8 rounded-full object-contain" />
</template>

<script>
export default {
  name: 'ProfileImage',
  data() {
    return {
      avatarUrl: 'https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg'
    }
  }
}
</script>
