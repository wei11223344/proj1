bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
    bluetooth.startLEDService()
    bluetooth.startTemperatureService()
})
input.onButtonPressed(Button.A, function () {
    if (test2 == "tempeture") {
        basic.showString("Very Good!")
        music.playMelody("C5 A G C5 A B C5 C5 ", 200)
        basic.showString("Okay lets connect to bluetooth now")
    }
})
input.onButtonPressed(Button.B, function () {
    if (test2 == "tempeture") {
        basic.showString("Very strange")
        basic.showString("Please save a copy of this code and import it to another microbit")
    }
})
let test2 = ""
let select = false
test2 = "nothing"
let proceed = "False"
basic.showString("...")
music.playMelody("G D E A - B - C5 ", 200)
basic.showString("Welcome!")
basic.showAnimation(`
    # . . . #
                    . . . . .
                    . . # . .
                    # . . . #
                    . # # # .
`)
basic.showString("Lets start")
basic.showString("Is the tempeture(F)   ")
basic.showNumber(input.temperature() * 1.8 + 35)
basic.showString("A for yes B for no")
test2 = "tempeture"
