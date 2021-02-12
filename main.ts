enum ActionKind {
    Walking,
    Idle,
    Jumping
}
let alt_engel: Image = null
let üst_engel: Image = null
let block = 0
scene.setBackgroundColor(11)
effects.blizzard.startScreenEffect()
let arbot = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . d d d . . . . . . . 
    . . . 9 9 d 8 8 8 d 9 9 . . . . 
    . . . 9 d 8 9 8 9 8 d 9 . . . . 
    . . . d 8 8 8 8 8 8 8 d . . . . 
    . . . d 8 9 8 8 8 9 8 d . . . . 
    . . . d 8 8 9 9 9 8 8 d 2 2 2 . 
    . . . . d 8 8 8 8 8 d . 2 2 2 . 
    . . . . . c c c c c . . c . . . 
    . . c c c c c c c c c c c . . . 
    . . c . c c c c c c c . . . . . 
    . . . . c c c 9 c c c . . . . . 
    . . . . c c 9 9 9 c c . . . . . 
    . . . . c c 9 9 9 c c . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
arbot.ay = 250
let anim = animation.createAnimation(ActionKind.Walking, 1000)
anim.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . d d d . . . . . . . 
    . . . 9 9 d 8 8 8 d 9 9 . . . . 
    . . . 9 d 8 9 8 9 8 d 9 . . . . 
    . . . d 8 8 8 8 8 8 8 d . . . . 
    . . . d 8 9 8 8 8 9 8 d . . . . 
    . . . d 8 8 9 9 9 8 8 d 2 2 . . 
    . . . . d 8 8 8 8 8 d . 2 2 . . 
    . . . . . c c c c c . . c . . . 
    . . c c c c c c c c c c c . . . 
    . . c . c c c c c c c . . . . . 
    . . . . c c c 9 c c c . . . . . 
    . . . . c c 9 9 9 c c . . . . . 
    . . . . c c 9 9 9 c c . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
anim.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . d d d . . . . . . . 
    . . . 9 9 d 8 8 8 d 9 9 . . . . 
    . . . 9 d 8 9 8 9 8 d 9 . . . . 
    . . . d 8 8 8 8 8 8 8 d . . . . 
    . . . d 8 9 8 8 8 9 8 d . . . . 
    . . . d 8 8 9 9 9 8 8 d 2 . . . 
    . . . . d 8 8 8 8 8 d . 2 . . . 
    . . . . . c c c c c . . c . . . 
    . . c c c c c c c c c c c . . . 
    . . c . c c c c c c c . . . . . 
    . . . . c c c 9 c c c . . . . . 
    . . . . c c 9 9 9 c c . . . . . 
    . . . . c c 9 9 9 c c . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
anim.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . d d d . . . . . . . 
    . . . 9 9 d 8 8 8 d 9 9 . . . . 
    . . . 9 d 8 9 8 9 8 d 9 . . . . 
    . . . d 8 8 8 8 8 8 8 d . . . . 
    . . . d 8 9 8 8 8 9 8 d . . . . 
    . . . d 8 8 9 9 9 8 8 d . . . . 
    . . . . d 8 8 8 8 8 d . 2 . . . 
    . . . . . c c c c c . . c . . . 
    . . c c c c c c c c c c c . . . 
    . . c . c c c c c c c . . . . . 
    . . . . c c c 9 c c c . . . . . 
    . . . . c c 9 9 9 c c . . . . . 
    . . . . c c 9 9 9 c c . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
animation.attachAnimation(arbot, anim)
game.onUpdateInterval(500, function () {
    block = randint(0, 3)
    if (block == 0) {
        üst_engel = img`
            ....ccbdaaaaaaaaadbcc...
            ....ccbdaaaaaaadddbcc...
            ....ccbdaaaaaadaadbcc...
            ....ccbdaaaaaaaaadbcc...
            ....ccbdaaaaaaaaadbcc...
            ....ccbdaaaaaaaaadbcc...
            ....ccbdaaaaaaaaadbcc...
            ....ccbdaaaadaaaadbcc...
            ....ccbdddddaaaaadbcc...
            ....ccbdaaaaaaaaadbcc...
            ....ccbaaaaaaaaaaabcc...
            ....ccbaaaaaaaaaaabcc...
            ....c3baaaaaaaaaaabcc...
            ....3cbaaaaaaaaaaabcc...
            ....ccbaaaaaaaaaaabcc...
            ....ccbaaaaaaaaaaabcc...
            `
        alt_engel = img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `
    }
})
