import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';

const filters =
  [
    (item: WishItem) => item,
    (item: WishItem) => !item.isComplete,
    (item: WishItem) => item.isComplete
  ];



@Component({
  selector: 'wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})
export class WishFilterComponent implements OnInit
{
  @Output() filter =new EventEmitter<any>()

  /** EventEmitter facilitates communication between the child and parent components
 * 
 */


constructor(){}
ngOnInit(): void {
    this.changeFilter('0')
}

listFilter: any  = '0';

changeFilter(value : any) /*We emit filter value here whenever filter is changed */
{
  this.filter.emit(filters[value])
}
}
