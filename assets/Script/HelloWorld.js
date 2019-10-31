cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, Vinh!',
        cocosSprite: cc.Sprite
    },

    // use this for initialization
    onLoad: function () {
        this.label.string = this.text;
    },

    start:function(){
        this.cocosSprite.node.runAction(cc.repeatForever(cc.rotateBy(5,360)));
    },

    // called every frame
    update: function (dt) {
        this.node.setPositionX(this.node)
    },
});
