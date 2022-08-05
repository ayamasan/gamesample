input.onButtonPressed(Button.A, function () {
    if (バケツ.get(LedSpriteProperty.X) > 0) {
        バケツ.change(LedSpriteProperty.X, -1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (バケツ.get(LedSpriteProperty.X) < 4) {
        バケツ.change(LedSpriteProperty.X, 1)
    }
})
let バケツ: game.LedSprite = null
game.setScore(0)
game.setLife(3)
let 雨1 = game.createSprite(randint(0, 4), 0)
バケツ = game.createSprite(2, 4)
basic.forever(function () {
    if (雨1.get(LedSpriteProperty.Y) == 4) {
        if (バケツ.get(LedSpriteProperty.X) != 雨1.get(LedSpriteProperty.X)) {
            music.playTone(131, music.beat(BeatFraction.Half))
            basic.showIcon(IconNames.Sad)
            game.removeLife(1)
            if (game.isGameOver()) {
                basic.showNumber(game.score())
            }
        } else {
            game.addScore(1)
            music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
        }
        雨1.set(LedSpriteProperty.X, randint(0, 4))
        雨1.set(LedSpriteProperty.Y, 0)
    } else {
        雨1.change(LedSpriteProperty.Y, 1)
    }
    basic.pause(300)
})
