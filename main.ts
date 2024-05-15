input.onButtonPressed(Button.A, function () {
    item.move(1)
})
input.onButtonPressed(Button.B, function () {
    item.turn(Direction.Right, 90)
})
let item: game.LedSprite = null
item = game.createSprite(2, 2)
item.move(1)
item.turn(Direction.Right, 90)
game.setLife(1)
game.setScore(0)
let money2 = game.createSprite(randint(0, 10), randint(0, 10))
if (item.isTouching(money2)) {
    game.addScore(1)
    money2.delete()
}
loops.everyInterval(100, function () {
    if (item.isTouching(money2)) {
        money2 = game.createSprite(randint(0, 10), randint(0, 10))
    }
    if (item.isTouching(money2)) {
        money2.delete()
    }
})
