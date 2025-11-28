import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SecondComponentComponent } from './second-component/second-component.component';
import { ThirdComponentComponent } from './third-component/third-component.component';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { StudentroutercomponentComponent } from './studentroutercomponent/studentroutercomponent.component';
import { StudentdetailsroutercomponentComponent } from './studentdetailsroutercomponent/studentdetailsroutercomponent.component';
import { MathsService } from './services/maths.service';
import { CustomizepipePipe } from './customizepipe.pipe';
import { Customisepipe2Pipe } from './customisepipe2.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    ThirdComponentComponent,
    StudentroutercomponentComponent,
    StudentdetailsroutercomponentComponent,
    CustomizepipePipe,
    Customisepipe2Pipe,
   

  ],
  imports: [
    BrowserModule,
    [NgbModule],
    // T1 , T2 step1
    FormsModule,
    AppRoutingModule
  ],
  providers: [MathsService], // injecting the service in module level so that the service will be updated to all the components under the module
  bootstrap: [AppComponent]
})
export class AppModule { }
