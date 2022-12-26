<template>
  <div>
    <simple-component />
    <complex-component />
  </div>
</template>

<script>
import SimpleComponent from './components/SimpleComponent.vue';
import ComplexComponent from './components/ComplexComponent'

export default {
  components: {
    SimpleComponent,
    ComplexComponent,
  },
};
</script>
