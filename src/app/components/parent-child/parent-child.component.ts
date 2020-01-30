import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-parent-child",
  templateUrl: "./parent-child.component.html",
  styleUrls: ["./parent-child.component.css"]
})
export class ParentChildComponent implements OnInit {
  @Input()
  child: string;

  @Output()
  public helloChild = new EventEmitter();

  constructor() {}

  ngOnInit() {}
  firstStar() {
    this.helloChild.emit("Love you *Bhargav*");
  }
}
