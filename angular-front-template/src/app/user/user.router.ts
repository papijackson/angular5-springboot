import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';


const appRoutes: Routes = [
  	{ path: 'users', component: UserListComponent}

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
