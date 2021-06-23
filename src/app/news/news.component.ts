import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

names:string="hello nirmaan students";
salary:number=540000;
rateOfinterest=0.25;
today=new Date();

value:number=20;

  constructor() { }

  ngOnInit(): void {
  }

}
