class Intro extends Phaser.Scene {
    constructor() {
        super('intro');
    }

    create() {
        let clickText = this.add.text(10,10,"Click to start.");

        clickText.setX(this.game.config.width / 2 - clickText.width / 2);
        clickText.setY(this.game.config.height / 2 - clickText.height / 2);

        this.input.on('pointerdown',  () => this.scene.start('logoscene'));
    }
}

class LogoScene extends Phaser.Scene {
    constructor(){
        super("logoscene");
    }

    preload() {
        this.load.image('logo', '/assets/RubberDuckyTitle.png');
        this.load.image('ducky', '/assets/PixelDucky.png');
    }

    create() {
        // Add logo image, and scale the logo
        let logo = this.add.image(400, 300, 'logo').setScale(0.065);

        logo.alpha = 0;

        // Create the tween
        this.tweens.add({
            targets: logo,
            alpha: 1,
            duration: 5000,
            ease: 'Power1',
            delay: 1000,
        });


        let ducky1 = this.add.image(700, 300, 'ducky');
        ducky1.setScale(0.3, 0.3);

        let ducky2 = this.add.image(100, 300, 'ducky');
        ducky2.setScale(-0.3, 0.3);
    }
}

class Title extends Phaser.Scene {
    constructor(){
        super("title");
    }

    preload() {

    }

    create() {

    }
}

class Menu extends Phaser.Scene {
    constructor(){
        super("menu");
    }

    preload() {

    }

    create() {

    }
}

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: 0xB19CD8,
    scene: [Intro, LogoScene, Title, Menu]
}

let game = new Phaser.Game(config);