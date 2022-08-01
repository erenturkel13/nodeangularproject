import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-simplecomponent',
  templateUrl: './simplecomponent.component.html',
  styleUrls: ['./simplecomponent.component.scss']
})
export class SimplecomponentComponent implements OnInit {

  constructor(private service: ApiserviceService) { }

  theResponse='Currently nothing';

  ngOnInit(): void {
  }

  getSomething(): void {
    this.service.getAllData().subscribe((res) => {
      this.theResponse = res.message[0].name;
      console.log(res);
      
    });
  }
}
