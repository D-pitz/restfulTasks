import { Component } from '@angular/core';
import { HttpService } from './http.service'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Public'; 
  tasks:any
  task: any
  constructor(private _httpService: HttpService){
    this.task = {title: 'Select task!'}
  }
  
  getTasks(){
    this._httpService.getTasks()
    .subscribe(data=>this.tasks = data)
  }
  createTask(){
    this._httpService.createTask({title:'clean room', description:'in the house', completed:false})
    .subscribe(data=>{
    this.getTasks()  
    })
  }
  showTask(task){
    this._httpService.showTask(task)
    .subscribe(data=>this.task = data)
  }
  updateTask(task){
    this._httpService.updateTask({title:'cleaned', description: 'done', completed:true})
    .subscribe(data=>this.task = data)
  }
  deleteTask(task){
    this._httpService.deleteTask({_id: task})
    .subscribe(data=>{
    this.task = data
    this.getTasks()
    })  
  }
}
