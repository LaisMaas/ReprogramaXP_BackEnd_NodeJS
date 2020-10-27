const model = require("../models/maravilhosas-models");

const gerarNovoId = (array) => {
    if (array.length > 0) {
        return array[array.length - 1].id + 1
    } else {
        return 1
    }
  }


module.exports = gerarNovoId;