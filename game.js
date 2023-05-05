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
        
        this.load.audio('squeaky', '/assets/rubberduck_edited.mp3');
        console.log('audio loaded');
    }

    create() {
        // Add logo image, and scale the logo
        let logo = this.add.image(400, 300, 'logo').setScale(0);
        logo.alpha = 1;
        // Create the tween
        this.tweens.add({
            targets: logo,
            scaleX: 0.065,
            scaleY: 0.065,
            // alpha: 1,
            duration: 1500,
            ease: 'Power5',
            // delay: 1000,
        });

        // Right ducky
        let ducky1 = this.add.image(700, 300, 'ducky').setScale(0.3, 0.3);
        ducky1.alpha = 0;
        this.tweens.add({
            targets: ducky1,
            alpha: 1,
            duration: 500,
            ease: 'Linear',
            delay: 2000,
        });

        // Left ducky
        let ducky2 = this.add.image(100, 300, 'ducky').setScale(-0.3, 0.3);
        ducky2.alpha = 0;
        this.tweens.add({
            targets: ducky2,
            alpha: 1,
            duration: 500,
            ease: 'Linear',
            delay: 2000,
        });

        // Top rectangle
        let rectTop = this.add.rectangle(1300, 180, 700, 5, 0x000000);
        let rTopTween = this.tweens.add({
            targets: rectTop,
            x: game.config.width / 2,
            duration: 1000,
            delay: 700,
        });
        rTopTween.play();
    
        // Bottom rectangle
        let rectBot = this.add.rectangle(-500, 420, 700, 5, 0x000000);
        let rBotTween = this.tweens.add({
            targets: rectBot,
            x: game.config.width / 2,
            duration: 1000,
            delay: 700,
        });
        rBotTween.play();

        let squeak = this.sound.add('squeaky');
        squeak.play({ delay: 1000 });

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