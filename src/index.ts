import { VM } from "vm2";

export function pureEval(fn, ...args) {
  const vm = new VM();
  return vm.run(`"use strict"; (${fn.toString()})(${args})`);
}
