import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  checkAvaliability(date: any, time: any) {
    console.log('http://localhost:8080/resource/1337/available?datetime=' + date + 'T' + time + 'Z')
    //return this.http.get('http://localhost:8080/resource/1337/available?datetime=' + date + 'T' + time + 'Z')

  }
}
