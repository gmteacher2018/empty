

//% color="#AA278D"
namespace basic {

    //% block
    export function helloWorld() {

    }

    // note that Caml casing yields lower case
    // block text with spaces

    //% block
    export function camlCaseTwo() {

    }

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
