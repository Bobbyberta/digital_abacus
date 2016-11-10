var game = new Phaser.Game(800, 600, Phaser.AUTO, 'digital_abacus', {

    //for Phaser to run a file it has to contain at least one of these functions

    //preload is used at the start to load assets and thins
    preload: function(){
        game.load.image('red', 'graphics/beadRed.png');
        game.load.image('blue', 'graphics/beadBlue.png');
        game.load.image('yellow', 'graphics/beadYellow.png');
        game.load.image('rod', 'graphics/rod.png');

    },

    //create makes the game world and calls things into it
    create: function () {

        this.centreAndScaleCanvas();

        game.stage.backgroundColor = "#19A3E0";

        this.addRods();

        this.redBead1 = game.add.sprite(5, 50, 'red');
        game.physics.enable(this.redBead1, Phaser.Physics.ARCADE);
        this.redBead1.body.collideWorldBounds = true;
        this.redBead1.anchor.setTo(0, 0.5);
        this.redBead1.inputEnabled = true;
        this.redBead1.input.enableDrag();
        this.redBead1.input.allowVerticalDrag = false;





        this.redBead2 = game.add.sprite(55, 50, 'red');
        game.physics.enable(this.redBead2, Phaser.Physics.ARCADE);
        this.redBead2.body.collideWorldBounds = true;
        this.redBead2.anchor.setTo(0, 0.5);
        this.redBead2.inputEnabled = true;
        this.redBead2.input.enableDrag();
        this.redBead2.input.allowVerticalDrag = false;


    },

    //runs 60 times a second and is where the interactive stuff is
    update: function(){


        game.physics.arcade.overlap(
            this.redBead1,
            this.redBead2,
            function(a, b) {
                this._collided(
                    a,
                    b
                );
            },
            null,
            this
        );

    },

    _collided: function(a, b){
        console.log('collision!!')
        this.redBead1.input.disableDrag();
        this.redBead1.body.velocity =-10;

    },


    //sets the canvas size and centres the game vertically
    centreAndScaleCanvas: function(){
        this.input.maxPointers = 1;
        this.disableVisibilityChange = true;

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
        this.scale.minWidth = 300;
        this.scale.minHeight = 400;
        this.scale.maxWidth = 1200;
        this.scale.maxHeight = 900;
        this.scale.pageAlignHorizontally = true;

        if (game.device.desktop) {
            this.scale.forceOrientation(true, false);
        }
    },

    addRods: function(){
        game.add.image(0, 50, 'rod');
        game.add.image(0, 100, 'rod');
        game.add.image(0, 150, 'rod');
        game.add.image(0, 200, 'rod');
        game.add.image(0, 250, 'rod');

        game.add.image(0, 310, 'rod');
        game.add.image(0, 360, 'rod');
        game.add.image(0, 410, 'rod');
        game.add.image(0, 460, 'rod');
        game.add.image(0, 510, 'rod');
    },

});