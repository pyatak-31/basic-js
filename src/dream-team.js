const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(Array.isArray(members) == 0) {
    return 0;
  }
  let arr = [];
	for (let i of members) {
		if (typeof(i) == 'string') {
			let name = i.trim();
			arr.push(name[0].toUpperCase());
		}
	}
	return arr.sort().join("");
};
