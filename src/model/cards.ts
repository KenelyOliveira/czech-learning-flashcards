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

export function getCards(): CardModel[] {
  return cards;
}

const cards = [
  {
    id: 1,
    czech: "Dobrý den",
    english: "Hello",
    type: "Introduction",
    tags: ["formal"],
  },
  {
    id: 2,
    czech: "Odkud jste?",
    english: "Where are you from?",
    type: "Introduction",
    tags: [],
  },
  {
    id: 3,
    czech: "Mějte se hezky",
    english: "Have a nice day",
    type: "Introduction",
    tags: [],
  },
  {
    id: 4,
    czech: "Na shledanou",
    english: "Goodbye",
    type: "Introduction",
    tags: [],
  },
  {
    id: 5,
    czech: "Jak se máte?",
    english: "How are you?",
    type: "Introduction",
    tags: ["formal"],
  },
  {
    id: 6,
    czech: "Sto čtyřicet šest",
    english: "146",
    type: "Numbers",
    tags: [],
  },
  {
    id: 7,
    czech: "Dvacet jedna",
    english: "21",
    type: "Numbers",
    tags: [],
  },
  {
    id: 8,
    czech: "Čtrnáct",
    english: "14",
    type: "Numbers",
    tags: [],
  },
  {
    id: 9,
    czech: "Sedm",
    english: "7",
    type: "Numbers",
    tags: [],
  },
  {
    id: 10,
    czech: "Devět",
    english: "9",
    type: "Numbers",
    tags: [],
  },
  {
    id: 11,
    czech: "Úředník",
    english: "Clerk",
    type: "Professions",
    tags: ["masculine"],
  },
  {
    id: 12,
    czech: "Úřednice",
    english: "Clerk",
    type: "Professions",
    tags: ["feminine"],
  },
  {
    id: 13,
    czech: "Dělník",
    english: "Labourer",
    type: "Professions",
    tags: ["masculine"],
  },
  {
    id: 14,
    czech: "Dělnice",
    english: "Labourer",
    type: "Professions",
    tags: ["feminine"],
  },
  {
    id: 15,
    czech: "Učitel",
    english: "Teacher",
    type: "Professions",
    tags: ["masculine"],
  },
  {
    id: 16,
    czech: "Učitelka",
    english: "Teacher",
    type: "Professions",
    tags: ["feminine"],
  },
];
