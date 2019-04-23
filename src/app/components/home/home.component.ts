import { Component, OnInit } from '@angular/core';
import { CardsService } from '../../services/cards.service';
import { CardTypes, CardSubTypes } from '../../interfaces/cards.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  cardTypes : CardTypes[] = [];
  cardSubTypes : CardSubTypes[] = [];
  cardTypeSelected : boolean = false;

  constructor( private _cardsService : CardsService ) { }

  ngOnInit() {
    this.cardTypes = this._cardsService.getCardTypes();
  }

  getCardSubTypes(cardTypeId : number) {
    this.cardSubTypes = this._cardsService.getCardSubTypes(cardTypeId);
    if(this.cardSubTypes.length >= 1) {
      this.cardTypeSelected = true;
    } else {
      this.cardTypeSelected = false;
    }
  }

}
