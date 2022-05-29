import * as PIXI from 'pixi.js'

export class Fish extends PIXI.Sprite {
speed : number

    constructor(texture: PIXI.Texture) {
        super(texture)
        console.log("I am a capybarraa")
        console.log(this)
        this.speed = Math.random() * 5
        this.x = Math.random() * 800
        this.y = Math.random() * 600
        this.anchor.set(0.5)
        this.scale.set(Math.random() * 0.3)

    }
    swim(){
         this.x *= 1
            this.tint = Math.random() * 0xFFFFFF;
            this.rotation -= 0.01
            this.x += 4
            if (this.x > 900) {
                this.x = -100
            }
        this.x -= this.speed
    }
}

