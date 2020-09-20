import { Injectable } from '@angular/core';
import {WebrequestService} from './webrequest.service';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webrequestService: WebrequestService) { }
  // tslint:disable-next-line:typedef
  newItem(name: string, description: string, count: number){
    return this.webrequestService.post('items', {name, description, count});
  }
  // tslint:disable-next-line:typedef
  getItems(){
    return this.webrequestService.get('items');
  }
  // tslint:disable-next-line:typedef
  getItem(id: string){
    return this.webrequestService.get('items/' + id);
  }
  // tslint:disable-next-line:typedef
  removeItem(id: string){
    return this.webrequestService.delete('items/' + id);
  }
  // tslint:disable-next-line:typedef
  updateItemById(id: string, name: string, description: string, count: number){
    return this.webrequestService.patch('items/' + id, {name, description, count});
  }
  // tslint:disable-next-line:typedef
  withrawItemByid(id: string, count: number){
    return this.webrequestService.post(`items/${id}/${count}`, {id, count});
  }
  // tslint:disable-next-line:typedef
  depositItemById(id: string, count: number){
    return this.webrequestService.patch(`items/${id}/${count}`, {id, count});
  }
}
