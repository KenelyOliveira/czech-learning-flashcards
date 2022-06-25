export enum AnswerType {
  NoAnswer = 0,
  DontKnow = 1,
  Skip = 2,
  Wrong = 3,
  Correct = 4
}

export class CardModel {
  id: number;
  czech: string;
  english: string;
  type: string;
  tags: string[];
  
  constructor(id: number, czech: string, english: string, type: string, tags: string[]) {
    this.id = id;
    this.czech = czech;
    this.english = english;
    this.type = type;
    this.tags = tags;
  }
}

export class CardAndReplyModel extends CardModel {
  isFlipped!: boolean;
  answerType!: AnswerType;
  answer: string;

  constructor(card: CardModel, isFlipped: boolean, answerType: AnswerType, answer: string) {
    super(card.id, card.czech, card.english, card.type, card.tags);
    
    this.isFlipped = isFlipped;
    this.answerType = answerType;
    this.answer = answer;
  }
}
import json from '../data/cards.json'

export function getCards(): CardModel[] {
  return json;
}