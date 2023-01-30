import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ModelDataResponse, ResponseDataInterface } from '../Interfaces/data.interface';

@Injectable({
  providedIn: 'root'
})
export class MockServiceService {

  constructor( private httpClient: HttpClient ) { }

  getExampleLvr():Observable <ModelDataResponse[]>{
    return this.httpClient.get<ResponseDataInterface>('https://dummy.restapiexample.com/api/v1/employees')
    .pipe(
      map( (alias)=> alias.data)
    )
  }
  
}
