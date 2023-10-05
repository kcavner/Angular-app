const raceArr = [
  { race: "orc", classes: [1, 3, 5, 6, 7] },
  { race: "troll", classes: [0, 1, 2, 3, 5, 6, 7] },
  { race: "tauren", classes: [4, 5, 6, 7] },
  { race: "undead", classes: [0, 1, 2, 3, 7] },
  { race: "human", classes: [0, 1, 2, 3, 7, 8] },
  { race: "night elf", classes: [2, 3, 4, 6, 7] },
  { race: "dwarf", classes: [2, 3, 6, 7, 8] },
  { race: "gnome", classes: [0, 1, 3, 7] },
];

const nameArr = [
  "El",
  "Eld",
  "Tir",
  "Nef",
  "Eth",
  "Ith",
  "Tal",
  "Ral",
  "Ort",
  "Thul",
  "Amn",
  "Sol",
  "Shael",
  "Dol",
  "Hel",
  "Io",
  "Lum",
  "Ko",
  "Fal",
  "Lem",
  "Pul",
  "Um",
  "Mal",
  "Ist",
  "Gul",
  "Vex",
  "Ohm",
  "Lo",
  "Sur",
  "Ber",
  "Jah",
  "Cham",
  "Zod",
];

const classArr = [
  { class: "mage", spec: [{role:"dps",specName:"arcane"}, {role:"dps",specName:"fire"}, {role:"dps",specName:"frost"}] },
  { class: "warlock", spec: [{role:"dps",specName:"affliction"}, {role:"dps",specName:"demonology"},{role:"dps",specName:"destruction"}] },
  { class: "priest", spec: [{role:"healer",specName:"discipline"}, {role:"healer",specName:"holy"}, {role:"dps",specName:"shadow"}] },
  { class: "rogue", spec: [{role:"dps",specName:"assassination"}, {role:"dps",specName:"combat"}, {role:"dps",specName:"sublety"}] },
  { class: "druid", spec: [{role:"dps",specName:"balance"}, {role:"dps",specName:"feral"}, {role:"healer",specName:"restoration"}] },
  { class: "shaman", spec: [{role:"dps",specName:"elemental"}, {role:"dps",specName:"enhancement"}, {role:"healer",specName:"restoration"}] },
  { class: "hunter", spec: [{role:"dps",specName:"beast mastery"}, {role:"dps",specName:"marksman"}, {role:"dps",specName:"survival"}] },
  { class: "warrior", spec: [{role:"dps",specName:"arms"}, {role:"dps",specName:"fury"}, {role:"tank",specName:"protection"}] },
  { class: "paladin", spec: [{role:"healer",specName:"holy"}, {role:"tank",specName:"protection"}, {role:"dps",specName:"retribution"}] },
];

const rollChar = () => {
  const raceRoll = raceArr[Math.floor(Math.random() * raceArr.length)];
  const classRoll = raceRoll.classes[Math.floor(Math.random() * raceRoll.classes.length)];
  const specRoll = classArr[classRoll].spec[Math.floor(Math.random() * classArr[classRoll].spec.length)];
  const nameString = rollName(twoOrThree())
  const rollString = nameString.charAt(0).toUpperCase() + nameString.slice(1).toLowerCase();

  // console.log(`name: ${rollString}
  // ${raceRoll.race} ${specRoll} ${classArr[classRoll].class}`);
  return {name:rollString, race:raceRoll.race, spec:specRoll.specName  + " " + classArr[classRoll].class}
};

const roster = () => {
  var rosterArr = []
  for(let i=0;i<26;i++){
    rosterArr.push(rollChar())

  }
  return rosterArr
}
const twoOrThree = () => {
  const twoThreeArr = [2,3]
  return twoThreeArr[Math.floor(Math.random() * twoThreeArr.length)]
}

const rollName = (twoThree) => {
  var nameBox = []
  for(let i=0;i<twoThree;i++){
    nameBox.push(nameArr[Math.floor(Math.random() * nameArr.length)])
}
return nameBox.join("") 
}

// console.log(rollChar())
console.log(...roster())

