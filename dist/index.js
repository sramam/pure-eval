"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vm2_1 = require("vm2");
function pureEval(fn, ...args) {
    const vm = new vm2_1.VM();
    return vm.run(`"use strict"; (${fn.toString()})(${args})`);
}
exports.pureEval = pureEval;
//# sourceMappingURL=index.js.map