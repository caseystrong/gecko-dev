// |reftest| shell-option(--enable-array-find-last) skip-if(!xulRuntime.shell) -- requires shell-options
// Copyright (C) 2021 Microsoft. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.findlast
description: >
  Predicate is not called on empty instances
info: |
  %TypedArray%.prototype.findLast (predicate [ , thisArg ] )

  6. Repeat, while k ≥ 0,
  ...
    c. Let testResult be ! ToBoolean(? Call(predicate, thisArg, « kValue, 𝔽(k), O »)).
  ...
includes: [testBigIntTypedArray.js]
features: [BigInt, TypedArray, array-find-from-last]
---*/

testWithBigIntTypedArrayConstructors(function(TA) {
  var sample = new TA();
  var called = false;

  var result = sample.findLast(function() {
    called = true;
    return true;
  });

  assert.sameValue(
    called,
    false,
    "empty instance does not call predicate"
  );
  assert.sameValue(
    result,
    undefined,
    "findLast returns undefined when predicate is not called"
  );
});

reportCompare(0, 0);
