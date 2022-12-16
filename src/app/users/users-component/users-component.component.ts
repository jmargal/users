import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/interfaces/userInterface';
import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-component',
  templateUrl: './users-component.component.html',
})
export class UsersComponentComponent implements OnInit {
  constructor(private userService: userService) {}

  usersList: User[] = [];

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (resp) => {
        this.usersList = resp;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
