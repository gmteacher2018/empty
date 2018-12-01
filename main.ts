

//% color="#AA278D"
namespace mrelliott {

    //% block
    export function helloWorld() {

    }

    // note that Caml casing yields lower case
    // block text with spaces

    //% block
    export function camlCaseTwo() {

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

