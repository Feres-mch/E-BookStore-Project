import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-d-accueil',
  templateUrl: './page-d-accueil.component.html',
  styleUrls: ['./page-d-accueil.component.css']
})
export class PageDAccueilComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  getstrated() {
    this.router.navigate(['BookList']);
  }
}
