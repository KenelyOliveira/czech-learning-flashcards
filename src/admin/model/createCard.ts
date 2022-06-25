export enum EType {
  Introduction = 'Introduction',
  Numbers = 'Numbers',
  Professions = 'Professions',
  Directions = 'Directions',
  FoodsAndDrinks = 'FoodsAndDrinks'
}

export class CreateCardTranslationModel {
    language: string;
    translation: string;

    constructor(language: string, translation: string) {
        this.language = language;
        this.translation = translation;
      }
}

export class CreateCardModel {
    term: string;
    type: string;
    translations: CreateCardTranslationModel[];
    tags: string[];
    
    constructor(term: string, type: string, translations: CreateCardTranslationModel[], tags: string[]) {
      this.term = term;
      this.type = type;
      this.translations = translations;
      this.tags = tags;
    }
}