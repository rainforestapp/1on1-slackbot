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

  describe('.createAssignments', () => {
    it('calls createPairs with members and correct shift', () => {
      let people = ['@alice', '@bob'];
      spyOn(app, 'createPairs');
      spyOn(app, 'currentWeek').and.returnValue(45);
      app.createAssignments(people);
      expect(app.createPairs).toHaveBeenCalledWith(people, 0.5);
    });
  });

  describe('.createPairs', () => {
    describe('with an empty list of members', () => {
      it('returns an empty list', () => {
        expect(app.createPairs([], 1)).toEqual([]);
      });
    });
  });
});
