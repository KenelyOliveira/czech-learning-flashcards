<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-12">
        <CardCarroussel :store="store"/>
      </div>
    </div>
    <div class="row justify-content-center" v-if="store?.type === 'cards-and-text'">
      <div class="col-12">
        Correct Answers: {{ numberCorrectAnswers }}
      </div>
    </div>
    <div class="row justify-content-center" v-if="store?.type === 'cards-and-text'">
      <div class="col-12 text-danger">
        Wrong Answers: {{ numberWrongAnsweres }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { createStore, Store } from "@/store/store";
import { Options, Vue } from "vue-class-component";
import CardCarroussel from "../components/CardCarroussel.vue";

@Options({
  components: {
    CardCarroussel,
  },
})
export default class NewGame extends Vue {
  isReady = false;
  store: Store | null = null;
  
  created(){
    this.store = createStore();
    this.store.type = this.$route.query.type?.toString();
  }

  get numberCorrectAnswers() {
    return this.store?.cards?.filter(s => s.answerType === 4).length;
  }

  get numberWrongAnsweres() {
    return this.store?.cards?.filter(s => s.answerType === 3).length;
  }
}
</script>
