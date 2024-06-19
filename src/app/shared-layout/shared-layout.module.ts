import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedLayoutComponent } from './shared-layout.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { KingComponent } from './component/king/king.component';
import { ArmyComponent } from './component/army/army.component';
import { CoronationComponent } from './component/coronation/coronation.component';
import { FamilyComponent } from './component/family/family.component';
import { HomeComponent } from './component/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',

  },
  {
    path: 'home', component: HomeComponent

  },
  {
    path: 'king', component: KingComponent

  },
  {
    path: 'army', component: ArmyComponent

  },
  {
    path: 'coronation', component: CoronationComponent

  },
  {
    path: 'family', component: FamilyComponent

  },
]

@NgModule({
  declarations: [
    SharedLayoutComponent,
    HeaderComponent,
    FooterComponent,
    KingComponent,
    ArmyComponent,
    CoronationComponent,
    FamilyComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })], NgbModule,
    NgbCarouselModule,
  ],
  exports: [FooterComponent, HeaderComponent, RouterModule],
})
export class SharedLayoutModule { }
