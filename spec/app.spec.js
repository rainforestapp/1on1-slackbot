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

    describe('with a list of members', () => {
      xit('returns pairs of members that should have a 1on1', () => {
        let people = ['@alice', '@bob'];
        expect(app.createPairs(people, 0.5)).toEqual([['@alice', '@bob']]);
      });
    });
  });

  describe('.stringifyAssignments', () => {
    describe('with no pairs', () => {
      it('returns an empty string', () => {
        expect(app.stringifyAssignments([])).toEqual('');
      });
    });

    describe('with one pair', () => {
      it('returns the formatted pair with a period', () => {
        let pairs = [['@alice', '@bob']];
        expect(app.stringifyAssignments(pairs)).toEqual('@alice with @bob.');
      });
    });

    describe('with two pairs', () => {
      it('returns the pairs separated by a newline and "and"', () => {
        let pairs = [['@alice', '@bob'], ['@charlie', '@diane']];
        let result = app.stringifyAssignments(pairs);
        expect(result).toEqual('@alice with @bob and \n@charlie with @diane.');
      });
    });

    describe('with more than two pairs', () => {
      it('returns the pairs separated with newlines and commas', () => {
        let pairs = [['@a', '@b'], ['@c', '@d'], ['@e', '@f']];
        let result = app.stringifyAssignments(pairs);
        expect(result).toEqual('@a with @b, \n@c with @d and \n@e with @f.');
      });
    });
  });
});
