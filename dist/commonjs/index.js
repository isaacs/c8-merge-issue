"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
console.error('start of module');
const branchSwitch = process.env.BRANCH_SWITCH;
const x = () => {
    console.error('start of function');
    let x = 0;
    if (branchSwitch !== undefined) {
        console.error('branch 1');
        x = Number(branchSwitch);
    }
    else {
        console.error('branch 2');
    }
    console.error('end of function');
    return x;
};
exports.x = x;
console.error('end of module');
//# sourceMappingURL=index.js.map