<template>
  <div>
    <header-comp />
    <body-comp />
  </div>
</template>

<script>
import HeaderComp from './Header.vue';
import BodyComp from './Body.vue';

export default {
  components: {
    HeaderComp,
    BodyComp,
  },
};
</script>
