import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {UserService} from './user.service';
import {User} from './user';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class UserListComponent implements OnInit {

  users: User[];
  details: User;

  loading = true;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
      .then(users => {
        this.users = users;
        this.loading = false;
      })
      .catch(() => {});
  }
}
