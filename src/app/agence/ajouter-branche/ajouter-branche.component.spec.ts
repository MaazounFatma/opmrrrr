import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterBrancheComponent } from './ajouter-branche.component';

describe('AjouterBrancheComponent', () => {
  let component: AjouterBrancheComponent;
  let fixture: ComponentFixture<AjouterBrancheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterBrancheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterBrancheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
