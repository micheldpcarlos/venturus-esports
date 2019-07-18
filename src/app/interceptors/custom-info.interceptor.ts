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
    if (request.url === 'custom-mock-info/custom-info') {
      return of(new HttpResponse({ status: 200, body: this.generateData() }));
    }
    return next.handle(request);
  }

  /**
   * Return a CustomInfo array populated with ids from 0 to 9 and random data
   */
  generateData(): CustomInfo[] {
    let body = [];
    for (let i = 0; i < 10; i++) {
      body.push(this.getRandomCustomInfo(i + 1))
    };
    return body;
  }

  /**
  * Return a CustomInfo Object with random data
  * @param userId : userId inserted into the object
  */
  getRandomCustomInfo(userId: number): CustomInfo {
    const rideInGroupOptions = ['Aways', 'Sometimes', 'Never'];
    const dayOfTheWeekOptions = [
      { sun: true, mon: false, tue: false, wed: false, thu: false, fri: false, sat: true },
      { sun: false, mon: true, tue: true, wed: true, thu: true, fri: true, sat: false },
      { sun: false, mon: true, tue: false, wed: true, thu: false, fri: true, sat: false },
      { sun: false, mon: true, tue: true, wed: true, thu: false, fri: false, sat: false },
      { sun: true, mon: false, tue: false, wed: false, thu: false, fri: true, sat: false }

    ];

    return {
      userId: userId,
      rideInGroup: rideInGroupOptions[this.getRandomInt(0, 2)],
      dayOfTheWeek: dayOfTheWeekOptions[this.getRandomInt(0, 4)]
    }
  }

  /**
   * Return a random integer between(including) received min and max
   */
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}