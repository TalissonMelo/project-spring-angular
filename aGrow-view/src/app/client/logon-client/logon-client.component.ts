import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logon-client',
  templateUrl: './logon-client.component.html',
  styleUrls: ['./logon-client.component.css']
})
export class LogonClientComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  Logon(){
    this.router.navigate(['/initial/problem']);
  }

}
