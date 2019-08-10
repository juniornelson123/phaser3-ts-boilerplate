# Add dependencies
``` 
yarn add expose-loader phaser ts-loader typescript webpack webpack-cli webpack-dev-server 
```
  
# Create tsconfig.json

```
{
    "compilerOptions": {
        "target": "ES6",
        "module": "commonjs",
        "sourceMap": true,
        "noImplicitAny": false,
        "strict": false
    }
}
```

# Create webpack.config.js

```
var path = require('path');
var pathToPhaser = path.join(__dirname, '/node_modules/phaser/');
var phaser = path.join(pathToPhaser, 'dist/phaser.js');

module.exports = {
    entry: './src/game.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: 'ts-loader', exclude: '/node_modules/' },
            { test: /phaser\.js$/, loader: 'expose-loader?Phaser' }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, './'),
        publicPath: '/dist/',
        host: '127.0.0.1',
        port: 8080,
        open: true
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            phaser: phaser
        }
    }
};

```

# Create base for project

    ```
        ...
        src
            - assets
                image.png
            - scenes
                mainScene.ts
            game.ts
        index.html
        ...
    ```

# Create base for index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Example Ts</title>
     <script src="dist/bundle.js"></script>
</head>
<body>
    <div id="game"></div>
</body>
</html>
```

# Create base for mainScene.ts
```
export default class MainScene extends Phaser.Scene {
    private phaserSprite: Phaser.GameObjects.Sprite //Phaser.Physics.Arcade.Sprite

    constructor(){
        super({
            key: "MainScene"
        })
    }

    preload(): void {
        this.load.image("logo", "./src/assets/phaser.png")
    }

    create(): void {
        this.phaserSprite = this.physics.add.sprite(400, 400, 
    }

    update(): void {
        // loop code...
    }
}
```

# Create base for game.ts

```
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


```