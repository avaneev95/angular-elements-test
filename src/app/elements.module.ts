import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Injector, NgModule } from '@angular/core';

import { createCustomElement } from '@angular/elements';
import {UserListModule} from './user-list/user-list.module';
import {UserListComponent} from './user-list/user-list.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, UserListModule],
  exports: [UserListModule]
})
export class ElementsModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const userList = createCustomElement(UserListComponent, {injector: this.injector});
    customElements.define('user-list', userList);
  }
}
