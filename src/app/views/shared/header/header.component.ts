import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, distinctUntilKeyChanged, switchMap, map, tap, filter, take } from 'rxjs/operators';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private service: DataService) { }
  selectedCategory = "Select Category"
  selectedItem
  search = new FormControl()
  searchData$

  category = [
    { name: 'Coctail', param: "s", key: 'drinks' },
    { name: 'Ingredient', param: "i", key: 'ingredients' }
  ]

  get getPlaceholder() {
    if (this.selectedCategory == "Select Category") {
      return "First select the category"
    } else {
      return `Search for ${this.selectedCategory}`
    }
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.searchData$ = this.search.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      map(res => res.trim()),
      filter(res => res != ''),
      switchMap(res => {
        return this.service.getSearch(res, this.selectedItem.param, this.selectedItem.key).pipe(
          take(1),
          map(restult => restult)
        )
      })
    )
  }

  public selectCategory(item) {
    this.selectedCategory = item.name
    this.selectedItem = item
  }


}
