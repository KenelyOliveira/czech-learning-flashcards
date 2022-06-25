<template>
  <div v-if="store.currentCard">
    <div class="card text-center scale card-color" >
      <transition name="flip">
        <h2 v-if="store.currentCard.isFlipped === false" >
          <p key="czech" class="py-5 text-secondary">
            {{ store.currentCard.czech }}
            <span class="flip-button" v-if="store.type === 'cards-only'">
              <i class="material-icons text-large h1" v-on:click="toggleCard()">autorenew</i>
            </span>
          </p>
        </h2>
        <h2 v-else>
          <p key="english" class="py-5 text-secondary">
            {{ store.currentCard.english }}
            <span class="flip-button" v-if="store.type === 'cards-only'">
              <i class="material-icons text-large h1" v-on:click="toggleCard()">autorenew</i>
            </span>
            <CardTags :store="store" />
          </p>
        </h2>
      </transition>  
      <div v-if="isAnswering" class="pb-1">
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
            <p :class="{'text-danger': !isCorrectAnswer, 'text-success': isCorrectAnswer }">
              {{ correctAnswerMessage }} <b>{{ correctAnswer }}</b>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row pt-4" v-if="store.type === 'cards-only'">
        <div class="col-6 text-start">
          <button class="btn button-nav p-3" @click="onButtonClick('left')">
            <span class="material-symbols-outlined" style="font-size: 60px">
              arrow_back
            </span>
          </button>
          
        </div>
        <div class="col-6 text-end" v-if="store.type === 'cards-only'">
          <button class="btn button-nav p-3" @click="onButtonClick('right')" :disabled="isAnswering">
            <span class="material-symbols-outlined" style="font-size: 60px">
                arrow_forward
            </span>
          </button>
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import { AnswerType } from "@/model/cards";
import { Store } from "@/store/store";
import { Options, Vue } from "vue-class-component";
import CardTags from "./CardTags.vue";

@Options({
  props: {
    store: Object
  },
  components: {
    CardTags
  }
})
export default class Card extends Vue {
  store!: Store;
  
  isCorrectAnswer = false;
  correctAnswerMessage = "";
  correctAnswer = "";

  get isAnswering() {
    return this.store.type === "game";
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
    else if (this.store.type === "game")
    {
      if (position === "left") {
        this.store.currentCard!.answerType = AnswerType.Wrong;
        this.$emit('next', true);
      }
    }
  }

  async validateAnswer() {
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    
    const expectedAnwer = this.store.currentCard?.answer.toLowerCase().replace(regex, '');
    const correctAnswer = this.store.currentCard?.english.toLowerCase().replace(regex, '');

    if (expectedAnwer == correctAnswer) {
      this.isCorrectAnswer = true;
      this.store.currentCard!.answerType = AnswerType.Correct;
      this.correctAnswerMessage = `Correct! ${this.store.currentCard!.czech} in English is `;
    }
    else {
      this.isCorrectAnswer = false;
      this.store.currentCard!.answerType = AnswerType.Wrong;
      this.correctAnswerMessage = `Incorrect :(  The right answer is `;
    }

    this.correctAnswer = this.store!.currentCard!.english;
    
    await new Promise(f => setTimeout(f, 3000));
    this.correctAnswerMessage = "";
    this.correctAnswer = "";
    
    this.$emit('next', true);
  }
}
</script>

<style scoped>
.card-color {
  background-color: #B6FFCE !important;
  border-color: transparent;
}

.flip-enter-active {
  transition: all 0.4s ease;
}

.flip-leave-active {
  display: none;
}

.flip-enter, .flip-leave {
  transform: rotateY(180deg);
  opacity: 0;
}

.flip-button {
  position: absolute;
  right: 0;
  top: 0;
  padding: 10px 15px;
  opacity: .4;
  transition: all 0.5s ease;
}

.flip-button:hover {
  opacity: 1;
  transform: rotate(360deg);
}

.button-nav {
  background-color: transparent !important;
  color: inherit !important;
  border: none;
}

.button-nav :hover {
  background-color: transparent !important;
}
</style>