import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserList2Component } from './user-list2/user-list2.component';


const appRoutes: Routes = [
  	{ path: 'users', component: UserListComponent},
    { path: 'users2', component: UserList2Component}
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
