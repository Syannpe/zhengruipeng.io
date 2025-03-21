import {add, multiply} from "./module/arithmetic.ts";

(function (): void {
    function totalCost(outbound: number, inbound: number, tax: number): number {
        return multiply(add(outbound, inbound), tax);
    }

    console.log(totalCost(19, 31, 1.2));
    console.log(totalCost(45, 27, 1.15));
})();