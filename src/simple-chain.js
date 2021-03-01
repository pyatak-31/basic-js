const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length;
  },
  
  addLink(value) {
    this.arr.push([`( ${value} )`, '~~']);
    return this;
  },

  removeLink(position) {
    if (typeof(position) != 'number' || position == 0 || position > this.arr.length) {
      this.arr = []; 
      throw new Error ('Error');
    }
  
		this.arr.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.arr.reverse();
    return this;
  },

  finishChain() {
    let res = [];
		for (let i = 0; i < this.arr.length; i++) {
			i == this.arr.length - 1 ? res.push([this.arr[i][0]]) : res.push([this.arr[i][0]], [this.arr[i][1]]);
		}
    this.arr = [];

    return res.join('');
  }
};

module.exports = chainMaker;
