import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm = this.fb.group ({
    name:[''],
    eMail:[''],
    password:[''],
    adress: this.fb.group ({
      street: [''],
      zipCode: [''],
      city: ['']
    })
  })

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
  }

  addUser() {
    this.userService.addUsers(this.userForm.value)
  }
}
