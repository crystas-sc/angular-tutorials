import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  welcomeStr: string = "Welcome to Angular tutorials";
  propertyExpression: string = "propExpression123";
  bindTarget: string = "bindtarget";

  attendees: string[] = ["Pramod", "Manisha", "Jenith"];
  show: boolean = false;

  giveAValue(){
    return "someValue"+Math.random();
  }
  inc (){
    alert("clicked")
  }

  setValue($event){
    alert($event);
    console.log($event);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
