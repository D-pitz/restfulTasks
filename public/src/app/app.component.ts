import { Component } from '@angular/core';
import { HttpService } from './http.service'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tasks'; 
  tasks:{title: string, description: string}[]
  task:{title: string, description: string}
  task_to_edit:{title: string, description: string}
  task_to_show:boolean= false
  constructor(private _httpService: HttpService){
    this.task = {title: '', description: ''}
    this.task_to_edit = {title: '', description: ''}
  }
  
  getTasks(){
    this.task = {title: '', description: ''}
    this._httpService.getTasks()
    .subscribe(data=>this.tasks = data)
  }
  createTask(){
    this._httpService.createTask(this.task)
    .subscribe(data=>{
    this.getTasks()  
    })
  }
  showTask(task){
    this._httpService.showTask(task)
    .subscribe(data=>this.task = data)
    this.task_to_show = true
  }
  editTask(task_to_edit){
    this.task_to_edit = task_to_edit
  }
  updateTask(){
    this._httpService.updateTask(this.task_to_edit)
    .subscribe(data=>{
      this.getTasks()
      this.task_to_edit = {title: '', description: ''}
    })
  }
  deleteTask(task){
    this._httpService.deleteTask({_id: task})
    .subscribe(data=>{
    this.getTasks()
    })  
  }
}
