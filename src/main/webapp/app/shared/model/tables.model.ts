import { ICandidat } from 'app/shared/model/candidat.model';
import { ISalle } from 'app/shared/model/salle.model';

export interface ITables {
  id?: number;
  numtable?: number;
  candidat?: ICandidat;
  salle?: ISalle;
}

export class Tables implements ITables {
  constructor(public id?: number, public numtable?: number, public candidat?: ICandidat, public salle?: ISalle) {}
}
