input.onGesture(Gesture.TiltLeft, function () {
    Voyager.change(LedSpriteProperty.X, -1)
    Voyager.ifOnEdgeBounce()
})
input.onButtonPressed(Button.B, function () {
    vmiss = game.createSprite(Voyager.get(LedSpriteProperty.X), 4)
    for (let index = 0; index <= 4; index++) {
        vmiss.change(LedSpriteProperty.Y, -1)
        basic.pause(300)
    }
    vmiss.delete()
})
input.onGesture(Gesture.TiltRight, function () {
    Voyager.change(LedSpriteProperty.X, 1)
    Voyager.ifOnEdgeBounce()
})
let vmiss: game.LedSprite = null
let Voyager: game.LedSprite = null
Voyager = game.createSprite(2, 4)
let Kazon = game.createSprite(0, 0)
basic.forever(function () {
    basic.pause(600)
    if (Kazon.get(LedSpriteProperty.X) < Voyager.get(LedSpriteProperty.X)) {
        Kazon.set(LedSpriteProperty.X, Kazon.get(LedSpriteProperty.X) + 1)
    }
    if (Kazon.get(LedSpriteProperty.X) > Voyager.get(LedSpriteProperty.X)) {
        Kazon.set(LedSpriteProperty.X, Kazon.get(LedSpriteProperty.X) - 1)
    }
})
