export enum Answer {
  NoAnswer,
  Wrong,
  Correct,
  DontKnow
}

export interface CardModel {
  czech: string;
  english: string;
  type: string;
  flipped: boolean;
  tags: string[];
  answer: Answer;
}

export function getCards(): CardModel[] {
  return cards;
}

const cards = [
  {
    czech: "Dobrý den",
    english: "Hello",
    type: "",
    flipped: false,
    tags: [],
    answer: Answer.NoAnswer,
  },
  {
    czech: "Odkud jste?",
    english: "Where are you from?",
    type: "",
    flipped: false,
    tags: [],
    answer: Answer.NoAnswer,
  },
  {
    czech: "Mějte se hezky.",
    english: "Have a nice day",
    type: "",
    flipped: false,
    tags: [],
    answer: Answer.NoAnswer,
  },
  {
    czech: "Na shledanou.",
    english: "Goodbye",
    type: "",
    flipped: false,
    tags: [],
    answer: Answer.NoAnswer,
  },
];
