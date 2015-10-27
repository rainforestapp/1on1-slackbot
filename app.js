import moment from 'moment';
const currentMembers = ['adrian', 'julian', 'lita', 'akhila', 'edward'];
import clone from 'lodash/lang/clone';

function createPairs(members, shift) {
  let pairs = [];
  let usedIndexes = new Set();

  members.forEach(function(member, index) {
    let partnerIndex = (index + shift) % (members.length);

    if(!usedIndexes.has(index) && !usedIndexes.has(partnerIndex)){
      pairs.push([member, members[partnerIndex]]);
      usedIndexes.add(index);
      usedIndexes.add(partnerIndex);
    }else if(members.length - usedIndexes.size === 1){
      pairs.push([member, members[partnerIndex]]);
      usedIndexes.add(index);
      usedIndexes.add(partnerIndex);
    }
  });
  return pairs;
}

function createAssignments(members) {
  const currentDate = moment();

  // fortnightly rota
  let shift = (Math.floor(currentDate.weeks()) / 2) % (members.length - 1);

  if(shift === 0){
    shift++;
  }

  return createPairs(members, shift);
}

function stringifyAssignments(pairs) {
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

function thisWeekAnnouncement(text) {
  return `This week the following peeps will have 1on1s:\n${text}`;
}

function atMention(people) {
  return people.map(person => `@${person}`);
}

console.log(thisWeekAnnouncement(stringifyAssignments(createAssignments(atMention(currentMembers)))));
