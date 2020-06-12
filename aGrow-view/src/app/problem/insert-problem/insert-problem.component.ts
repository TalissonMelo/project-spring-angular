import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insert-problem',
  templateUrl: './insert-problem.component.html',
  styleUrls: ['./insert-problem.component.css']
})
export class InsertProblemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: any){
    console.log(form.value);

  }
}
