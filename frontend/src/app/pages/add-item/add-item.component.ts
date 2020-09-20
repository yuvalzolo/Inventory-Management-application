import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../task.service';
import {TaskViewComponent} from '../task-view/task-view.component';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  createItem(name: string, description: string, count: number){
    this.taskService.newItem(name, description, count).subscribe((response: any) => {
      console.log(response);
    });
    window.location.replace('/');
  }
}
