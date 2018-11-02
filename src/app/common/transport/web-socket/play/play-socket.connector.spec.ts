import {TestBed} from '@angular/core/testing';

import {PlaySocketConnector} from './play-socket.connector';

describe('PlaySocketConnector', () => {
  beforeEach(() => TestBed.configureTestingModule(
    {
      providers: [PlaySocketConnector]
    }));

  it('should be created', () => {
    const service: PlaySocketConnector = TestBed.get(PlaySocketConnector);
    expect(service).toBeTruthy();
  });
});
