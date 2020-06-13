import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import LocalStorageService from 'src/config/service';
import { API_CONFIG } from 'src/config/api.config';

@Component({
  selector: 'app-register-problem',
  templateUrl: './register-problem.component.html',
  styleUrls: ['./register-problem.component.css']
})
export class RegisterProblemComponent implements OnInit {

  problem: any = {
    title: null,
    description: null,
    client: null,
  };

  constructor(public router: Router, public http: HttpClient) { }

  ngOnInit(): void {
  }

  id() {
    const client = LocalStorageService.getlocalStorage('_client')
    return client.id;
  }

  onSubmit(form: any) {

    this.problem.title = form.value.title;
    this.problem.description = form.value.description;
    this.problem.client = this.id();

    this.insert(this.problem);
    console.log(this.problem);

  }

  insert(problem: any) {
    this.http.post(`${API_CONFIG.baseUrl}/problem`, problem)
      .subscribe(response => {
        window.alert("Cadastrado com Sucesso.");
        this.router.navigate(['/initial']);
      }, error => {
        window.alert(error.error.message);
      })
  }

  initial() {
    const client = LocalStorageService.getlocalStorage('_client')

    if (client.email === "admin@gmail.com") {
      this.router.navigate(['/initial/admin']);
    } else {
      this.router.navigate(['/initial']);
    }
  }
}
