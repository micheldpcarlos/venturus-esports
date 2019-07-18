import { Component, OnInit } from '@angular/core';
import { TableDataService } from 'src/app/services/table-data.service';
import { TableData } from 'src/app/models/table-data.model';
import { Week } from 'src/app/models/custom-info.model';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  private tableData: TableData[];
  faTrashAlt = faTrashAlt;

  constructor(private tableDataService: TableDataService) { }

  ngOnInit() {
    this.tableDataService.userData$.subscribe(result => {
      this.tableData = result;
    })
  }

  removeUser(id: number) {
    this.tableDataService.removeUser(id);
  }

}
