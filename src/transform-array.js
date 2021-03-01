const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (Array.isArray(arr) == 0) {
    throw new Error();
  }

  let res = [];
	for (let i = 0; i < arr.length; i++) {

		switch (arr[i]) {
			case '--double-next': i != arr.length - 1 ? res.push(arr[i + 1]) : 0; break;

			case '--discard-next': i != arr.length - 1 ? i++ : 0; break;

			case '--discard-prev': i > 0 && arr[i - 2] != '--discard-next' ? res.pop() : 0; break;

			case '--double-prev':  i > 0 && arr[i - 2] != '--discard-next' ? res.push(arr[i - 1]) : 0; break; 
      
      default:res.push(arr[i]);
    }

  }

	return res;
};
