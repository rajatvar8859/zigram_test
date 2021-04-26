import { Component, OnInit, Input } from '@angular/core';
import { MatChip } from '@angular/material/chips';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {

  constructor() { }
  @Input() categoryDetail

  ngOnInit() {
  }

}
