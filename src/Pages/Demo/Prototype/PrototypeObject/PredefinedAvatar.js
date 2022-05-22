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

class ThemeFactory{
    
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

class Avatar {
    constructor(bodyColor, skinColor, themeImage) {
        this.bodyColor = bodyColor;
        this.skinColor = skinColor;
        this.themeImage = ThemeFactory.getTheme(themeImage);
    }

    clone() {
      let destination = new Avatar(this.bodyColor, this.skinColor);
      destination.themeImage = this.themeImage;
      return destination;
    }
}

export let predefinedAvatar = [
    new Avatar("Red","BlanchedAlmond","Halloween"),
    new Avatar("Pink","SeaShell","Default"),
    new Avatar("SlateBlue","BlanchedAlmond","Default"),
]