import { AnswerType, CardAndReplyModel, CardModel, getCards } from "@/model/cards";

export class Store {
    type: string | undefined;
    currentCard: CardAndReplyModel | undefined;

    cards: CardAndReplyModel[] | null = null;

    allCards = getCards();

    get isAnswerInvalid() : boolean {
        return this.currentCard?.answer?.length !== null && this.currentCard!.answer.length <= 1;
    }
}

export function createStore() : Store {
    const store = new Store();
    store.cards = store.allCards.map((card) => new CardAndReplyModel(card, false, AnswerType.NoAnswer, ""));
    return store;
}