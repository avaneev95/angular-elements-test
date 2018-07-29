import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import {MatButtonModule, MatCardModule, MatDividerModule, MatIconModule, MatListModule, MatProgressSpinnerModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './user.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatProgressSpinnerModule
  ],
  declarations: [UserListComponent],
  providers: [UserService],
  exports: [UserListComponent],
  entryComponents: [UserListComponent]
})
export class UserListModule { }
