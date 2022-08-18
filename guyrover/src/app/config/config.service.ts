import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({providedIn:'root'})
export class sendEmailService {
  constructor(private http: HttpClient) { }
  api_url :string = 'https://h7652pzhe9.execute-api.ap-northeast-1.amazonaws.com/v2/send'

  sendEmail(model:any):Observable<any>{
    const headers = {'content-type':'application/json'};
    const body = model;
    console.log('sending content is below')
    console.log(model)
    return this.http.post(this.api_url,body,{'headers':headers})
  }
}

