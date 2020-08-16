import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }

  addtask(newtask)
  {
    return this.http.post("http://localhost:3000/task", newtask);
  }
  gettask(date,userid)
  {
    return this.http.get("http://localhost:3000/task/"+date+"/"+userid);
  }
  updatedelivery(detail)
  {
    return this.http.put("http://localhost:3000/task",detail);
  }
  updatestatus(detail)
  {
    return this.http.put("http://localhost:3000/task/deliver",detail);
  }
}
