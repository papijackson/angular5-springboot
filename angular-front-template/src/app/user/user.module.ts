import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserRouterModule } from './user.router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule, MatTabsModule, MatToolbarModule, MatListModule, MatStepperModule, MatButtonToggleModule, MatChipsModule, MatTooltipModule, MatCheckboxModule, MatSortModule, MatPaginatorModule, MatTableModule, MatNativeDateModule, MatDatepickerModule, MatExpansionModule, MatInputModule, MatFormFieldModule, MatMenuModule, MatCard, MatCardModule } from '@angular/material';
import { HighlightJsModule, HIGHLIGHT_JS } from 'angular-highlight-js';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { UserList2Component } from './user-list2/user-list2.component';

@NgModule({
  imports: [
    CommonModule,
    UserRouterModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    MatListModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatChipsModule,
    MatButtonToggleModule,
    NgxDatatableModule,
    MatMenuModule,
    MatCardModule
  ],
  declarations: [UserListComponent, UserList2Component],
  providers:[UserService]
})
export class UserModule { }
