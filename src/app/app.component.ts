import { EventEmitter,Component, ViewEncapsulation, Input, Output, ApplicationRef, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ComponentCanDetectChanges } from './component-can-detect-changes';

@Component({
  selector: 'login-element',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent extends ComponentCanDetectChanges implements OnInit{

  @Input() title = 'login-element';
  @Output() clickOnMe = new EventEmitter<any>();
  xxx$:any;

 constructor(private http : HttpClient, protected injector : Injector){
    super(injector);
 }

 ngOnInit(): void {
  this.xxx$ = this.http.get('https://jsonplaceholder.typicode.com/posts/42');
}

  toggle : boolean = false;

  test(){
    //alert("click test is working!!");
    this.toggle = !this.toggle;
    console.log(this.toggle);
    this.markForCheck();
    //this.clickOnMe.emit();
  }
}
