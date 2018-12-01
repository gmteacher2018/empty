

namespace basic {

    //% block weight=100 
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

