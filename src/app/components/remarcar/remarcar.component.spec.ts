import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemarcarComponent } from './remarcar.component';

describe('RemarcarComponent', () => {
  let component: RemarcarComponent;
  let fixture: ComponentFixture<RemarcarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemarcarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemarcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
