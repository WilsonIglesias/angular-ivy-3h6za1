import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { WilsoncomponentComponent } from './wilsoncomponent/wilsoncomponent.component';
import { WilsonlistacomponentComponent } from './wilsonlistacomponent/wilsonlistacomponent.component';
import { WilsondisciplinasserviceService } from './wilsondisciplinasservice.service';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  RouterModule.forRoot(
                    [
                      {path: '', component: WilsoncomponentComponent},
                      {path: '/list', component: WilsonlistacomponentComponent}

                    ]
                  )
                 ],
  declarations: [ AppComponent,
                  HelloComponent,
                  WilsoncomponentComponent,
                  WilsonlistacomponentComponent
                 ],
  bootstrap:    [ AppComponent ],
  providers: [
    WilsondisciplinasserviceService
  ]
})
export class AppModule { }
