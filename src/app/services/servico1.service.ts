
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Servico1Service {

  constructor(private http:HttpClient) {
  }

  public getPhotos():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }

  //Metodo para chamar as fotos by ID Album
  public getFotosByAlbum(id):Observable<any>
  {
    console.log('servico id =', id);
    console.log('https://jsonplaceholder.typicode.com/photos?albumId='+id);
    //return this.http.get('https://jsonplaceholder.typicode.com/photos');
    return this.http.get('https://jsonplaceholder.typicode.com/photos?albumId='+id);
  }
}
