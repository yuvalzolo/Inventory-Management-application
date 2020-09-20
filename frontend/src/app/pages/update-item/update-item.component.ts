import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../task.service';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.scss']
})
export class UpdateItemComponent implements OnInit {
  item: any[] = [];
  names: any[] = [];
  name: string;
  descriptions: any[] = [];
  description: string;
  counts: any[] = [];
  count: number;
  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.taskService.getItems().subscribe((items: any[]) => {
        this.item = items;
        console.log(this.item);
      }
    );
  }
  // tslint:disable-next-line:typedef
  getItemById(id: string){
    this.taskService.getItem(id).subscribe((response: any) => {
      console.log(response.name);
      this.item.push('name: ' + response.name);
      this.item.push('description: ' + response.description);
      this.item.push('count: ' + response.count);
      this.name = response.name;
      this.names.push(this.name);
      this.description = response.description;
      this.descriptions.push(this.description);
      this.count = response.count;
      this.counts.push(this.count);
    });
  }
  // tslint:disable-next-line:typedef
  updateItem(id: string, name: string, description: string, count: number){
    this.getAllItems();
    this.taskService.updateItemById(id, name, description, count).subscribe((response: any) => {
      console.log(response);
    });
    window.location.replace('/');
  }
  // tslint:disable-next-line:typedef
  getAllItems(){
    this.taskService.getItems().subscribe((response: any) => {
      console.log('this is all items');
      console.log(response);
    });
  }
}
