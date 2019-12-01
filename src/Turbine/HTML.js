var T = require('@funkia/turbine');

// Function for class descriptions

function arrayOf(a) {
  return [a];
}

exports.processAttributes = function(attrs) {
  // This function handles the small differences between the way the attributes
  // object is structured in purescript-turbine and vanilla Turbine.
  var newAttrs = Object.assign({}, attrs);
  if (attrs.classes !== undefined) {
    // Only create an array if necessary
    newAttrs.class = [attrs.class, attrs.classes];
    delete newAttrs.classes;
  }
  return newAttrs;
}

exports.staticClass = arrayOf;

exports.dynamicClass = arrayOf;

exports._toggleClass = function(name, behavior) {
  var obj = {};
  obj[name] = behavior;
  return [obj];
};

exports._h1 = function() {
    return T.elements.h1;
};

exports._h2 = function() {
    return T.elements.h2;
};

exports._h3 = function() {
    return T.elements.h3;
};

exports._h4 = function() {
    return T.elements.h4;
};

exports._h5 = function() {
    return T.elements.h5;
};

exports._h6 = function() {
    return T.elements.h6;
};

exports._ul = function() {
    return T.elements.ul;
};

exports._li = function() {
    return T.elements.li;
};

exports._span = function() {
    return T.elements.span;
};

exports._div = function() {
    return T.elements.div;
};

exports._input = function() {
  return T.elements.input;
};

exports._inputRange = function () {
  return function(attrs) {
    var attrs2 = Object.assign({ type: "range" }, attrs)
    return T.elements.input(attrs2);
}  ;
};

exports._textarea = function() {
    return T.elements.textarea;
};

exports._checkbox = function() {
  return T.elements.checkbox;
};

exports._a = function() {
    return T.elements.a;
};

exports._p = function() {
    return T.elements.p;
};

exports._i = function() {
    return T.elements.i;
};

exports._button = function() {
    return T.elements.button;
};

exports._label = function() {
    return T.elements.label;
};

exports._header = function() {
    return T.elements.header;
};

exports._footer = function() {
  return T.elements.footer;
};

exports._section = function() {
    return T.elements.section;
};

exports._table = function() {
    return T.elements.table;
};

exports._th = function() {
    return T.elements.th;
};

exports._tr = function() {
    return T.elements.tr;
};

exports._td = function() {
    return T.elements.td;
};

exports._progress = function() {
    return T.elements.progress;
};

exports._text = T.text;

exports._textB = T.dynamic;

exports.br = T.elements.br;

exports.empty = T.emptyComponent;
