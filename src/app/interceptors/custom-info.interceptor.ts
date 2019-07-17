import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CustomInfo } from '../models/custom-info.model';

@Injectable()
export class CustomInfoInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url === environment.API_URL + '/custom-info') {
      return of(new HttpResponse({ status: 200, body: this.generateData() }));
    }

    return next.handle(request);
  }


  generateData(): CustomInfo[] {
    let body = [];
    for (let i = 0; i < 10; i++) {
      body.push(this.getRandomCustomInfo(i + 1))
    };

    return body;
  }

  getRandomCustomInfo(userId: number): CustomInfo {
    const rideInGroupOptions = ['Aways', 'Sometimes', 'Never'];
    return {
      userId: userId,
      rideInGroup: rideInGroupOptions[this.getRandomInt(0, 2)],
      dayOfTheWeek: {
        sun: Math.random() < .5,
        mon: Math.random() < .5,
        tue: Math.random() < .5,
        wed: Math.random() < .5,
        thu: Math.random() < .5,
        fri: Math.random() < .5,
        sat: Math.random() < .5
      }
    }
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}