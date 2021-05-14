import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
    getTasks(){
      return this._http.get('/tasks')
    }
    createTask(task){
      return this._http.post('/new/task', task)
    }
    showTask(task){
      return this._http.get(`/show/${task._id}`)
    }
    updateTask(task){
      return this._http.put(`/update/${task._id}`, task)
    }
    deleteTask(task){
      return this._http.delete(`/delete/${task._id}`)
    }
}
