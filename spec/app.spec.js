import {App} from '../src/app';

describe('App', () => {
  describe('.createPairs', () => {
    it('returns pairs', () => {
      var app = new App();
      expect(app.createPairs()).toEqual([]);
    });
  });
});
