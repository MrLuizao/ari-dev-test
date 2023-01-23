import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockServiceService {

  constructor( private httpClient: HttpClient ) { }

  getExampleLvr(){
    this.httpClient.get('')
  }
  
}
