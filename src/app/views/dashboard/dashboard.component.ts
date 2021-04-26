import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/core/services/data.service';
import { HttpClient } from '@angular/common/http';
import { map, take } from 'rxjs/operators';
import { forkJoin } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  completeData = []
  categoryDetail
  subscriptionList: Subscription[] = []

  constructor(private Router: Router, private dialog: MatDialog, private server: DataService, private http: HttpClient) { }

  ngOnInit() {

    let alcoholic = this.http.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list').pipe(map(res => res['drinks']))
    let glasses = this.http.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list').pipe(map(res => res['drinks']))
    let categories = this.http.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list').pipe(map(res => res['drinks']))
    let ingredients = this.http.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list').pipe(map(res => res['drinks']))

    forkJoin(alcoholic, glasses, categories, ingredients).subscribe((res) => {
      this.completeData.push({ 'name': 'Alcoholic', 'drinks': res[0], 'categoryKey': 'strAlcoholic' })
      this.completeData.push({ 'name': 'Glasses', 'drinks': res[1], 'categoryKey': 'strGlass' })
      this.completeData.push({ 'name': 'Categories', 'drinks': res[2], 'categoryKey': 'strCategory' })
      this.completeData.push({ 'name': 'Ingredients', 'drinks': res[3], 'categoryKey': 'strIngredient1' })
      console.log(this.completeData)
    }, (err) => {
      console.log(err)
    })

  }

  getChipData(data) {
    this.server.getCategoryDetail(data).pipe(
      take(1)
    ).subscribe(res => {
      this.categoryDetail = res
    })
  }

  ngOnDestroy() {
    for (let subscription of this.subscriptionList) {
      subscription.unsubscribe()
    }
  }

}
