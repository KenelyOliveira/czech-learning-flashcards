<template>
  <div>
    <div class="pl-1 pb-2">
      <div class="dropdown ">
        <button class="btn button-filter dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Filter by Type
        </button>
        <ul class="dropdown-menu button-filter">
          <li class="dropdown-item" @click="filterByType('all')">All</li>
          <li v-for="(type) in store.cardTypes" v-bind:key="type" @click="filterByType(type)" class="dropdown-item">
            {{ type }}
          </li>
        </ul>
      </div>
    </div>
    <transition name="flip">
      <Card :store="store" @next="onNextCard" @previous="onPreviousCard" />
    </transition>
  </div>
</template>

<script lang="ts">
import { AnswerType, CardAndReplyModel } from "@/model/cards";
import { Store } from "@/store/store";
import { Options, Vue } from "vue-class-component";
import Card from "./Card.vue";

@Options({
  props: {
    store: Object
  },
  components: {
    Card,
  },
})
export default class CardCarroussel extends Vue {
  store!: Store;

  get nextCard(): CardAndReplyModel {
    return this.store!.cards!.filter((a) => a.answerType === AnswerType.NoAnswer).sort(s => s.id).splice(0,1)[0];
  }

  get previousCard(): CardAndReplyModel {
    return this.store!.cards!.filter((a) => a.id === this.store.currentCard!.id - 1).sort(s => s.id).splice(0,1)[0];
  }

  created() {
    this.onNextCard();
  }

  onPreviousCard() {
    this.store.currentCard = this.previousCard;
    if (this.store.currentCard && this.store.type === "cards-only") {
      this.store.currentCard.answerType = AnswerType.NoAnswer;
    }
  }

  onNextCard() {
    if (this.store.currentCard && this.store.type === "cards-only") {
      this.store.currentCard.answerType = AnswerType.Skip;
    }
    
    this.store.currentCard = this.nextCard;
  }

  filterByType(type: string) {
    this.store.cards = this.store.fetchAndShuffleCards(type);
    this.onNextCard();
  }
}
</script>
<style scoped>
.button-filter {
  background-color: #FAFDD6 !important;
  color: #A2B38B !important;
}
</style>