import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from 'src/config/api.config';
import LocalStorageService from 'src/config/service';

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.css']
})
export class LogonComponent implements OnInit {

  clientLogon: any = {
    email: null,
    password: null
  };

  constructor(public router: Router, public http: HttpClient) { }

  ngOnInit(): void {
  }

  Logon(logon : any):void {   
    this.clientLogon = logon.value;
    this.login(this.clientLogon);
  }

  login(client: any): void{
    this.http.post(`${API_CONFIG.baseUrl}/client/logon`, client)
      .subscribe(response => {

        if(this.clientLogon.email === "admin@gmail.com"){
          this.router.navigate(['/initial/admin']);
        }else{
          this.router.navigate(['/initial']);
        }
        
        this.insert(response);
      },
      error => {
        window.alert(error.error);
      })
  }

  insert(client: any) : void {
    LocalStorageService.addItem('_client', client);
  }
}
