input.onButtonPressed(Button.A, function () {
    navesita.move(-1)
})
function mi_enemigo () {
    enemigo = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(500)
        enemigo.change(LedSpriteProperty.Y, 1)
    }
}
input.onButtonPressed(Button.B, function () {
    navesita.move(1)
})
let enemigo: game.LedSprite = null
let navesita: game.LedSprite = null
navesita = game.createSprite(2, 4)
mi_enemigo()
basic.forever(function () {
    let sprite: game.LedSprite = null
    if (enemigo.isTouching(sprite)) {
    	
    }
})
