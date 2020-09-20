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
      console.log(response);
    });
    window.location.replace('/');
  }
}
