import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageComponentComponent } from './affichage-component.component';

describe('AffichageComponentComponent', () => {
  let component: AffichageComponentComponent;
  let fixture: ComponentFixture<AffichageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
