import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

@Input () rating : number ; 
starWidth : number ; 

@Output () ratingClicked : EventEmitter <string> = 
           new EventEmitter <string>() ; 

  ngOnChanges () : void { 
    this.starWidth = this.rating *75 / 5 ; 

  }
OnClick () : void { 
this.ratingClicked.emit( "This book is rated "+this.rating ) ;  
}
}
