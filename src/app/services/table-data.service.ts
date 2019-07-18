import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TableData } from '../models/table-data.model';
import { SportsService } from './sports.service';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {

  public userData$: BehaviorSubject<TableData[]> = new BehaviorSubject([]);

  constructor(private sportsService: SportsService) {


    this.sportsService.getTableData().subscribe(result => {
      this.userData$.next(result);
    });
  }

  public removeUser(id: number) {
    const users: TableData[] = this.userData$.getValue();
    const userIndex: number = users.findIndex(user => user.userId === id);
    users.splice(userIndex, 1);

    this.userData$.next(users);
  }

  public addUser(userData: TableData) {
    const users: TableData[] = this.userData$.getValue();
    users.push(userData);
    this.userData$.next(users);
  }
}
