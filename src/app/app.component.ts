import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  welcomeStr: string = "Welcome to Angular tutorials";
  propertyExpression: string = "propExpression123";
  bindTarget: string = "bindtarget";
  invalue: string = "invalue12";
  c:number =3;

  attendees: string[] = ["Pramod", "Manisha", "Jenith"];
  show: boolean = false;
  viewToSource:string;

  giveAValue(){
    return "someValue"+Math.random();
  }
  inc (){
    alert("clicked")
  }

  setValue(value){
    this.viewToSource= value;
    console.log(value);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
