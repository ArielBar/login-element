import { Component, OnInit, Injector } from '@angular/core';
import { ComponentCanDetectChanges } from 'src/app/component-can-detect-changes';

@Component({
  selector: 'app-some',
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.scss']
})
export class SomeComponent extends ComponentCanDetectChanges implements OnInit {

  counter : number = 0;

  constructor(protected injector : Injector) {
    super(injector);
   }

  ngOnInit() {
  }

}
