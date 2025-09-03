import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AromaticoComponent } from './tratamientos/aromatico/aromatico.component';
import { BalinesComponent } from './tratamientos/balines/balines.component';
import { LomiLomiComponent } from './tratamientos/lomi-lomi/lomi-lomi.component';
import { PiedrasCalientesComponent } from './tratamientos/piedras-calientes/piedras-calientes.component';
import { VelaKariteComponent } from './tratamientos/vela-karite/vela-karite.component';
import { EmbarazadasComponent } from './tratamientos/embarazadas/embarazadas.component';
import { TailandesComponent } from './tratamientos/tailandes/tailandes.component';
import { FusionBaliThaiComponent } from './tratamientos/fusion-bali-thai/fusion-bali-thai.component';
import { PindasComponent } from './tratamientos/pindas/pindas.component';
import { ReflexologiaComponent } from './tratamientos/reflexologia/reflexologia.component';
import { CranealFacialComponent } from './tratamientos/craneal-facial/craneal-facial.component';
import { DescontracturanteComponent } from './tratamientos/descontracturante/descontracturante.component';

@NgModule({
  declarations: [
    AppComponent,
    AromaticoComponent,
    BalinesComponent,
    LomiLomiComponent,
    PiedrasCalientesComponent,
    VelaKariteComponent,
    EmbarazadasComponent,
    TailandesComponent,
    FusionBaliThaiComponent,
    PindasComponent,
    ReflexologiaComponent,
    CranealFacialComponent,
    DescontracturanteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
