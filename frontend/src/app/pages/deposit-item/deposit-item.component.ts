import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../task.service';

@Component({
  selector: 'app-deposit-item',
  templateUrl: './deposit-item.component.html',
  styleUrls: ['./deposit-item.component.scss']
})
export class DepositItemComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  depositItem(id: string, count: number){
    this.taskService.depositItemById(id, count).subscribe((response: any) => {
      console.log(response);
    });
    window.location.replace('/');
  }

}
