import { ComponenteAlbumComponent } from './componente-album/componente-album.component';
import { ComponenteServicoComponent } from './componente-servico/componente-servico.component';
import { Componente4Component } from './componente4/componente4.component';
import { Componente3Component } from './componente3/componente3.component';
import { Componente2Component } from './componente2/componente2.component';
import { Componente1Component } from './componente1/componente1.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'componente1', component:Componente1Component},
  {path:'componente2', component:Componente2Component},
  {path:'componente3', component:Componente3Component},
  {path:'componente4', component:Componente4Component},
  {path:'componenteServico', component:ComponenteServicoComponent},
  {path:'componenteAlbum', component:ComponenteAlbumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
