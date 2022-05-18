<template>
  <div class="card">
    <p v-if="card.flipped === false" key="czech" class="card-text">
      {{card.czech}}
    </p>
    <p v-else key="english" class="card-text">
      {{card.english}}
    </p>
    <div>
      <button class="btn btn-primary" v-on:click="card.answer = 1">I don't know</button>
      <button class="btn btn-primary" v-on:click="card.answer = 2">I know it!</button>
    </div>
  </div>
</template>

<script lang="ts">
import { CardModel } from '@/model/cards';
import { Options, Vue } from 'vue-class-component';

@Options({ props: {
    card!: Object,
    cards!: Array,
    index!: Number,
}})
export default class Card extends Vue {
  card!: CardModel;
  cards!: CardModel[];
  index!: number;
}
</script>