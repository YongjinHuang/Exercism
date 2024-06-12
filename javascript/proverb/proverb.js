//
// This is only a SKELETON file for the 'Proverb' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const tpl = (a, b) => `For want of a ${a} the ${b} was lost.`;
const lst = (a, b) => `And all for the want of a ${a}${b}.`;

export const proverb = (...params) => {
  if (params.length === 0) {
    return '';
  }
  const arr = [];
  let lastQualifier = ``;
  if (typeof params[params.length-1] === 'object') {
    const {qualifier} = params.pop();
    lastQualifier = qualifier+' ';
  }
  for (let i = 0; i < params.length; i++) {
    if (i !== params.length-1) {
      arr.push(tpl(params[i], params[i+1]));
    } else {
      arr.push(lst(lastQualifier, params[0]));
    }
  }
  return arr.join('\n');
};
