import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ITables, Tables } from 'app/shared/model/tables.model';
import { TablesService } from './tables.service';
import { ISalle } from 'app/shared/model/salle.model';
import { SalleService } from 'app/entities/salle/salle.service';

@Component({
  selector: 'jhi-tables-update',
  templateUrl: './tables-update.component.html'
})
export class TablesUpdateComponent implements OnInit {
  isSaving = false;
  salles: ISalle[] = [];

  editForm = this.fb.group({
    id: [],
    numtable: [],
    salle: []
  });

  constructor(
    protected tablesService: TablesService,
    protected salleService: SalleService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ tables }) => {
      this.updateForm(tables);

      this.salleService.query().subscribe((res: HttpResponse<ISalle[]>) => (this.salles = res.body || []));
    });
  }

  updateForm(tables: ITables): void {
    this.editForm.patchValue({
      id: tables.id,
      numtable: tables.numtable,
      salle: tables.salle
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const tables = this.createFromForm();
    if (tables.id !== undefined) {
      this.subscribeToSaveResponse(this.tablesService.update(tables));
    } else {
      this.subscribeToSaveResponse(this.tablesService.create(tables));
    }
  }

  private createFromForm(): ITables {
    return {
      ...new Tables(),
      id: this.editForm.get(['id'])!.value,
      numtable: this.editForm.get(['numtable'])!.value,
      salle: this.editForm.get(['salle'])!.value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ITables>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }

  trackById(index: number, item: ISalle): any {
    return item.id;
  }
}
