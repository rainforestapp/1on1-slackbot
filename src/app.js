import moment from 'moment';
import _ from 'lodash';

const currentMembers = ['adrian', 'julian', 'lita', 'akhila', 'edward'];

export class App {

  currentWeek() {
    return moment().weeks();
  }

  createPairs(members = [], shift) {
    let pairs = [];
    let usedIndexes = [];

    members.forEach(function(member, index) {
      let partnerIndex = (index + shift) % (members.length);

      if(!_.includes(usedIndexes, index) && !_.includes(usedIndexes, partnerIndex)) {
        pairs.push([member, members[partnerIndex]]);
        usedIndexes.push(index);
        usedIndexes.push(partnerIndex);
      }else if(members.length - usedIndexes.size === 1){
        pairs.push([member, members[partnerIndex]]);
        usedIndexes.push(index);
        usedIndexes.push(partnerIndex);
      }
    });
    return pairs;
  }

  createAssignments(members) {
    // fortnightly rota
    let shift = (Math.floor(this.currentWeek()) / 2) % (members.length - 1);

    if (shift === 0) { shift++; }

    return this.createPairs(members, shift);
  }

  stringifyAssignments(pairs) {
    return pairs.map(function(pair, i){
      let result = pair[0] + ' with ' + pair[1];
      if(i === pairs.length -2){
        result += ' and ';
      }else if(i >= pairs.length -1){
        result += '.';
      }else{
        result += ', ';
      }
      return result;
    }).join('\n');
  }

  thisWeekAnnouncement(text) {
    return `This week the following peeps will have 1on1s:\n${text}`;
  }

  atMention(people) {
    return people.map(person => `@${person}`);
  }

  logWeeklyAnnouncement() {
    console.log(this.thisWeekAnnouncement(this.stringifyAssignments(this.createAssignments(this.atMention(currentMembers)))));
  }
}

let app = new App();
app.logWeeklyAnnouncement();
