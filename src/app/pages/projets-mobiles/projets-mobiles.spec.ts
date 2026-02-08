import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetsMobiles } from './projets-mobiles';

describe('ProjetsMobiles', () => {
  let component: ProjetsMobiles;
  let fixture: ComponentFixture<ProjetsMobiles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetsMobiles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetsMobiles);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
