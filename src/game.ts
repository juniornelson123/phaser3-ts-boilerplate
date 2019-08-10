import "phaser"
import MainScene from './scenes/mainScene'

const config: Phaser.Types.Core.GameConfig = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    scene: [MainScene],
    physics: {
        default: "arcade",
        arcade: {
            gravity: {y: 675},
            debug: true
        }
    }

}

export default class Game extends Phaser.Game {
    constructor(config: Phaser.Types.Core.GameConfig){
        super(config)
    }
}


window.addEventListener("load", () => {
    var game = new Game(config)
})

