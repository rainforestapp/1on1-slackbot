import moment from 'moment';
import clone from 'lodash/lang/clone';
import flow from 'lodash/function/flow';

export function createPairs(members, shift) {
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

export function createAssignments(members) {
  const currentDate = moment();

  // fortnightly rota
  let shift = (Math.floor(currentDate.weeks() / 2)) % (members.length - 1);

  if(shift === 0){
    shift++;
  }

  return createPairs(members, shift);
}

export function stringifyAssignments(pairs) {
  return pairs.map(function(pair, i){
    let result = pair[0] + ' with ' + pair[1];
    if(i === pairs.length -2){
      result += ' and ';
    }else if(i >= pairs.length -1){
      result += '';
    }else{
      result += ', ';
    }
    return result;
  }).join('\n');
}

export function thisWeekAnnouncement(text) {
  return `Hello @channel, this week I bring you the following lovely 1on1s:\n${text}`;
}

export function atMention(people) {
  console.log('yo', people);
  return people.map(person => `@${person}`);
}

export const slackMessage = flow(atMention, createAssignments,stringifyAssignments, thisWeekAnnouncement);
