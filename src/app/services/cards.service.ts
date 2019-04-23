import { Injectable } from '@angular/core';
import { CardTypes, CardSubTypes } from '../interfaces/cards.interface';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private cardTypes : CardTypes[] = [
    {
      cardTypeId : 0,
      cardTypeName : "Seleccione..."
    },
    {
      cardTypeId : 1,
      cardTypeName : "Pokémon"
    },
    {
      cardTypeId : 2,
      cardTypeName : "Entrenador"
    },
    {
      cardTypeId : 3,
      cardTypeName : "Energía"
    }
  ]

  private cardSubTypes : CardSubTypes[] = [
    {
      cardSubTypeId : 1,
      cardSubTypeName : "Fuego",
      cardTypeId : 1
    },
    {
      cardSubTypeId : 2,
      cardSubTypeName : "Agua",
      cardTypeId : 1
    },
    {
      cardSubTypeId : 3,
      cardSubTypeName : "Planta",
      cardTypeId : 1
    },
    {
      cardSubTypeId : 4,
      cardSubTypeName : "Eléctrico",
      cardTypeId : 1
    },
    {
      cardSubTypeId : 5,
      cardSubTypeName : "Pelea",
      cardTypeId : 1
    },
    {
      cardSubTypeId : 6,
      cardSubTypeName : "Normal",
      cardTypeId : 1
    },
    {
      cardSubTypeId : 7,
      cardSubTypeName : "Psíquico",
      cardTypeId : 1
    },
    {
      cardSubTypeId : 8,
      cardSubTypeName : "Metal",
      cardTypeId : 1
    },
    {
      cardSubTypeId : 9,
      cardSubTypeName : "Siniestro",
      cardTypeId : 1
    },
    {
      cardSubTypeId : 10,
      cardSubTypeName : "Dragón",
      cardTypeId : 1
    },
    {
      cardSubTypeId : 11,
      cardSubTypeName : "Hada",
      cardTypeId : 1
    },
    {
      cardSubTypeId : 12,
      cardSubTypeName : "Soporte",
      cardTypeId : 2
    },
    {
      cardSubTypeId : 13,
      cardSubTypeName : "Objeto",
      cardTypeId : 2
    },
    {
      cardSubTypeId : 14,
      cardSubTypeName : "Herramienta",
      cardTypeId : 2
    },
    {
      cardSubTypeId : 15,
      cardSubTypeName : "Estadio",
      cardTypeId : 2
    },
    {
      cardSubTypeId : 16,
      cardSubTypeName : "Básica",
      cardTypeId : 3
    },
    {
      cardSubTypeId : 17,
      cardSubTypeName : "Especial",
      cardTypeId : 3
    }
  ];

  constructor() { }

  getCardTypes() {
    return this.cardTypes;
  }

  getCardSubTypes(cardTypeId : number) {
    let cardSubTypes : CardSubTypes[] = [];
    for(let cardSubType of this.cardSubTypes) {
      if(cardTypeId == 0) {
        break;
      }
      let cardType = cardSubType.cardTypeId;
      if(cardType == cardTypeId) {
        cardSubTypes.push(cardSubType);
      }
    }
    return cardSubTypes;
  }
}
