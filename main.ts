radio.onReceivedNumber(function (receivedNumber) {
    v = receivedNumber
})
let v = 0
radio.setGroup(1)
v = 99
basic.forever(function () {
    if (v == 1) {
        wuKong.setAllMotor(100, 100)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (v == 2) {
        wuKong.setAllMotor(-100, -100)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (v == 3) {
        wuKong.setAllMotor(100, 20)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (v == 4) {
        wuKong.setAllMotor(20, 100)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (v == 0) {
        TPBot.stopCar()
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
    }
})
