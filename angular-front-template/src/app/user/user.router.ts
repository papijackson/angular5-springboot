import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';


const appRoutes: Routes = [
  	{ path: 'users', component: UserListComponent},
    { path: 'user/:id', component: UserEditComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  	],
  exports: [
    RouterModule
  ]
})
export class UserRouterModule {}
