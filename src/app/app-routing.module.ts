import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: 'aromatico', component: AromaticoComponent },
  { path: 'balines', component: BalinesComponent },
  { path: 'lomi-lomi', component: LomiLomiComponent },
  { path: 'piedras-calientes', component: PiedrasCalientesComponent },
  { path: 'vela-karite', component: VelaKariteComponent },
  { path: 'embarazadas', component: EmbarazadasComponent },
  { path: 'tailandes', component: TailandesComponent },
  { path: 'fusion-bali-thai', component: FusionBaliThaiComponent },
  { path: 'pindas', component: PindasComponent },
  { path: 'reflexologia', component: ReflexologiaComponent },
  { path: 'craneal-facial', component: CranealFacialComponent },
  { path: 'descontracturante', component: DescontracturanteComponent },
  { path: '', redirectTo: '/aromatico', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}