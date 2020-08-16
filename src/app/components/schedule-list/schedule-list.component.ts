import { Component, OnInit } from '@angular/core';
import{TaskService} from '../../shared/task.service';
import { withModule } from '@angular/core/testing';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.css']
})
export class ScheduleListComponent implements OnInit {

  date=new Date();
  id:string;
  todaystask:Array<any>=[];
  othertask:Array<any>=[];
  otherdate:string;
  value:string;
  taskStatus:boolean=false;
  todaystatus:boolean=false;

  constructor(private taskservice:TaskService) { }

  ngOnInit(): void {
    this.id=localStorage.getItem('id');
    console.log(this.id);
    this.taskservice.gettask(this.date.toDateString(),JSON.parse(this.id)).subscribe((res:any)=>{
      console.log(res);
      if(res.length===0)
      {
        this.todaystatus=false;
      }
      else
      {
        this.todaystatus=true;
      }
      this.todaystask=res;
    })
  }

  handleDOBChange(event){ 
    // var tomorrow = new Date();
    // tomorrow.setDate(tomorrow.getDate() + 1);
    // console.log(tomorrow.toDateString());
    console.log("enter");
    console.log(this.date.toDateString());
    this.otherdate=event.value.toDateString();
    console.log(event.value.toDateString());
    this.taskservice.gettask(event.value.toDateString(),JSON.parse(this.id)).subscribe((res:any)=>{
      console.log(res);
      if(res.length===0)
      {
        this.taskStatus=true;
      }
      else
      {
        this.taskStatus=false;
      }
      this.othertask=res;
    })
  }

  afterdeliverclick()
  {
    this.taskservice.gettask(this.otherdate,JSON.parse(this.id)).subscribe((res:any)=>{
      console.log(res);
      this.othertask=res;
    })
  }

  NotDeliver(id,date)
  {
    var tomorrow=new Date(date);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const detail={
      date:tomorrow.toDateString(),
      id:id
    }
    this.taskservice.updatedelivery(detail).subscribe((res:any)=>{
      console.log(res);
      window.location.reload();
    },err=>{
      alert(err.error.message);
    })
  }

  deliver(id)
  {
    const detail={
      id:id,
      status:"delivered"
    }
    this.taskservice.updatestatus(detail).subscribe((res:any)=>{
      console.log(res);
      this.afterdeliverclick();
    },err=>{
      alert(err.error.message);
    })
  }


}
