import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  private apiUrl = environment.API_URL;

}
