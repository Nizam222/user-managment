import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpsertComponent } from './upsert/upsert.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path:'upsert', component: UpsertComponent},
  {path:'user-list', component: UserListComponent},
  {path: 'user-list', component:UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
