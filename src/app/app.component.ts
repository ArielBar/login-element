import { EventEmitter,Component, ViewEncapsulation, Input, Output, ApplicationRef, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomChangeDetector } from './custom-change-detector';

@Component({
  selector: 'login-element',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{

  @Input() title = 'login-element';
  @Output() clickOnMe = new EventEmitter<any>();
  xxx$:any;

  cd : CustomChangeDetector;

 constructor(private http : HttpClient, protected injector : Injector){
    this.cd = new CustomChangeDetector(this.injector);
 }

 ngOnInit(): void {
  this.xxx$ = this.http.get('https://jsonplaceholder.typicode.com/posts/42');
}

  toggle : boolean = false;

  test(){
    //alert("click test is working!!");
    this.toggle = !this.toggle;
    console.log(this.toggle);
    this.cd.markForCheck();
    //this.clickOnMe.emit();
  }
}
