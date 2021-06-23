import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  receivedData:any[]=[];

  constructor(private ds:DataService) { }

  ngOnInit(): void {
    this.ds.makeHttpReq().subscribe((result)=>{
      console.log(result);
      this.receivedData=result;
    })
  }

}
