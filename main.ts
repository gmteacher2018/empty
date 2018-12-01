

namespace basic {

    //% block
    export function helloWorld() {

    }

    //% block
    export function smiles() {
        basic.showLeds(`
        # . . . #
        . . . . .
        # . . . #
        . # . # .
        . . # . .
        `)
        basic.showIcon(IconNames.No)
    }

}

