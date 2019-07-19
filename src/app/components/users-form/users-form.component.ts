import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TableDataService } from 'src/app/services/table-data.service';
import { TableData } from 'src/app/models/table-data.model';
import { Week } from 'src/app/models/custom-info.model';
import { Address } from 'src/app/models/user.model';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent implements OnInit {

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    userName: new FormControl('', [Validators.required]),
    city: new FormControl(''),
    email: new FormControl('', [Validators.required]),
    rideInGroup: new FormControl('Aways', [Validators.required]),
    daysOfTheWeek: new FormGroup({
      sun: new FormControl(false),
      mon: new FormControl(false),
      tue: new FormControl(false),
      wed: new FormControl(false),
      thu: new FormControl(false),
      fri: new FormControl(false),
      sat: new FormControl(false),
    })
  });

  userFormDefaultValues = this.userForm.value;

  constructor(private tableDataService: TableDataService) { }

  ngOnInit() {
  }

  onSubmit() {
    const users = this.tableDataService.userData$.getValue();
    const lastUserId = users[users.length - 1].userId;
    const userFormData: UserForm = this.userForm.value;
    const addressObj: Address = {
      city: userFormData.city
    };


    const tempUserData: TableData = {
      userId: lastUserId + 1,
      address: addressObj.city ? addressObj : undefined,
      name: userFormData.name,
      username: userFormData.userName,
      email: userFormData.email,
      dayOfTheWeek: userFormData.daysOfTheWeek,
      rideInGroup: userFormData.rideInGroup,
      albums: 0,
      photos: 0,
      posts: 0,
    };

    this.tableDataService.addUser(tempUserData);
    this.clearForm();
  }


  clearForm() {
    this.userForm.reset(this.userFormDefaultValues);
  }

}

export interface UserForm {
  name: string;
  userName: string;
  city: string;
  email: string;
  rideInGroup: string;
  daysOfTheWeek: Week;
}
