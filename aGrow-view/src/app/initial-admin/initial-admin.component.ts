import { Component, OnInit } from '@angular/core';
import LocalStorageService from 'src/config/service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from 'src/config/api.config';

@Component({
  selector: 'app-initial-admin',
  templateUrl: './initial-admin.component.html',
  styleUrls: ['./initial-admin.component.css']
})
export class InitialAdminComponent implements OnInit {

  problems: any = {
    id: null,
    title: null,
    description: null,
    insertProblem: null,
    status: null,
    name: null,
    email: null,
    phone: null
  };

  initial : any = { status: 'FAZENDO' };
  final: any = { status: 'TERMINADO' };

  constructor(public router: Router, public http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>(`${API_CONFIG.baseUrl}/problem/admin`).subscribe(response => {
      this.problems = response;
    })
  }

  client() {
    const emailUser = LocalStorageService.getlocalStorage('_client')
    return emailUser.name;
  }

  logout() {
    LocalStorageService.removeUserAuthenticate();
    this.router.navigate(['']);
  }

  finish(id: string) {
    return this.http.put(`${API_CONFIG.baseUrl}/problem/${id}`, this.final)
      .subscribe(response => {
        window.alert("Status Modificado para TERMINADO.");
        this.ngOnInit();
      }, error => {
        window.alert(error.error.message);
      })
  }

  making(id: string) {
    return this.http.put(`${API_CONFIG.baseUrl}/problem/${id}`, this.initial)
      .subscribe(response => {
        window.alert("Status Modificado para FAZENDO.");
        this.ngOnInit();
      }, error => {
        window.alert(error.error.message);
      })
  }
}
