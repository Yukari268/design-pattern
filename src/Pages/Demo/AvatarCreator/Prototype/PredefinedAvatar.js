import ThemeFactory from "../Flyweight/ThemeFactory"

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