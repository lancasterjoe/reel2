radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 200) {
        reel = randint(1, 9)
        basic.pause(200)
        if (reel == 1) {
            basic.showIcon(IconNames.Happy)
            radio.sendValue("B", 1)
        }
        if (reel == 2) {
            basic.showIcon(IconNames.Sad)
            radio.sendValue("B", 2)
        }
        if (reel == 3) {
            basic.showIcon(IconNames.Confused)
            radio.sendValue("B", 3)
        }
        if (reel == 4) {
            basic.showIcon(IconNames.Angry)
            radio.sendValue("B", 4)
        }
        if (reel == 5) {
            basic.showIcon(IconNames.Asleep)
            radio.sendValue("B", 5)
        }
        if (reel == 6) {
            basic.showIcon(IconNames.Surprised)
            radio.sendValue("B", 6)
        }
        if (reel == 7) {
            basic.showIcon(IconNames.Silly)
            radio.sendValue("B", 7)
        }
        if (reel == 8) {
            basic.showIcon(IconNames.Fabulous)
            radio.sendValue("B", 8)
        }
        if (reel == 9) {
            basic.showIcon(IconNames.Meh)
            radio.sendValue("B", 9)
        }
    }
})
let reel = 0
basic.showLeds(`
    . # # . .
    # . . # .
    . . # . .
    . # . . .
    # # # # .
    `)
radio.setGroup(1)
