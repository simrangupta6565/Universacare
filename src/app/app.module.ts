import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationBarComponent } from './notification-bar/notification-bar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './footer/footer.component';
import { UseMediaComponent } from './use-media/use-media.component';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ProcessComponent } from './process/process.component';
import { ReviewComponent } from './review/review.component';
import { CarouselComponent } from './carousel/carousel.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [
    AppComponent,
    NotificationBarComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    UseMediaComponent,
    ProcessComponent,
    ReviewComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
//     FormsModule,
//  HttpModule,
//  RoutingModule,
 FlexLayoutModule,
 MatListModule,
 MatFormFieldModule,
 IvyCarouselModule,
 MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
