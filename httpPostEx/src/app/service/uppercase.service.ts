import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Upperacse } from '../model/uppercase.model';

@Injectable({
  providedIn: 'root'
})
export class UppercaseService {

  constructor(private http:HttpClient) { }

  public convertToUppercase(data:Upperacse):Observable<Upperacse>{
    return this.http.post<Upperacse>(`http://test-routes.herokuapp.com/test/uppercase`, data);
  };
}
