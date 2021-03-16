input.onGesture(Gesture.TiltLeft, function () {
    Voyager.change(LedSpriteProperty.X, -1)
    Voyager.ifOnEdgeBounce()
})
input.onGesture(Gesture.TiltRight, function () {
    Voyager.change(LedSpriteProperty.X, 1)
    Voyager.ifOnEdgeBounce()
})
let Voyager: game.LedSprite = null
Voyager = game.createSprite(2, 4)
let Kazon = game.createSprite(0, 0)
basic.forever(function () {
    basic.pause(300)
})
