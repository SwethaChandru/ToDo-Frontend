import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {TaskService} from '../../shared/task.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  form:FormGroup
  id:string

  constructor(private taskservice:TaskService,private router:Router) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      'name':new FormControl(null,{validators:[Validators.required]}),
      'date':new FormControl(null,{validators:[Validators.required]}),
      'desc':new FormControl(null,{validators:[Validators.required]})
    })
  }

  onAddTask()
  {
    
    if(this.form.invalid)
    {
      return;
    }
    console.log(localStorage.getItem('id'));
    let newTask={
      name:this.form.value.name,
      date:this.form.value.date.toDateString(),
      userid:JSON.parse(localStorage.getItem('id')),
      description:this.form.value.desc
    }
    console.log(newTask);
    this.taskservice.addtask(newTask).subscribe((res:any)=>{
      console.log(res);
      this.router.navigate(['/schedule']);
    },err=>{
      alert(err.error.message);
    })

  }

}
