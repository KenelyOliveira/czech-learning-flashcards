<template>
    <div>
        <div class="mb-3">
            <label for="term" class="form-label">Term</label>
            <input class="form-control" id="term" autocomplete="off">
        </div>
        <div class="mb-3">
            <label for="type" class="form-label">Type</label>
            <select class="form-control" id="type">
                <option></option>
                <option v-for="item in types" v-bind:value="item" v-bind:key="item"> {{item}} </option>
            </select>
        </div>
        <div class="mb-3">
            <label class="form-label">Translations</label>
            <div>PT-BR</div>
            <div>EN-US</div>
        </div>
        <div class="mb-3">
            <label for="type" class="form-label">Tags</label>
            <select class="form-control" id="type">
                <option></option>
                <option v-for="item in tags" v-bind:value="item" v-bind:key="item"> {{item}} </option>
            </select>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { CreateCardModel, EType } from "../model/createCard";

export default class CreateCard extends Vue {
  model: CreateCardModel | null = null;

  types = Object.keys(EType).filter(f => f);
  tags = ["formal", "informal"] 

  async mounted() {
    try {
        const response = await fetch("https://czech-cards.herokuapp.com/");
        const data = await response.json();
    }
    catch(err) {
        console.log(err)
    }
    
  }
}
</script>
<style scoped>
.form-label {
 color: darkgrey;   
}
</style>