import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-upsert',
  templateUrl: './upsert.component.html',
  styleUrls: ['./upsert.component.css'],
})
export class UpsertComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder, private _dataService: DataService) {
    this.createForm();
  }

  ngOnInit(): void {}
  createForm() {     // reactive form controll created by using form builder 
    this.myForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      phone: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[0-9]{10}'),
          Validators.maxLength(10),
        ]),
      ],
    });
  }

  // On Form submit data is stored in one variable
  Submit() {
    console.log(this.myForm);
    const data1 = this.myForm.value;
    this._dataService.setFormData(data1);
    this.myForm.reset();
  }
}
