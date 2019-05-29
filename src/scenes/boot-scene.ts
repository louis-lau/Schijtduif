import { Scene } from "phaser";

export class BootScene extends Phaser.Scene {

    private graphics: Phaser.GameObjects.Graphics

    constructor() {
        super({ key: "BootScene" })
    }

    init(){
    }

    preload(): void {
        this.load.image('green-shit', require('../assets/img/green-shit.png'))
        this.load.image('parrot-pigeon', require('../assets/img/parrot-pigeon.png'))
        this.load.image('pigeon', require('../assets/img/pigeon.png'))
        this.load.image('rasta-pigeon', require('../assets/img/rasta-pigeon.png'))
        this.load.image('white-shit', require('../assets/img/white-shit.png'))
        this.load.image('city-sky', require('../assets/img/city-sky.png'))
        this.load.image('flat', require('../assets/img/flat.png'))
        this.load.image('house1', require('../assets/img/house1.png'))
        this.load.image('house2', require('../assets/img/house2.png'))
        this.load.image("tileset", require("../assets/tileset.png"));
        this.load.tilemapTiledJSON("map-city", require("../assets/maps/city.json"));
        
        //audio files
        this.load.audio('spacetheme', [
            '../assets/audio/spacetheme.mp3',
            '../assets/audio/spacetheme.ogg'
        ]);

        this.load.on('complete', () => {
            console.log("everything is loaded")
            this.scene.start("StartScene");
        })
    }
}