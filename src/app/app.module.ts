import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncrementComponent } from './components/increment';
import { DecrementComponent } from './components/decrement';
import { ShowValueComponent } from './components/show-value';
import { CounterOneModule } from './modules/counter-one/counter-one.module';
import { CounterLazyModule } from './modules/counter-lazy/counter-lazy.module';

@NgModule({
  declarations: [
    AppComponent,
    IncrementComponent,
    DecrementComponent,
    ShowValueComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterOneModule,
    CounterLazyModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
