import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Library2SharedModule } from 'app/shared/shared.module';
import { Library2CoreModule } from 'app/core/core.module';
import { Library2AppRoutingModule } from './app-routing.module';
import { Library2HomeModule } from './home/home.module';
import { Library2EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Library2SharedModule,
    Library2CoreModule,
    Library2HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Library2EntityModule,
    Library2AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class Library2AppModule {}
