import { Injector, ChangeDetectorRef, ApplicationRef } from "@angular/core";

export class RendererComponent{
    
    cd: ChangeDetectorRef;
    app: ApplicationRef;

    constructor(protected injector : Injector){
        this.cd = injector.get(ChangeDetectorRef);
        this.app = injector.get(ApplicationRef);
    }

    markForCheck(){
        this.cd.markForCheck();
        this.app.tick();
    }
}