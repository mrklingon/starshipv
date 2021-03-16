input.onGesture(Gesture.TiltLeft, function () {
    Voyager.change(LedSpriteProperty.X, -1)
    Voyager.ifOnEdgeBounce()
})
input.onGesture(Gesture.TiltRight, function () {
    Voyager.change(LedSpriteProperty.X, 1)
    Voyager.ifOnEdgeBounce()
})
let kmiss: game.LedSprite = null
let Voyager: game.LedSprite = null
images.createBigImage(`
    . . . . . . . . . .
    . # # . . . . . . .
    # # # # . . # # # .
    . . # # # # # . . .
    . . . . . . . . . .
    `).scrollImage(1, 200)
images.createBigImage(`
    . . . . . . . . . .
    . . . . . # . . . .
    . # . . # # # # # #
    . . . . . # # # . .
    . . . . . . . . . .
    `).scrollImage(1, 200)
Voyager = game.createSprite(2, 4)
let Kazon = game.createSprite(0, 0)
game.setLife(3)
basic.forever(function () {
    basic.pause(2000)
    while (true) {
        basic.pause(600)
        if (Kazon.get(LedSpriteProperty.X) < Voyager.get(LedSpriteProperty.X)) {
            Kazon.set(LedSpriteProperty.X, Kazon.get(LedSpriteProperty.X) + 1)
        }
        if (Kazon.get(LedSpriteProperty.X) > Voyager.get(LedSpriteProperty.X)) {
            Kazon.set(LedSpriteProperty.X, Kazon.get(LedSpriteProperty.X) - 1)
        }
        if (randint(0, 10) > 6) {
            kmiss = game.createSprite(Kazon.get(LedSpriteProperty.X), 0)
            for (let index = 0; index <= 4; index++) {
                kmiss.change(LedSpriteProperty.Y, 1)
                basic.pause(300)
            }
            if (kmiss.get(LedSpriteProperty.X) == Voyager.get(LedSpriteProperty.X)) {
                game.removeLife(1)
            } else {
                game.addScore(50)
            }
        }
        kmiss.delete()
    }
})
