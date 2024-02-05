import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
//used to pass data from one component to another
  formData = new BehaviorSubject(null);
  dataF = this.formData.asObservable();
  constructor(){ }
  
  //data coming from upsert component is stored here
  setFormData(data:any){
    this.formData.next(data);
  }
}
