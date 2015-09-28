module.exports = function curry(fn) {
  var args = [].slice.call(arguments, 1)[0] || [];
  return function() {
    var _args = args.concat([].slice.call(arguments));
    if (_args.length >= fn.length) {
      return fn.apply(null, _args);
    }
    return curry(fn, _args);
  };
};
