import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHeroesComponent } from './view-heroes.component';

describe('ViewHeroesComponent', () => {
  let component: ViewHeroesComponent;
  let fixture: ComponentFixture<ViewHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewHeroesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
