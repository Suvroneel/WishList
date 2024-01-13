import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

import { WishItem } from '../../shared/models/wishItem';

@Component({
  selector: 'add-wish-form',
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css'
})
export class AddWishFormComponent implements OnInit
{
  
@Output() addWish = new EventEmitter<WishItem>();
/** EventEmitter facilitates communication between the child and parent components
 * 
 */

constructor(){ }
  ngOnInit(): void {
      
  }


  newWishText = '';

  addNewWish()//add wish to the items array above & clear textbox
  {
    //adding new wish item in our array
    

    this.addWish.emit(new WishItem(this.newWishText))
    this.newWishText = '';

  }

}
