import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import LocalStorageService from 'src/config/service';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.css']
})
export class InitialComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  client() {
    const emailUser = LocalStorageService.getlocalStorage('_client')
    return emailUser.name;
  }

  logout() {
    LocalStorageService.removeUserAuthenticate();
    this.router.navigate(['']);
  }
}
