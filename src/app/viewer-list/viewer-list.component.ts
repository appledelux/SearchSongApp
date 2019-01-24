import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProvidersService } from '../services/providers.service';

@Component({
  selector: 'app-viewer-list',
  templateUrl: './viewer-list.component.html',
  styleUrls: ['./viewer-list.component.css']
})
export class ViewerListComponent implements OnInit {

  textSongControl: FormControl;
  exchangeCurrencyControl: FormControl;
  listSongs: Array<any>;
  listCurrency: Array<any>;
  currencyValue: string;
  listExchange: Array<any>;

  constructor(private providersService: ProvidersService) {
    this.textSongControl = new FormControl('');
    this.exchangeCurrencyControl = new FormControl('');
    this.listSongs = new Array<any>();
    this.listCurrency = new Array<any>();
    this.currencyValue = 'USD';
    this.listExchange = new Array<any>();
  }

  ngOnInit() {
    this.getListCurrency();
    this.exchangeCurrencyControl.valueChanges.subscribe(data => {
      this.currencyValue = data;
    });
  }

  changeTrack(price) {
    return price * this.listExchange[this.currencyValue];
  }

  get currency() {
    return this.currencyValue;
  }
  findSongs(value) {
    this.providersService.callSearch(value).then(data => this.listSongs = data);
  }

  getListCurrency() {
    this.providersService.getExchange(this.currencyValue).then(data => {
      this.listExchange = data;
      this.listCurrency = Array.from(Object.keys(data));
    }
    );
  }


}
