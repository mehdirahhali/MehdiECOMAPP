import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullBillComponent } from './full-bill.component';

describe('FullBillComponent', () => {
  let component: FullBillComponent;
  let fixture: ComponentFixture<FullBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullBillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
