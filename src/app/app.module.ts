import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Ant Design
import { NgZorroAntdModule } from './ng-zorro-antd.module';

import { MainComponent } from './pages/main/main.component';
import { ViewHeroesComponent } from './pages/view-heroes/view-heroes.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { WhackHeroesComponent } from './pages/whack-heroes/whack-heroes.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeroCardComponent,
    MainComponent,
    ViewHeroesComponent,
    WhackHeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
