class Subscriber{
    update(){}
}

export default class User extends Subscriber{ 
    static instance = null;

    constructor(){
        super();
    }

    static getUser(){
        if (this.instance == null){
            this.instance = {
                update: () => {
                    this.instance.audio.src = require("../../../../Ulitities/Assets/Sound/alarm_clock.mp3")
                    this.instance.audio.play()
                },
                audio: document.createElement("AUDIO")
            };
            return this.instance;
        }
        return this.instance;
    }

    static update(){
        this.instance.audio.src = require("../../../../Ulitities/Assets/Sound/alarm_clock.mp3")
        this.instance.audio.play()
    }
}