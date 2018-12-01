

namespace mrelliott {

    //% block weight=100 
    export function helloWorld() {

    }

    //% block  weight=100 
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

