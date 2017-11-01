const fetch = require("node-fetch");
const util = require("util");
const parseXML = util.promisify(require("xml2js").parseString);

// key: VIbD8ThhTBXecCuZJfwzw
// secret: GtvYrA4AMZGPtKgChhAJLAFQAL1OTMs3RDgxhiSMI4

const x = fetch(
  "https://www.goodreads.com/author/show.xml?id=4432&key=VIbD8ThhTBXecCuZJfwzw"
)
  .then(response => response.text())
  .then(parseXML);
x;
