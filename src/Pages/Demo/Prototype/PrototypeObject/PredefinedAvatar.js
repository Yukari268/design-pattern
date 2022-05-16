class Avatar {
    constructor(bodyColor, skinColor) {
        this.bodyColor = bodyColor;
        this.skinColor = skinColor;
    }

    clone() {
      const destination = new Avatar(this.bodyColor, this.skinColor)
      return destination;
    }
}

export let predefinedAvatar = [
    new Avatar("Red","BlanchedAlmond"),
    new Avatar("Pink","SeaShell"),
    new Avatar("SlateBlue","BlanchedAlmond"),
]