import { ITables } from 'app/shared/model/tables.model';
import { IPVSurveillance } from 'app/shared/model/pv-surveillance.model';
import { ICentre } from 'app/shared/model/centre.model';

export interface ISalle {
  id?: number;
  numsalle?: number;
  nomsalle?: string;
  tables?: ITables[];
  pvsurveillances?: IPVSurveillance[];
  centre?: ICentre;
}

export class Salle implements ISalle {
  constructor(
    public id?: number,
    public numsalle?: number,
    public nomsalle?: string,
    public tables?: ITables[],
    public pvsurveillances?: IPVSurveillance[],
    public centre?: ICentre
  ) {}
}
