import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForSaleContainerComponent } from './for-sale-container.component';

describe('ForSaleContainerComponent', () => {
  let component: ForSaleContainerComponent;
  let fixture: ComponentFixture<ForSaleContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForSaleContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForSaleContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
