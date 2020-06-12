import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailValidator } from '@angular/forms';
import { ClientLogon } from '../shared/clientLogon.module';
import { Client } from '../shared';

@Component({
  selector: 'app-logon-client',
  templateUrl: './logon-client.component.html',
  styleUrls: ['./logon-client.component.css']
})
export class LogonClientComponent implements OnInit {

  clientLogon = new ClientLogon();
  client = new Client();

  constructor(public router: Router) { }

  ngOnInit(){
  }

  Logon(logon : any) {
    this.clientLogon.email = logon.value.email;
    this.clientLogon.password = logon.value.password;
    console.log(logon.value)

    if(this.clientLogon.email === "admin@gmail.com"){
      this.router.navigate(['/admin/problem']);
    }else{
      this.router.navigate(['/initial/problem']);
    }
  }

}
