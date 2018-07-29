import { Injectable } from '@angular/core';
import {UserListModule} from './user-list.module';
import {HttpClient} from '@angular/common/http';
import {User} from './user';

// @Injectable({
//   providedIn: UserListModule
// })
@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  public getUsers(): Promise<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .toPromise();
  }
}
