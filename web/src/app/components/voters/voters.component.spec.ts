import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotersComponent } from './voters.component';

describe('VotersComponent', () => {
  let component: VotersComponent;
  let fixture: ComponentFixture<VotersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
