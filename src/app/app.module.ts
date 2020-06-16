import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule, DropdownModule } from 'angular-bootstrap-md';
import { NavigationComponent } from './navigation/navigation.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { CardComponent } from './card/card.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
import {TabModule} from 'angular-tabs-component';
import { ProgramsComponent } from './programs/programs.component';
import { WavesModule,CollapseModule } from 'ng-uikit-pro-standard'


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CarouselComponent,
    AboutusComponent,
    TestimonialsComponent,
    CardComponent,
    ServicesComponent,
    FooterComponent,
    ProgramsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    TabModule,
    WavesModule,
    CollapseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
