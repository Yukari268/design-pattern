import React from 'react'
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark, dark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const AvatarCodeExplain = () => {
  return (
    <div className="code-explain-section">
      <h1 id="explain">Code Explain</h1>

      <p>Đầu tiên chúng ta sẽ nói về mẫu Prototype</p>
      <SyntaxHighlighter language="javascript" style={a11yDark}>
        {`import ThemeFactory from "../Flyweight/ThemeFactory"

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
    new Avatar("Yellow","BlanchedAlmond","Akatsuki2"),
    new Avatar("Pink","SeaShell","Default"),
    new Avatar("SlateBlue","BlanchedAlmond","Default"),
]`}
      </SyntaxHighlighter>

      <p>Tiếp đến chúng ta sẽ nói đến mẫu Flyweight</p>
      <SyntaxHighlighter language="javascript" style={a11yDark}>
        {`class Theme{
    constructor(theme){
        try{
            this.image = new window.Image();
            this.image.src = require(\`../../../../Ulitities/Assets/\${theme}.jpg\`)
        }
        catch{
            this.image.src = require(\`../../../../Ulitities/Assets/Default.jpg\`)
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
`}
      </SyntaxHighlighter>

      <p>Cuối cùng chúng ta sẽ nói đến mẫu Iterator. Thì trong Javascript người ta đã xây dựng nên một phương thức dựa theo design pattern này được gọi là forEach. Với mỗi Object thuộc class Array.prototype đều có thể sử dụng phương thức này.  </p>
      <SyntaxHighlighter language="javascript" style={a11yDark}>
        {`Array.prototype.forEach = function (callback) {
	if (callback && typeof callback === 'function') {
		for (var i = 0; i < this.length; i++) {
			callback(this[i], i, this);
		}
	}
};
        `}
      </SyntaxHighlighter>
      <p>Lúc này các bạn sẽ nghĩ rằng nếu giả sử có một class nào đó không thừa hưởng từ Array.prototype thì sẽ như thế nào? </p>
    </div>
  )
}

export default AvatarCodeExplain