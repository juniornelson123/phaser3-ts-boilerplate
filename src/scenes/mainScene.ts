export default class MainScene extends Phaser.Scene {
    private phaserSprite: Phaser.GameObjects.Sprite

    constructor(){
        super({
            key: "MainScene"
        })
    }

    preload(): void {
        this.load.image("logo", "./src/assets/phaser.png")
    }

    create(): void {
        this.phaserSprite = this.physics.add.sprite(400, 400, "logo")
        
    }

    update(): void {
        
    }
}