import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from 'src/config/api.config';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  client: any = {
    name: null,
    email: null,
    phone: null,
    password: null
  };

  constructor(public router: Router, public http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(form: any) {
    this.client.name = form.value.name;
    this.client.email = form.value.email;
    this.client.phone = form.value.phone;
    this.client.password = form.value.password;

    if (this.client.password === form.value.password2) {
      this.insert(this.client);
    } else {
      window.alert("Senhas Incorretas. Tente novamente.");
    }

  }

  insert(client: any) {
    this.http.post(`${API_CONFIG.baseUrl}/client`, client)
      .subscribe(response => {
        window.alert("Cadastrado com Sucesso.");
        this.router.navigate(['']);
      }, error => {
        window.alert(error.error.message);
      })
  }
}
