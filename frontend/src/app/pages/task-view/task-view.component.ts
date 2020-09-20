import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../task.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { Location} from '@angular/common';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {
  items: any[];
  constructor(private taskService: TaskService, private route: ActivatedRoute, public router: Router, public location: Location) { }
  ngOnInit(): void {
    this.taskService.getItems().subscribe((response: any) => {
      this.items = response;
    });
  }
}
