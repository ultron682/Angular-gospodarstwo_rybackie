import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForSaleFavoriteComponent } from './for-sale-favorite.component';

describe('ForSaleFavoriteComponent', () => {
  let component: ForSaleFavoriteComponent;
  let fixture: ComponentFixture<ForSaleFavoriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForSaleFavoriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForSaleFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
