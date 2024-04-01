//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// export const encode = (str) => {
//   let res = '';
//   for (let i = 0; i < str.length; i++) {
//     let [c, stat] = [str[i], 1];
//     while (i+1 < str.length && str[i] == str[i+1]) {
//       i++;
//       stat++;
//     }
//     if (stat > 1) {
//       res += stat.toString();
//     }
//     res += c;
//   }
//   return res;
// };

// export const decode = (str) => {
//   let res = '';
//   for (let i = 0; i < str.length; i++) {
//     if (!/\d/.test(str[i])) {
//       res += str[i];
//       continue;
//     }
//     let num = parseInt(str[i]);
//     while (i+1 < str.length && /\d/.test(str[i+1])) {
//       num = num * 10 + parseInt(str[i+1]);
//       i++;
//     }
//     res += str[i+1].repeat(num);
//     i++;
//   }
//   return res;
// };


export const encode = (str) => {
  return str.replace(/(.)\1*/g, (match, c) => match.length > 1 ? match.length + c : c);
};

export const decode = (str) => {
  return str.replace(/(\d+)(\D)/g, (_, length, c) => c.repeat(length));
};