import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogsInfoService {

  readonly ROOT_URL = 'https://dog.ceo/api/breed';

  constructor(private http: HttpClient) { }

   getAllDogs():Observable<any> {
    return this.http.get<any>(this.ROOT_URL + 's/list/all');
  }

  getImage(breed):Observable<any> {
    return this.http.get<any>(this.ROOT_URL +"/"+ breed +'/images/random');
  }

}
