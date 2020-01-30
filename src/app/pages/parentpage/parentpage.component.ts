import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-parentpage",
  templateUrl: "./parentpage.component.html",
  styleUrls: ["./parentpage.component.css"]
})
export class ParentpageComponent implements OnInit {
  iamparent: string =
    "hi how are you *(Bhargav)* the King --->and my *queen* is her";
  public message = "The king";
  constructor() {}

  ngOnInit() {}
}
