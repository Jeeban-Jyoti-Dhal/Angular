import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { AppComponent } from './app.component';
import { JavaComponent } from './component/java.component';


@NgModule({
  declarations: [
    AppComponent,
    JavaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot()

  ],
  providers: [],
  bootstrap: [JavaComponent]
})
export class AppModule { }
