import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, pluck, catchError, } from 'rxjs/operators';
import { environment } from '../../../environments/environment'
import { forkJoin, of } from 'rxjs';

let API_URL = `${environment.API_URL}`;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getCategoryDetail(data) {
    let param
    if (data.categoryKey == 'strAlcoholic') param = 'a'
    if (data.categoryKey == 'strGlass') param = 'g'
    if (data.categoryKey == 'strCategory') param = 'c'
    if (data.categoryKey == 'strIngredient1') param = 'i'

    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php', {
      params: {
        [param]: data.value.split(" ").join("_")
      }
    }).pipe(pluck('drinks'))

  }

  public getSearch(searchValue, param, key) {
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php', {
      params: {
        [param]: searchValue.trim()
      }
    }).pipe(pluck(key))

  }
}
