export interface Cards {
  cardName : string;
  cardImage : string;
  cardEdition : string;
  cardNumber : number;
  cardType : string;
  cardSubType : string;
}

export interface CardTypes {
  cardTypeId : number;
  cardTypeName : string;
};

export interface CardSubTypes {
  cardSubTypeId : number;
  cardSubTypeName : string;
  cardTypeId : number;
};
