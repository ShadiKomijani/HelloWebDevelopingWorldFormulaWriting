let decidedType = 0;
let answer = 0;
let question = 0;

function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function gcd(x, y) {
  if ((typeof x !== 'number') || (typeof y !== 'number')) 
    return false;
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}
function getYourAnswer() {
  const yourAnswer = (document.querySelector('.js-your-answer-input')).value;
  check(yourAnswer);
}
function romanize(num) {
  var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
  for ( i in lookup ) {
    while ( num >= lookup[i] ) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}

function check(yourAnswer) {
  if (decidedType == 1) 
      {if (yourAnswer == answer) 
          {console.log('yay');
          document.querySelector('.result').innerHTML = "Exellent"}
      else
          {console.log('no', answer);
          document.querySelector('.result').innerHTML = `No, the answer is ${answer}`}}
  else if (decidedType == 2) 
      {if (yourAnswer == question) 
          {console.log('yay');
          document.querySelector('.result').innerHTML = "Exellent";}
      else
          {console.log('no', question);
          document.querySelector('.result').innerHTML = `No, the answer is ${question}`}}}


const metalsZarfiat = {
  1: ['H', 1, 1],3: ['Li', 1, 1],4: ['Be', 1, 2], 5: ['B', 1, 3], 11: ['Na', 1, 1], 12: ['Mg', 1, 2], 13: ['Al', 1, 3], 19: ['K', 1, 1], 20: ['Ca', 1, 2], 24: ['Cr', 2, 2, 3], 25: ['Mn', 5, 2, 3, 4, 6, 7], 26: ['Fe', 2, 2, 3], 27: ['Co', 2, 2, 3], 28: ['Ni', 2, 2, 3], 29: ['Cu', 2, 1, 2], 30: ['Zn', 1, 2], 37: ['Rb', 1, 1], 38: ['Sr', 1, 2], 47: ['Ag', 1, 1], 48: ['Cd', 1, 2], 50: ['Sn', 2, 2, 4], 55: ['Cs', 1, 1],56: ['Ba', 1, 2], 80: ['Hg', 2, 1, 2], 82: ['Pb', 2, 2, 4], 714: ['NH4', 1, 1]};
const nonmetalsZarfiat = {
  1: ['H', 1], 7: ['N', 3], 8: ['O', 2], 9: ['F', 1], 15: ['P', 3], 16: ['S', 2], 17: ['Cl', 1], 35: ['Br', 1], 53: ['I', 1], 81: ['OH', 1], 683: ['CO3', 2], 782: ['NO2', 1], 783: ['NO3', 1], 1584: ['PO4', 3], 1683: ['SO3', 2], 1684: ['SO4', 2]};
const metalsName = {
  1: "هیدروژن", 3: "لیتیم", 4: "بریلیم", 5: "بور", 11: "سدیم", 12: "منیزیم", 13: "آلومینیم", 19: "پتاسیم", 20: "کلسیم", 24: "کروم", 25: "منگنز", 26: "آهن", 27: "کبالت", 28: "نیکل", 29: "مس", 30: "روی", 37: "روبیدیم", 38: "استرانسیم", 47: "نقره", 48: "کادمیم", 50: "قلع", 55: "سزیم", 56: "باریم", 80: "جیوه", 
  82: "سرب", 714: "آمونیم"};
const nonmetalsName = {
  1: "هیدرید", 7: "نیترید", 8: "اکسید", 9: "فلئورید", 15: "فسفید", 16: "سولفید", 17: "کلرید", 35: "برمید", 53: "یدید", 81: "هیدروکسید", 683: "کربنات", 782: "نیتریت", 783: "نیترات", 1584: "فسفات", 1683: "سولفیت", 1684: "سولفات"};
const atomi1 = [
  1, 3, 4, 5, 11, 12, 13, 19, 20, 24, 25, 26, 27, 28, 29, 30, 37, 38, 47, 48, 50, 55, 56, 80, 82, 714];
const atomi2 = [
  1, 7, 8,  9, 15, 16, 17, 35, 53, 81, 683, 782, 783, 1584, 1683, 1684];

function mainFun() {
let x = randomNumber(0, atomi1.length - 1);
let y = randomNumber(0, atomi2.length - 1);
while (x == y) {
  x = randomNumber(0, atomi1.length - 1);
  y = randomNumber(0, atomi2.length - 1);
}

const felez = metalsZarfiat[atomi1[x]]
const nafelez = nonmetalsZarfiat[atomi2[y]]
let i = 2;
if (metalsZarfiat[atomi1[x]][1] != 1)
  {i = randomNumber(2, metalsZarfiat[atomi1[x]].length - 1)}
const zarfiatFelez = String(metalsZarfiat[atomi1[x]][i]);
const zarfiatNafelez = String(nonmetalsZarfiat[atomi2[y]][1]);
const esmFelez = metalsName[atomi1[x]];
const esmNafelez = nonmetalsName[atomi2[y]];
const cond = (atomi2[y] == 81 || atomi2[y] == 683 || atomi2[y] == 782 || atomi2[y] == 783 || atomi2[y] == 1584 || atomi2[y] == 1683 || atomi2[y] == 1684);

if (felez[1] == 1)
    {answer = esmFelez + " " + esmNafelez}
else
    {answer = esmFelez + '(' + romanize(zarfiatFelez) + ')' + " " + esmNafelez}

// be tor kolli
if (cond)
   {question = felez[0] + zarfiatNafelez + '(' + nafelez[0] + ')' + zarfiatFelez} 
else
    {question = felez[0] + zarfiatNafelez + nafelez[0] + zarfiatFelez}

// har do yeki
if (zarfiatFelez == zarfiatNafelez)
    {question = felez[0] + nafelez[0]}

// felez 1
else if (zarfiatFelez == 1)
    {question = felez[0] + zarfiatNafelez + nafelez[0]}

// nafelez 1
else if (zarfiatNafelez == 1)
    {if (!cond) 
        {question = felez[0] + nafelez[0] + zarfiatFelez}
    else 
        {question = felez[0] + "(" + nafelez[0] + ")" + zarfiatFelez}}

// felez bishtar
else if ((Number(zarfiatFelez)/Number(zarfiatNafelez)) % 1 == 0)
    {if (!cond)
        {if (!(Number(zarfiatNafelez)/(gcd(Number(zarfiatFelez), Number(zarfiatNafelez))) == 1))
            {question = felez[0] + String(Number(zarfiatNafelez)/(gcd(Number(zarfiatFelez), Number(zarfiatNafelez)))) + nafelez[0] + String(Number(zarfiatFelez)/(gcd(Number(zarfiatFelez), Number(zarfiatNafelez))))}
        else
            {question = felez[0] + nafelez[0] + String(Number(zarfiatFelez)/(gcd(Number(zarfiatFelez), Number(zarfiatNafelez))))}}
    else 
        {if (!(Number(zarfiatNafelez)/(gcd(Number(zarfiatFelez), Number(zarfiatNafelez))) == 1))
            {question = felez[0] + String(Number(zarfiatNafelez)/(gcd(Number(zarfiatFelez), Number(zarfiatNafelez)))) + "(" + nafelez[0] + ")" + String(Number(zarfiatFelez)/(gcd(Number(zarfiatFelez), Number(zarfiatNafelez))))}
        else
            {question = felez[0] + "(" + nafelez[0] + ")" + String(Number(zarfiatFelez)/(gcd(Number(zarfiatFelez), Number(zarfiatNafelez))))}}}

// nafelez bistar
else if ((Number(zarfiatNafelez)/Number(zarfiatFelez)) % 1 == 0)
    {if (!cond)
        {if (!(Number(zarfiatFelez)/(gcd(Number(zarfiatNafelez), Number(zarfiatFelez))) == 1))
            {question = felez[0] + String(Number(zarfiatNafelez)/(gcd(Number(zarfiatFelez), Number(zarfiatNafelez)))) + nafelez[0] + String(Number(zarfiatFelez)/(gcd(Number(zarfiatFelez), Number(zarfiatNafelez))))}
        else
            {question = felez[0] + String(Number(zarfiatNafelez)/(gcd(Number(zarfiatFelez), Number(zarfiatNafelez)))) + nafelez[0]}}
    else 
        {if (!(Number(zarfiatFelez)/(gcd(Number(zarfiatNafelez), Number(zarfiatFelez))) == 1))
            {question = felez[0] + String(Number(zarfiatNafelez)/(gcd(Number(zarfiatFelez), Number(zarfiatNafelez)))) + "(" + nafelez[0] + ")" + String(Number(zarfiatFelez)/(gcd(Number(zarfiatFelez), Number(zarfiatNafelez))))}
        else
            {question = felez[0] + String(Number(zarfiatNafelez)/(gcd(Number(zarfiatFelez), Number(zarfiatNafelez)))) + "(" + nafelez[0] + ")"}}}
                
        console.log('esm felez:', esmFelez)
        console.log('zarfiat felez:', zarfiatFelez)
        console.log('esm nafelez:', esmNafelez)
        console.log('zarfiat nafelez:', zarfiatNafelez)
        console.log('formula:', question)
        console.log('parsi:', answer)

        return question, decidedType, answer;
          }

function typeOne() {
  mainFun();
  console.log(question)
  document.querySelector('.question').innerHTML = question
}

function typeTwo() {
  mainFun();
  console.log(answer)
  document.querySelector('.question').innerHTML = answer
}
