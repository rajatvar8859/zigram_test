import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatChip } from '@angular/material/chips';

@Component({
  selector: 'app-category-type',
  templateUrl: './category-type.component.html',
  styleUrls: ['./category-type.component.scss']
})
export class CategoryTypeComponent implements OnInit {

  constructor() { }

  @Input() completeData
  @Output() getChipData = new EventEmitter(null);

  ngOnInit() {
    console.log(this.completeData)
  }

  chipSelected(chip: MatChip, item) {
    chip.select()
    this.getChipData.emit({ value: chip.value.trim(), categoryKey: item })
  }

}