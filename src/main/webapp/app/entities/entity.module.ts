import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'salle',
        loadChildren: () => import('./salle/salle.module').then(m => m.JhipsterSalleModule)
      },
      {
        path: 'surveillant',
        loadChildren: () => import('./surveillant/surveillant.module').then(m => m.JhipsterSurveillantModule)
      },
      {
        path: 'pv-surveillance',
        loadChildren: () => import('./pv-surveillance/pv-surveillance.module').then(m => m.JhipsterPVSurveillanceModule)
      },
      {
        path: 'examen',
        loadChildren: () => import('./examen/examen.module').then(m => m.JhipsterExamenModule)
      },
      {
        path: 'tour',
        loadChildren: () => import('./tour/tour.module').then(m => m.JhipsterTourModule)
      },
      {
        path: 'anonymat',
        loadChildren: () => import('./anonymat/anonymat.module').then(m => m.JhipsterAnonymatModule)
      },
      {
        path: 'specialite',
        loadChildren: () => import('./specialite/specialite.module').then(m => m.JhipsterSpecialiteModule)
      },
      {
        path: 'session',
        loadChildren: () => import('./session/session.module').then(m => m.JhipsterSessionModule)
      },
      {
        path: 'niveau',
        loadChildren: () => import('./niveau/niveau.module').then(m => m.JhipsterNiveauModule)
      },
      {
        path: 'filiere',
        loadChildren: () => import('./filiere/filiere.module').then(m => m.JhipsterFiliereModule)
      },
      {
        path: 'jury',
        loadChildren: () => import('./jury/jury.module').then(m => m.JhipsterJuryModule)
      },
      {
        path: 'centre',
        loadChildren: () => import('./centre/centre.module').then(m => m.JhipsterCentreModule)
      },
      {
        path: 'candidat',
        loadChildren: () => import('./candidat/candidat.module').then(m => m.JhipsterCandidatModule)
      },
      {
        path: 'table',
        loadChildren: () => import('./table/table.module').then(m => m.JhipsterTableModule)
      },
      {
        path: 'matiere',
        loadChildren: () => import('./matiere/matiere.module').then(m => m.JhipsterMatiereModule)
      },
      {
        path: 'correcteur',
        loadChildren: () => import('./correcteur/correcteur.module').then(m => m.JhipsterCorrecteurModule)
      },
      {
        path: 'note',
        loadChildren: () => import('./note/note.module').then(m => m.JhipsterNoteModule)
      },
      {
        path: 'plage-copie',
        loadChildren: () => import('./plage-copie/plage-copie.module').then(m => m.JhipsterPlageCopieModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class JhipsterEntityModule {}
