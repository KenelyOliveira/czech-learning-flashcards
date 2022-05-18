<template>
  <div v-if="store.currentCard">
    <div class="card text-center scale">
      <transition name="flip">
        <p v-if="store.currentCard.isFlipped === false" key="czech" class="py-5">
          {{ store.currentCard.czech }}
          <span class="flip-button" v-if="store.type === 'cards-only'">
            <i class="material-icons text-large h1" v-on:click="toggleCard()">autorenew</i>
          </span>
        </p>
        <p v-else key="english" class="py-5">
          {{ store.currentCard.english }}
          <span class="flip-button" v-if="store.type === 'cards-only'">
            <i class="material-icons text-large h1" v-on:click="toggleCard()">autorenew</i>
          </span>
        </p>
      </transition>  
      <div v-if="isAnswering" class="pb-5">
        <div class="text-start px-5" >
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Answer" v-model="store.currentCard.answer">
          </div>
        </div>
        <div class="text-start px-5" >
          <div class="input-group mb-3">
            <button class="btn btn-success p-2" @click="validateAnswer()" :disabled="store.isAnswerInvalid">
              Submit
            </button>
          </div>
        </div>
        <div class="text-start px-5" >
          <div class="input-group mb-3 text-danger">
            <p> {{ correctAnswer }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row pt-4">
        <div class="col-6 text-start">
          <button class="btn btn-primary p-3" @click="onButtonClick('left')">
            {{ getButtonText('left') }}
          </button>
        </div>
        <div class="col-6 text-end">
          <button class="btn btn-primary p-3" @click="onButtonClick('right')" :disabled="isAnswering">
            {{ getButtonText('right') }}
          </button>
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import { AnswerType } from "@/model/cards";
import { Store } from "@/store/store";
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    store: Object
  },
})
export default class Card extends Vue {
  store!: Store;
  
  displayAnswerBlock = false;
  correctAnswer = "";

  get isAnswering() {
    return this.store.type === "cards-and-text" && this.displayAnswerBlock;
  } 

  toggleCard(): void {
    this.store.currentCard!.isFlipped = !this.store.currentCard!.isFlipped;
  }

  getButtonText(position: string) : string {
    if (position === 'left') {
      return this.store.type === "cards-only" ? "Previous" : "I don't know";
    }
    else if (position === 'right') {
      return this.store.type === "cards-only" ? "Next" : "I know it!";
    }

    return "";
  }

  onButtonClick(position: string){
    if (this.store.type === "cards-only")
    {
      if (position === "right")
      {
        this.$emit('next', true);
      }
      else if (position === "left") {
        this.$emit('previous', true);
      }
    }
    else if (this.store.type === "cards-and-text")
    {
      if (position === "right")
      {
        this.displayAnswerBlock = true;
      }
      else if (position === "left") {
        this.store.currentCard!.answerType = AnswerType.Wrong;
        this.$emit('next', true);
      }
    }
  }

  async validateAnswer() {
    let message = "";
    
    if (this.store.currentCard?.answer.toLowerCase() == this.store.currentCard?.english.toLowerCase()) {
      this.store.currentCard!.answerType = AnswerType.Correct;
      message = "Correct! ";
    }
    else {
      this.store.currentCard!.answerType = AnswerType.Wrong;
      message = "Incorrect :(  The right answer is ";
    }

    this.correctAnswer = message + this.store.currentCard!.english;
    await new Promise(f => setTimeout(f, 3000));
    this.correctAnswer = "";
    
    this.$emit('next', true);
  }
}
</script>
