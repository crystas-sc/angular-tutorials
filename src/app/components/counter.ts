import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-counter",
  templateUrl:  "./counter.html",
})
export class Counter {

   @Input() count: number = 0;
  @Output() countChange: EventEmitter<number> = new EventEmitter();
  increment() {
    this.count = this.count + 1;

    this.countChange.emit(this.count);
  }

  decrement() {
    this.count = this.count - 1;

    this.countChange.emit(this.count);
  }
}
