import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-problem',
  templateUrl: './register-problem.component.html',
  styleUrls: ['./register-problem.component.css']
})
export class RegisterProblemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: any){
    console.log(form.value);

  }
}
