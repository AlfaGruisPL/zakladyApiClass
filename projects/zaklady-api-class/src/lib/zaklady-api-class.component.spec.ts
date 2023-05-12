import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZakladyApiClassComponent } from './zaklady-api-class.component';

describe('ZakladyApiClassComponent', () => {
  let component: ZakladyApiClassComponent;
  let fixture: ComponentFixture<ZakladyApiClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZakladyApiClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZakladyApiClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
