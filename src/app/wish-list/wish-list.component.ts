import { Component, OnInit,Input } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';


@Component({
  selector: 'wish-list',
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})

export class WishListComponent implements OnInit

{
  @Input() wishes : WishItem[]=[]
  /*
   * using OnInit is like the step where you set up your new home after moving in.
   *  It's a designated place in Angular where you can organize tasks that need to happen 
   * right after a component is created, making your code cleaner and more maintainable.
   */
  constructor(){ }

  ngOnInit(): void {}



  toggleItem(item: WishItem)//item  or any other name ; WishItem class name
  {

    item.isComplete = !item.isComplete;

    /*This line of code is flipping the value of item.isComplete.
    If it was true, it becomes false, and if it was false, it becomes true. 
    It's a concise way of toggling a boolean variable between true and false

    difficult to digest
   */
    console.log(item);
  }

}
