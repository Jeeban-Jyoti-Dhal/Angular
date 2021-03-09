import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { customersComponent } from './component/customers.component';


@NgModule({
  declarations: [
    AppComponent,
    customersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [customersComponent]
})
export class AppModule { }
