import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';


const API_URL = {
  ITUNES: 'https://itunes.apple.com/search?',
  EXCHANGE: 'https://api.exchangeratesapi.io/latest?'
};

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  constructor(private jsonp: Jsonp
  ) { }

  public callSearch(term): Promise<any> {
    return this.jsonp.request(`${API_URL.ITUNES}entity=musicTrack&media=music&term=${term}&callback=JSONP_CALLBACK`)
      .toPromise()
      .then(data => data.json())
      .then(dataJson => dataJson.results)
      .catch(err => this.throwError(err));
  }

  public getExchange(base): Promise<any> {
    return fetch(`${API_URL.EXCHANGE}base=${base}`)
      .then((resp) => resp.json())
      .then((data) => data.rates)
      .catch(err => this.throwError(err));
  }

  private throwError(error) {
    return Promise.reject(error.message || error);
  }
}
