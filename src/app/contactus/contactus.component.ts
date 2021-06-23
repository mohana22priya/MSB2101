import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  str:string="mohanapriya"

numbers:number[]=[10,20,30,40,50];

  n:number=100;
  name:string="Nirmaan org";
  imgurl:string="https://wallpapercave.com/wp/wp2596622.jpg";

  test(data:string):void{
       console.log("test is called:",data);
  }
  counter:number=1;
  increvalue()
  {
   this.counter++; //counter+1=1+1=2
  }
  status:boolean=true;
  changestatus()
  {
     this.status=!this.status;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
