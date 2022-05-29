import * as PIXI from "pixi.js"

export class Player extends PIXI.Sprite {
    speedx = 0;
    speedy = 0;

    constructor(texture: PIXI.Texture) {
        super(texture)

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))

        this.x = Math.random() * 1200;
        this.y = Math.random() * 400;

        this.scale.set(0.2)
    }

    public update() {
        this.x += this.speedx
        this.y += this.speedy

        if (this.x > 1500) {
            this.x = -100;
        } else if (this.x < -100) {
            this.x = 1500
        } else if (this.y < -20) {
            this.x = -100;
            this.y = 150;
        }
    }

    onKeyDown(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case "A":
            case "ARROWLEFT":
                this.speedx = -3
                break
            case "D":
            case "ARROWRIGHT":
                this.speedx = 3
                break
            case "W":
            case "ARROWUP":
                this.speedy = -3
                break
            case "S":
            case "ARROWDOWN":
                this.speedy = 3
                break
        }
    }

    onKeyUp(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case "A":
            case "ARROWLEFT":
            case "D":
            case "ARROWRIGHT":
                this.speedx = 0
                break;
            case "W":
            case "ARROWUP":
            case "S":
            case "ARROWDOWN":
                this.speedy = 0
                break
        }
    }
}