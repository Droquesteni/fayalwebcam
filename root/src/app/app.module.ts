import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CamerasComponent } from './cameras/cameras.component';
import { MeteorologiaComponent } from './meteorologia/meteorologia.component';
import { SurfspotsComponent } from './surfspots/surfspots.component';

const appRoutes: Routes = [

  { path: 'cameras', component: CamerasComponent },
  { path: 'meteorologia',      component: MeteorologiaComponent },
  { path: 'surfspots',      component: SurfspotsComponent },
  
  { path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  { path: '**', component: CamerasComponent }
];

@NgModule({

  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot (appRoutes, { enableTracing: true } ),
        
  ],

  declarations: [
    AppComponent,
    CamerasComponent,
    MeteorologiaComponent,
    SurfspotsComponent,
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
