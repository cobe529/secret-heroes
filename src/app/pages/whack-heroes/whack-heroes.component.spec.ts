import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhackHeroesComponent } from './whack-heroes.component';

describe('WhackHeroesComponent', () => {
  let component: WhackHeroesComponent;
  let fixture: ComponentFixture<WhackHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhackHeroesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhackHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
