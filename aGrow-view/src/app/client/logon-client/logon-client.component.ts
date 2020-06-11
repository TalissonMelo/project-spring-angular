import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-logon-client',
  templateUrl: './logon-client.component.html',
  styleUrls: ['./logon-client.component.css']
})
export class LogonClientComponent implements OnInit {

  email: string;
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  Logon() {
    this.email = "email@gmail.com";

    if (this.email === "email@gmail.co") {
      this.router.navigate(['/initial/problem']);
    } else {
      this.router.navigate(['/admin/problem']);
    }
  }

}
