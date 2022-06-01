import { AnswerType, CardAndReplyModel, getCards } from "@/model/cards";

export class Store {
    type: string | undefined;
    currentCard: CardAndReplyModel | undefined;

    cards: CardAndReplyModel[] | null = null;
    cardTypes: string[] | null = null;

    allCards = getCards();

    get isAnswerInvalid() : boolean {
        return this.currentCard?.answer?.length !== null && this.currentCard!.answer.length <= 0;
    }

    fetchAndShuffleCards(type: string) : CardAndReplyModel[] {
        let data = this.shuffle(this.allCards.map((card) => new CardAndReplyModel(card, false, AnswerType.NoAnswer, "")));
        if (type.length > 0) {
            data = data.filter((a) => a.type === type);
        }
        return data;
    }

    shuffle(array: CardAndReplyModel[]) {
        let currentIndex = array.length,  randomIndex;
      
        while (currentIndex != 0) {
      
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }
}

export function createStore() : Store {
    const store = new Store();
    store.cards = store.fetchAndShuffleCards("");
    store.cardTypes = store.allCards.map((card) => card.type).filter((value, index, arr) => arr.indexOf(value) === index);

    return store;
}