const Laptop = require("./laptop");
const Tablet = require("./tablet");

const gadget = { Laptop, Tablet };

// add module.export here

module.exports = {
    createGadget(type, attributes) {
        const GadgetType = gadget[type];
        return new GadgetType(attributes);
    }
};