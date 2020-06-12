import { Component, OnInit } from '@angular/core';
import { Client } from '../shared';
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-client',
  templateUrl: './insert-client.component.html',
  styleUrls: ['./insert-client.component.css']
})
export class InsertClientComponent implements OnInit {

  client = new Client();

  constructor(public router: Router,) { }

  ngOnInit() {
  }

  onSubmit(form: any){
    console.log(form.value);
    this.client.name = form.value.name;
    this.client.email = form.value.email;
    this.client.phone = form.value.phone;
    this.client.password = form.value.password;

    if(this.client.password === form.value.password2){
      window.alert("Cadastro Efetuado.  " + this.client.email);
      this.router.navigate(['/logon/client']);
    }else{
      window.alert("Senha Incorretas");
    }

  }
}
