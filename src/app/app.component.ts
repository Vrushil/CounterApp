import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CounterApp';

  count:number=0;


  onIncrement=()=>{
    if(this.count<10)
  {  this.count= this.count+1
  }
else this.count=10;
}

  onDecrement=()=>{
    if(this.count>0)
    {
    this.count= this.count-1}
  else{
    this.count=0
  }
  }
  
  onReset=()=>{this.count= 0}


}
