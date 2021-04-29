import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {AboutComponent} from "./pages/about/about.component";
import {PhotosComponent} from "./pages/photos/photos.component";
import {WeddingComponent} from "./pages/wedding/wedding.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'photos',
    component: PhotosComponent
  },
  {
    path: 'wedding',
    component: WeddingComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRouting {
}
