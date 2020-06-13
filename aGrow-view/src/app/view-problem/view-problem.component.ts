import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from 'src/config/api.config';
import LocalStorageService from 'src/config/service';

@Component({
  selector: 'app-view-problem',
  templateUrl: './view-problem.component.html',
  styleUrls: ['./view-problem.component.css']
})
export class ViewProblemComponent implements OnInit {

  problems : any = {
    id : null,
    title : null,
    description : null,
    insertProblem : null, 
    status: null
  };
  
  constructor(public router: Router, public http: HttpClient) { }

  ngOnInit() {
    const client = LocalStorageService.getlocalStorage('_client')
     this.http.get<any[]>(`${API_CONFIG.baseUrl}/problem?client=${client.id}`).subscribe(response => {
      this.problems = response;
      console.log(this.problems);
    })
  }

  deleteById(id: string){
    return this.http.delete(`${API_CONFIG.baseUrl}/problem/${id}`).subscribe(response => {
      window.alert("Deletado com sucesso!.");
      this.router.navigate(['/initial']);
    }, error => {
      console.log(error.error.message)
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
