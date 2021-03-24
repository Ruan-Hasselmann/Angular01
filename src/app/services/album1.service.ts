import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Album1Service {

  constructor(private http:HttpClient) {

  }

  public getAlbuns():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }
}
