import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengesIa } from './challenges-ia';

describe('ChallengesIa', () => {
  let component: ChallengesIa;
  let fixture: ComponentFixture<ChallengesIa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChallengesIa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChallengesIa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
