<template>
  <transition name="flip">
    <Card :store="store" @next="onNextCard" @previous="onPreviousCard" />
  </transition>
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
}
</script>
