import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../task.service';

@Component({
  selector: 'app-withdraw-item',
  templateUrl: './withdraw-item.component.html',
  styleUrls: ['./withdraw-item.component.scss']
})
export class WithdrawItemComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  withdrawItem(id: string, count: number){
    this.taskService.withrawItemByid(id, count).subscribe((response: any) => {
      if (response === null || response === undefined){
        alert('Item not found');
      }
      else{
        if (response.count === 0){
          this.taskService.removeItem(id).subscribe((deleteresponse: any) => {
            console.log(deleteresponse);
          });
          alert('The new count is 0 - the item has been removed from stock');
          window.location.replace('/');
        }
        else {
          if (response.description === 'negative item') {
            alert('Unable to withdraw more items then you have in stock \n' + `current count: ${response.count}`);
          } else {
            window.location.replace('/');
          }
        }
      }
    });
  }
}
