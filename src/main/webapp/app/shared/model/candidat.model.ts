import { Moment } from 'moment';
import { ITables } from 'app/shared/model/tables.model';
import { INote } from 'app/shared/model/note.model';
import { IAnonymat } from 'app/shared/model/anonymat.model';

export interface ICandidat {
  id?: number;
  prenom?: string;
  nom?: string;
  provenance?: string;
  cni?: string;
  telephone?: string;
  sexe?: string;
  datenais?: Moment;
  niveau?: string;
  tables?: ITables;
  notes?: INote[];
  anonymats?: IAnonymat[];
}

export class Candidat implements ICandidat {
  constructor(
    public id?: number,
    public prenom?: string,
    public nom?: string,
    public provenance?: string,
    public cni?: string,
    public telephone?: string,
    public sexe?: string,
    public datenais?: Moment,
    public niveau?: string,
    public tables?: ITables,
    public notes?: INote[],
    public anonymats?: IAnonymat[]
  ) {}
}
