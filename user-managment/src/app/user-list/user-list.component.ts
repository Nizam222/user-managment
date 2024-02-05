import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  dataF = this._dataService.dataF;
  formData: any;
  dataForm: any = [];

  constructor(private _dataService: DataService) {
    this.getData();
  }

  ngOnInit(): void {}

  // data fetching form upsert componanat
  getData() {
    this._dataService.dataF.subscribe((res) => {
      console.log('data from form', res);
      this.formData = res;
      let data = {
        id: new Date().getTime(),
        firstname: this.formData.firstname,
        lastname: this.formData.lastname,
        email: this.formData.email,
        phone: this.formData.phone,
      };
      this.dataForm = [data];
      console.log('data form', this.dataForm);
    });
  }
//edit functionality implemented
  edit(updateUser:any) {
    const index = this.dataForm.findIndex((data: any) => data.id ===updateUser.id);
    if (index !== -1) {
      this.dataForm[index] = {...this.dataForm[index], ...updateUser}
    }

  }

  //delete functionality implemented
  delete(id: any) {
    const index = this.dataForm.findIndex((data: any) => data.id === id);

    if (index !== -1) {
      this.dataForm.splice(index, 1);
    }
  }
}
