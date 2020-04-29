import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule } from '@nebular/theme';
import { NbLayoutModule, NbSearchModule } from '@nebular/theme';
import { NbCardModule } from '@nebular/theme';
import { NbTooltipModule } from '@nebular/theme';
import { HeaderComponent } from './components/header/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginationComponent } from './components/pagination/pagination.component';
import { MovieDetailsComponent } from './page/movie-details/movie-details.component';
import { YtvideoComponent } from './components/ytvideo/ytvideo.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { FacebookModule } from 'ngx-facebook';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routingComponents,
    PaginationComponent,
    MovieDetailsComponent,
    YtvideoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbLayoutModule,
    NbSearchModule,
    NbCardModule,
    HttpClientModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NgbModule,
    NgbPaginationModule,
    NbTooltipModule,
    NgxYoutubePlayerModule.forRoot(),
    FacebookModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
