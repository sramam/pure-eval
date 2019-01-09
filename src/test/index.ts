
import test from "ava";
import { pureEval } from "../index";
import { fixtures } from "./fixtures";

test(`sum`, (t) => {
  const result = pureEval(fixtures.sum, 2, 3);
  t.is(result, 5);
});

test(`sumAddK`, (t) => {
  try {
    const result = pureEval(fixtures.sumAddK, 2, 3);
    t.fail(`expected test to fail ${result}`);
  } catch (err) {
    t.is(err.message, `k is not defined`);
  }
});

test(`sub`, (t) => {
  try {
    const result = pureEval(fixtures.sub, 7, 3);
    t.fail(`expected test to fail ${result}`);
  } catch (err) {
    t.is(err.message, `sum is not defined`);
  }
});

test(`pureSub`, (t) => {
  const result = pureEval(fixtures.pureSub, 7, 3);
  t.is(result, 4);
});

test(`closureSub`, (t) => {
  try {
    const result = pureEval(fixtures.closureSub, 7, 3);
    t.fail(`expected test to fail ${result}`);
  } catch (err) {
    t.is(err.message, `sum is not defined`);
  }
});

test(`createsGlobalState`, (t) => {
  try {
    const result = pureEval(fixtures.createsGlobalState, 7, 3);
    t.fail(`expected test to fail ${result}`);
  } catch (err) {
    t.is(err.message, `GG is not defined`);
  }
});
