import {TestBed} from '@angular/core/testing';

import {AddEditActivityService} from './add-edit-activity.service';

describe('AddEditActivityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddEditActivityService = TestBed.get(AddEditActivityService);
    expect(service).toBeTruthy();
  });
});
