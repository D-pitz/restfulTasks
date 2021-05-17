import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
    getTasks(){
      return this._http.get<{title:string, description:string}[]>('/tasks')
    }
    createTask(task){
      return this._http.post('/new/task', task)
    }
    showTask(task){
      return this._http.get<{title: string, description: string}>(`/show/${task._id}`)
    }
    editTask(task){
      return this._http.get(`/edit/${task._id}`, task)
    }
    updateTask(task){
      return this._http.put(`/update/${task._id}`, task)
    }
    deleteTask(task){
      return this._http.delete(`/delete/${task._id}`)
    }
}
