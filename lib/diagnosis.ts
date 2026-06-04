import { questions } from './questions';
import { getTypeInfo as getTypeInfoFromMap, typeMap } from './types';

export function calculateType(answerIndices: number[]) {
  const totals = { e: 0, s: 0, t: 0, j: 0 };

  answerIndices.forEach((optionIndex, questionIndex) => {
    const question = questions[questionIndex];
    const option = question.options[optionIndex];
    totals.e += option.scores.e;
    totals.s += option.scores.s;
    totals.t += option.scores.t;
    totals.j += option.scores.j;
  });

  const id = [
    totals.e >= 0 ? 'E' : 'I',
    totals.s >= 0 ? 'S' : 'N',
    totals.t >= 0 ? 'T' : 'F',
    totals.j >= 0 ? 'J' : 'P'
  ].join('');

  const finalType = typeMap.find((item) => item.id === id);
  return finalType ? finalType.id : 'INFJ';
}

export function getTypeInfo(typeId: string) {
  return getTypeInfoFromMap(typeId);
}
