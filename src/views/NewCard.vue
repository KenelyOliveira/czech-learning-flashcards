<!-- <template>
     <div class="flashcard-form">
      
      <button v-on:click="isAddingNewCard = true" v-if="!isAddingNewCard">Add</button>
      <span class="error" v-show="error">Oops! Flashcards need a front and a back.</span>

      <template v-if="isAddingNewCard">
        <label for="front">Czech
          <input v-model.trim="newFront" type="text" id="front">
        </label>
        <br>
        <label for="back">English
          <input v-on:keypress.enter="addNew" v-model.trim="newBack" type="text" id="back">
        </label>
        <br>
        <button v-on:click="addNew">Add a New Card</button>
      </template>

    </div>
</template>
addNew(): void{
      if(!this.newFront || !this.newBack) {
        this.error = true;
      } else {
        this.cards.push({
          front: this.newFront,
          back: this.newBack,
          flipped: false
        });
        
        this.newFront = '';
        this.newBack = '';
        this.error = false;
      }
    } -->
