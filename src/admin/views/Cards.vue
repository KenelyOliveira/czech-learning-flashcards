<template>
  <RouterLink
      :to="{ name: 'new-card'}">
      <div class="d-grid gap-2" >
        <button type="button" class="btn btn-success">Add card</button>
      </div>
    </RouterLink>
    
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Cards extends Vue {
  
  async mounted() {
    try {
        const response = await fetch("https://czech-cards.herokuapp.com/");
        const data = await response.json();
        console.log(data);
    }
    catch(err) {
        console.log(err)
    }
    
  }
}
</script>
<style scoped>
table {
  color: #A2B38B !important;
  font-size: larger;
}
th {
    border: none !important;
}
</style>