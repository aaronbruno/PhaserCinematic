class Intro extends Phaser.Scene {
    constructor() {
        super('intro');
    }

    create() {
        this.cameras.main.setBackgroundColor('0xB19CD8');


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
        this.load.image('logo', 'assets/RubberDuckyTitle.png');
        this.load.image('ducky', 'assets/PixelDucky.png');
        
        this.load.audio('squeaky', 'assets/rubberduck_edited.mp3');
        console.log('Images and audio loaded, LogoScene');
    }

    create() {
        this.cameras.main.setBackgroundColor('0xB19CD8');
        
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

        // Rubberducky squeak sound effect
        let squeak = this.sound.add('squeaky');
        squeak.play({ delay: 1.7 });

        // Camera fade out after a delay of 2000 ms, fade-out lasting 1000 ms
        this.time.delayedCall(3500, function () {
            this.cameras.main.fadeOut(2500);
        }, [], this);
        
        // Transition to title scene
        this.time.delayedCall(6000, () => {
            this.scene.start('title');
        });
    }
}

class Title extends Phaser.Scene {
    constructor(){
        super("title");
    }

    preload() {
        this.load.audio('swoosh', 'assets/Swoosh_Edited.mp3');
        console.log('Audio loaded, TitleScene');
    }

    create() {
        let wind = this.sound.add('swoosh');
        wind.play({ volume: 3, delay: 0.35 });

        // create a new text object
        let titleText = this.add.text(-game.config.width, 250, 'The Last Gunslinger', {
            fontFamily: 'Brush Script MT',
            fontSize: 90,
            color: '#dd571c'
        });

        // create a tween to move the text from left to right
        this.tweens.add({
            targets: titleText,
            x: game.config.width / 2 - titleText.width / 2,
            ease: 'Power1',
            duration: 1000,
            delay: 1000
        });

        // Camera fade out after a delay of 4000 ms, fade-out lasting 2500 ms
        this.time.delayedCall(4000, function () {
            this.cameras.main.fadeOut(2500);
        }, [], this);
        
        // Transition to Menu scene
        this.time.delayedCall(7000, () => {
            this.scene.start('menu');
        });
    }
}

class Menu extends Phaser.Scene {
    constructor(){
        super("menu");
    }

    preload() {
        this.load.image('mainScreen', 'assets/MainScreen.png');
        
        this.load.audio('wildwest', 'assets/WildWest_Edited.mp3');
        console.log('Images and audio loaded, MenuScene');
    }

    create() {
        // Camera fade out after a delay of 4000 ms, fade-out lasting 2500 ms
        this.time.delayedCall(0, function () {
            this.cameras.main.fadeIn(4000);
        }, [], this);

        let image = this.add.sprite(game.scale.width / 2 , game.scale.height / 2,'mainScreen');

        // Set the image scale based on the calculated scaleFactor
        image.setScale(0.65, 0.85);

        let song = this.sound.add('wildwest');
        song.play({ volume: 0.4, delay: 0.35, loop: true });


        // create a new text object for "Play"
        let playText = this.add.text(-game.config.width, 385, 'Play ', {
            fontFamily: 'Impact',
            fontSize: 80,
            color: '#000000'
        });
        // create a tween to move the text from left to right
        this.tweens.add({
            targets: playText,
            x: 645,
            ease: 'Power1',
            duration: 1500,
            delay: 1000
        });
        // Set the shadow properties
        playText.setShadow(3, 3, 'rgba(0, 0, 0, 0.5)', 3);


        // create a new text object for "Load Game"
        let loadText = this.add.text(-game.config.width, 475, 'Load Game ', {
            fontFamily: 'Impact',
            fontSize: 24,
            color: '#000000'
        });
        // create a tween to move the text from left to right
        this.tweens.add({
            targets: loadText,
            x: 670,
            ease: 'Power1',
            duration: 1500,
            delay: 1300
        });
        // Set the shadow properties
        loadText.setShadow(3, 3, 'rgba(0, 0, 0, 0.5)', 3);


        // create a new text object for "Options"
        let optionsText = this.add.text(-game.config.width, 510, 'Options ', {
            fontFamily: 'Impact',
            fontSize: 24,
            color: '#000000'
        });
        // create a tween to move the text from left to right
        this.tweens.add({
            targets: optionsText,
            x: 700,
            ease: 'Power1',
            duration: 1500,
            delay: 1600
        });
        // Set the shadow properties
        optionsText.setShadow(3, 3, 'rgba(0, 0, 0, 0.5)', 3);


        // create a new text object for "Quit"
        let quitText = this.add.text(-game.config.width, 540, 'Quit ', {
            fontFamily: 'Impact',
            fontSize: 36,
            color: '#000000'
        });
        // create a tween to move the text from left to right
        this.tweens.add({
            targets: quitText,
            x: 715,
            ease: 'Power1',
            duration: 1500,
            delay: 1900
        });
        // Set the shadow properties
        quitText.setShadow(3, 3, 'rgba(0, 0, 0, 0.5)', 3);

    }
}

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: 0x000000,
    scene: [Intro, LogoScene, Title, Menu]
}

let game = new Phaser.Game(config);