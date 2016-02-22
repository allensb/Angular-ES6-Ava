"use strict";

class ArrowController {

    constructor() {
        let vm = this;
        var list = [1, 2, 3];
        vm.result = list.map((x) => x * 2);
    }

    testFunction (value) {
        return 1 + value;
    }
}

export default ArrowController;
