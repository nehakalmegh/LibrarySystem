import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ngOnInit(){}
  constructor(){}
  // currentUser: UserComponent;
  // currentUserSubscription: Subscription;
  // users: UserComponent[] = [];

  // constructor(
  //     private authenticationService: AuthService,
  //     private userService: UserService
  // ) {
  //     this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
  //         this.currentUser = user;
  //     });
  // }

  // ngOnInit() {
  //     this.loadAllUsers();
  // }

  // ngOnDestroy() {
  //     // unsubscribe to ensure no memory leaks
  //     this.currentUserSubscription.unsubscribe();
  // }

  // deleteUser(id: number) {
  //     this.userService.delete(id).pipe(first()).subscribe(() => {
  //         this.loadAllUsers()
  //     });
  // }

  // private loadAllUsers() {
  //     this.userService.getAll().pipe(first()).subscribe(users => {
  //         this.users = users;
  //     });
  // }

}
