import { Injector, ChangeDetectorRef, ApplicationRef } from "@angular/core";

export class ComponentCanDetectChanges{
    
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

    checkNoChanges(){
        this.cd.checkNoChanges();
        this.app.tick();
    }

    detach(){
        this.cd.detach();
        this.app.tick();
    }

    detectChanges(){
        this.cd.detectChanges();
        this.app.tick();
    }

    reattach(){
        this.cd.reattach();
        this.app.tick();
    }
}