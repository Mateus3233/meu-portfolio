<script>
import { defineComponent } from 'vue';
import Portfolio from '../components/Portfólio.vue';
import NavBar from '@/components/NavBar.vue';


export default defineComponent({
  name: 'HomeView',
  components: {
      Portfolio
  }
})
</script>


<template>
    <Portfolio/>

</template>
