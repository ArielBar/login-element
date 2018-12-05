import { EventEmitter,Component, ViewEncapsulation, Input, Output, ApplicationRef, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'login-element',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  @Input() title = 'login-element';
  @Output() clickOnMe = new EventEmitter<any>();
  xxx:any;

 constructor(private http : HttpClient){
    
 }

 ngOnInit(): void {
   this.http.get('https://jsonplaceholder.typicode.com/posts/42').subscribe((x : any)=>
   {
      this.xxx = x;
   });
}

  toggle : boolean = false;

  test(){
    //alert("click test is working!!");
    this.toggle = !this.toggle;
    //this.clickOnMe.emit();
  }
}
