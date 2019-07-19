import { Component, OnInit } from '@angular/core';
import { TableDataService } from 'src/app/services/table-data.service';
import { TableData } from 'src/app/models/table-data.model';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  private tableData: TableData[];
  public filteredTableData: TableData[];

  faTrashAlt = faTrashAlt;
  faSearch = faSearch;

  search = new FormControl('');

  constructor(private tableDataService: TableDataService) { 
    this.search.valueChanges.subscribe(result => {
      this.filterTableData(result);
    })
  }

  ngOnInit() {
    this.tableDataService.userData$.subscribe(result => {
      this.tableData = result;
      this.filterTableData('');
    });
  }

  filterTableData(filterText: string) {
    this.filteredTableData = this.tableData.filter(item => {
      return item.name.includes(filterText) ||
      item.username.includes(filterText) ||
      item.email.includes(filterText) ||
      item.address && item.address.city.includes(filterText);
    });

    console.log(this.filteredTableData)
  }

  removeUser(id: number) {
    this.tableDataService.removeUser(id);
  }

}
