import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.css']
})
export class LogonComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  Logon(logon : any) {
    console.log(logon.value)
    this.router.navigate(['/initial']);
  }
}
