import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { HomeComponent } from './views/home/home.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      // {
      //   path: 'detail/:id',
      //   component: DetailView,
      // },
      // {
      //   // path: 'detail/:id',
      //   path: 'detail-categoria',
      //   component: CategoriaView,
      // },
      // {
      //   // path: 'detail/:id',
      //   path: 'detail-categoria',
      //   component: CategoriaView,
      // },
      // {
      //   // path: 'detail/:id',
      //   path: 'registrarme',
      //   component: RegistroUsuarioView,
      // },
      // {
      //   // path: 'detail/:id',
      //   path: 'acerca-empresa',
      //   component: AcercaEmpresaView,
      // },
      // {
      //   // path: 'detail/:id',
      //   path: 'search/:query',
      //   component: SearchResultsView,
      // },
      // {
      //   title:"Productos",
      //   path: 'productos',
      //   component: ProductosView,
      // },
      // {
      //   title:"Politica |",
      //   path: 'politica',
      //   component: PoliticaPrivView,
      // },
      // {
      //   title:"Politica |Cookies",
      //   path: 'cookies',
      //   component: PoliticaCookiesView,
      // },
      // {
      //   title:"Terminos |Condiciones",
      //   path: 'Terminos',
      //   component: TerminosCondicionesView,
      // },
      // {
      //   title:"preguntas |frecuentes",
      //   path: 'faq',
      //   component: PreguntasFreqView,
      // },
      // {
      //   title:"Acerca de |",
      //   path: 'acercade',
      //   component: AcercaDeView,
      // },
      // {
      //   title:"404",
      //   path: 'not-found',
      //   component: NotFoundView,
      // },
      // {
      //   title:"500",
      //   path: 'unknown',
      //   component: UnknownView ,
      // },
      // {
      //   title:"404",
      //   path: '**',
      //   component: NotFoundView,
      // },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
