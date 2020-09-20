import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../task.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-get-item',
  templateUrl: './get-item.component.html',
  styleUrls: ['./get-item.component.scss']
})
export class GetItemComponent implements OnInit {
  item: any[] = [];
  constructor(private taskService: TaskService) { }
  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  getItemById(id: string){
    this.taskService.getItem(id).subscribe((response: any) => {
      console.log(response.name);
      this.item.push('name: ' + response.name);
      this.item.push('description: ' + response.description);
      this.item.push('count: ' + response.count);
    });
  }

}
