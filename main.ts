let SONIDO = false
input.onSound(DetectedSound.Loud, function () {
    SONIDO = !(SONIDO)
    if (SONIDO) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . . # . .
            . # # # .
            `)
    } else {
        basic.clearScreen()
    }
})
