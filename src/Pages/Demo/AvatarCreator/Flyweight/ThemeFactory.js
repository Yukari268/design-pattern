class Theme{
    constructor(theme){
        try{
            this.image = new window.Image();
            this.image.src = require(`../../../../Ulitities/Assets/${theme}.jpg`)
        }
        catch{
            this.image.src = require(`../../../../Ulitities/Assets/Default.jpg`)
        }
    }
}

export default class ThemeFactory{
    
    static{
        this.theme = [];
    }

    static getTheme(theme){
        if (!this.theme[theme]){
            this.theme[theme] = new Theme(theme)
            return this.theme[theme].image;
        }
        return this.theme[theme].image;
    }
}