import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TaskService} from '../../task.service';

@Component({
  selector: 'app-remove-item',
  templateUrl: './remove-item.component.html',
  styleUrls: ['./remove-item.component.scss']
})
export class RemoveItemComponent implements OnInit {
  item: any[] = [];
  constructor(private taskService: TaskService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  removeItemById(id: string){
    this.taskService.removeItem(id).subscribe((response: any) => {
      console.log(response.name);
      this.item.push('name: ' + response.name);
      this.item.push('description: ' + response.description);
      this.item.push('count: ' + response.count);
    });
    window.location.replace('/');
  }

}
