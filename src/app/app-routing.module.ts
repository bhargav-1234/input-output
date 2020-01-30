import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ParentpageComponent } from "./pages/parentpage/parentpage.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/welcome" },
  { path: "parentpage", component: ParentpageComponent },
  {
    path: "welcome",
    loadChildren: () =>
      import("./pages/welcome/welcome.module").then(m => m.WelcomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
