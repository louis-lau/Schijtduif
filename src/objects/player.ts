import { GameScene } from "../scenes/game-scene";

export class Player extends Phaser.Physics.Arcade.Sprite {

    private cursors: Phaser.Types.Input.Keyboard.CursorKeys
    public lives = 3

    constructor(scene) {
        super(scene, 50, 135, "pigeon")

        this.cursors = this.scene.input.keyboard.createCursorKeys()
        
        this.scene.add.existing(this)
        this.scene.physics.add.existing(this)

        this.setCollideWorldBounds(true)
        this.setBounce(0.2)
        this.setDragY(600)
        this.setDragX(20)
        this.setVelocityX(200)
        
        
        
    }
    
    
    public update(): void {
        
        
        if (this.cursors.up.isDown) {
            this.setVelocityY(-200)
        } else if (this.cursors.down.isDown) {
            this.setVelocityY(200)
        } 
        
        if (this.lives == 0) {
            this.scene.scene.start("EndScene");
        }
        
    }

    public accelerate() {
        if (this.body.velocity.x <= 700) {
            this.body.velocity.x+= 20
        }
    }    
    
        // jump when the body is touching the floor
        /*
        let grounded = this.body.touching.down 
        if (this.cursors.up.isDown && grounded) {
            this.setVelocityY(-400)
        }
        */
    

}