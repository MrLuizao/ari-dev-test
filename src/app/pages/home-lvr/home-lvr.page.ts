import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelDataResponse } from 'src/app/Interfaces/data.interface';
import { MockServiceService } from 'src/app/services/mock-service.service';

@Component({
  selector: 'app-home-lvr',
  templateUrl: './home-lvr.page.html',
  styleUrls: ['./home-lvr.page.scss'],
})
export class HomeLvrPage implements OnInit {

  dataObservable$: Observable<ModelDataResponse[]> | undefined
  dataObservable: any;

  constructor( public mockService: MockServiceService ) { 

    setTimeout( ()=>{
      this.dataObservable$ = mockService.getExampleLvr();
      console.log('dataObservable$', this.dataObservable$);
    }, 3000)
    
  }

  ngOnInit(){}
  // ngOnInit() {
  //   this.mockService.getExampleLvr().subscribe( (resp)=>{
  //     this.dataObservable = resp;
  //     console.log('dataObservable', this.dataObservable);
  //   });
  // }

}
