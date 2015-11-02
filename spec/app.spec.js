import {App} from '../src/app';

describe('App', () => {
  let app = new App();

  describe('.createPairs', () => {
    it('returns pairs', () => {
      expect(app.createPairs()).toEqual([]);
    });
  });

  describe('.atMention', () => {
    describe('with a list of names', () => {
      it('prefixes @ symbols to a list of names', () => {
        let people = ['alice', 'bob'];
        expect(app.atMention(people)).toEqual(['@alice', '@bob']);
      });
    });

    describe('with an empty list', () => {
      it('returns an empty list', () => {
        expect(app.atMention([])).toEqual([]);
      });
    });
  });
});
