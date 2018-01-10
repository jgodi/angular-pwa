import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { CatComponent } from './cat/cat.component';

@NgModule({
  declarations: [
    AppComponent,
    CatComponent
  ],
  imports: [
    BrowserModule,
    environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
