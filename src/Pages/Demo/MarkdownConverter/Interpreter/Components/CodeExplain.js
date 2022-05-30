import React from "react";
import "./CodeExplain.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark, dark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeExplain = () => {
  return (
    <div className="code-explain-section">
      <h1 id="explain">Code Explain</h1>
      <p>
        Đối với ví dụ này chúng mình sử dụng thư viện <b>remark-parse</b> để
        chuyển từ MarkDown thành MarkDown AST. Sau đó sử dụng{" "}
        <b>remark-rehype</b> để chuyển từ MarkDown AST sang HTML AST. Cuối cùng
        chúng mình sử dụng <b>rehype-string</b> để chuyển từ HTML AST thành HTML
      </p>
      <SyntaxHighlighter language="javascript" style={a11yDark}>
        {`import { unified } from "../Library/unified";
import markdown from "../Library/remark-parse";
import remarkRehype from "../Library/remark-rehype";
import rehypeStringify from "../Library/rehype-stringify";

        const converter = unified()  //Tạo ra một processor để thực hiện các công việc phía dưới
          .use(markdown) //Chuyển từ MarkDown sang MarkDown AST
          .use(remarkRehype)  //Chuyển từ MarkDown AST sang HTML AST
          .use(rehypeStringify) //Chuyển từ HTML AST sang HTML
          .process(e.target.value) //e.target.value chính là input của người dùng
          .then((output) => {
            setOutPutValue(String(output)); //Đây là hàm trong React để cập nhật lại UI
      })`}
      </SyntaxHighlighter>
      <br />
      <p>
        Ok! Với những dòng đầu tiên thì các bạn cũng biết rằng chúng mình sử
        dụng cách tiếp cận Interpreter thứ hai. Những dòng code như{" "}
        <b>unified()</b> các bạn không cần quan tâm đâu. Unified là một thư viện
        chuyên dùng để tương tác với AST. Nó chuyên dụng bởi vì nó có những tiêu
        chuẩn thống nhất AST. Nếu các bạn muốn tham khảo thư viện Unified thì
        tụi mình có đặt đường link ở dưới mục tài liệu tham khảo ấy. Sau đây
        chúng ta sẽ tiếp tục đến phần phân tích source code thư viện{" "}
        <b>remark-parse</b>
      </p>
      <br />
      <h3 id="remark-parse">Hàm trả về của thư viện remark-parse</h3>
      <SyntaxHighlighter language="javascript" style={a11yDark}>
        {`export const fromMarkdown =

  function (value, encoding, options) {

    if (typeof encoding !== 'string') {
      options = encoding
      encoding = undefined
    }

    // Hàm compiler sẽ trả về con trỏ đến hàm compile với những options được truyền vào
    const MarkDownCompile = compiler(options);

    // Phân tích cú pháp chuỗi đầu vào
    // Preprocess: Tokenize Chuỗi
    // Postprocess: Subtokenize Chuỗi
    let postprocessedString = postprocess(
      parse(options).document().write(preprocess()(value, encoding, true))
    );

    // Chuyển đổi từ Chuỗi đã được phân tích cú pháp thành AST
    return MarkDownCompile(postprocessedString)
  }`}
      </SyntaxHighlighter>
      <br />
      <h3 id="compiler">Hàm complier</h3>
      <SyntaxHighlighter language="javascript" style={a11yDark}>
        {`function compiler(options = {}) {

  // Trả về một object config có dạng như JSON
  const config = configure(
    {
      // transform là những hàm sẽ tác động lên AST, mặc định là rỗng
      transforms: [],
      // Những phần tử có thể chứa ký tự EOL
      canContainEols: [
        'emphasis',
        'fragment',
        'heading',
        'paragraph',
        'strong'
      ],
      // Khi mình push vào stack thì ứng với phần tử nào nên dùng hàm nào
      enter: {
        autolink: opener(link),
        autolinkProtocol: onenterdata,
        autolinkEmail: onenterdata,
        atxHeading: opener(heading),
        blockQuote: opener(blockQuote),
        characterEscape: onenterdata,
        characterReference: onenterdata,
        codeFenced: opener(codeFlow),
        codeFencedFenceInfo: buffer,
        codeFencedFenceMeta: buffer,
        codeIndented: opener(codeFlow, buffer),
        codeText: opener(codeText, buffer),
        codeTextData: onenterdata,
        data: onenterdata,
        codeFlowValue: onenterdata,
        definition: opener(definition),
        definitionDestinationString: buffer,
        definitionLabelString: buffer,
        definitionTitleString: buffer,
        emphasis: opener(emphasis),
        hardBreakEscape: opener(hardBreak),
        hardBreakTrailing: opener(hardBreak),
        htmlFlow: opener(html, buffer),
        htmlFlowData: onenterdata,
        htmlText: opener(html, buffer),
        htmlTextData: onenterdata,
        image: opener(image),
        label: buffer,
        link: opener(link),
        listItem: opener(listItem),
        listItemValue: onenterlistitemvalue,
        listOrdered: opener(list, onenterlistordered),
        listUnordered: opener(list),
        paragraph: opener(paragraph),
        reference: onenterreference,
        referenceString: buffer,
        resourceDestinationString: buffer,
        resourceTitleString: buffer,
        setextHeading: opener(heading),
        strong: opener(strong),
        thematicBreak: opener(thematicBreak)
      },
      // Khi mình pop ra khỏi stack thì ứng với phần tử nào chúng ta nên dùng hàm nào
      exit: {
        atxHeading: closer(),
        atxHeadingSequence: onexitatxheadingsequence,
        autolink: closer(),
        autolinkEmail: onexitautolinkemail,
        autolinkProtocol: onexitautolinkprotocol,
        blockQuote: closer(),
        characterEscapeValue: onexitdata,
        characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
        characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
        characterReferenceValue: onexitcharacterreferencevalue,
        codeFenced: closer(onexitcodefenced),
        codeFencedFence: onexitcodefencedfence,
        codeFencedFenceInfo: onexitcodefencedfenceinfo,
        codeFencedFenceMeta: onexitcodefencedfencemeta,
        codeFlowValue: onexitdata,
        codeIndented: closer(onexitcodeindented),
        codeText: closer(onexitcodetext),
        codeTextData: onexitdata,
        data: onexitdata,
        definition: closer(),
        definitionDestinationString: onexitdefinitiondestinationstring,
        definitionLabelString: onexitdefinitionlabelstring,
        definitionTitleString: onexitdefinitiontitlestring,
        emphasis: closer(),
        hardBreakEscape: closer(onexithardbreak),
        hardBreakTrailing: closer(onexithardbreak),
        htmlFlow: closer(onexithtmlflow),
        htmlFlowData: onexitdata,
        htmlText: closer(onexithtmltext),
        htmlTextData: onexitdata,
        image: closer(onexitimage),
        label: onexitlabel,
        labelText: onexitlabeltext,
        lineEnding: onexitlineending,
        link: closer(onexitlink),
        listItem: closer(),
        listOrdered: closer(),
        listUnordered: closer(),
        paragraph: closer(),
        referenceString: onexitreferencestring,
        resourceDestinationString: onexitresourcedestinationstring,
        resourceTitleString: onexitresourcetitlestring,
        resource: onexitresource,
        setextHeading: closer(onexitsetextheading),
        setextHeadingLineSequence: onexitsetextheadinglinesequence,
        setextHeadingText: onexitsetextheadingtext,
        strong: closer(),
        thematicBreak: closer()
      }
    },
    options.mdastExtensions || []
  )

  const data = {}
  return compile

  function compile(events) {

    // Khởi tạo object tree với node đầu tiên là root có thuộc tính children rỗng
    let tree = {
      type: 'root',
      children: []
    }

    // Stack đại diện cho cây của chúng ta
    const stack = [tree]

    // Stack Token để làm việc với Token
    const tokenStack = []

    // Stack List để làm việc với phần tử thuộc một List
    const listStack = []

    // Biến chứa toàn bộ cấu hình của toàn bộ hàm compile
    const context = {
      stack,
      tokenStack,
      config,
      enter,
      exit,
      buffer,
      resume,
      setData,
      getData
    }

    // Chạy hết toàn bộ Input[] đầu vào
    let index = -1

    // Xử lý trường hợp cho phần tử đầu vào là listOrdered hoặc listUnordered
    while (++index < events.length) {
      if (
        events[index][1].type === 'listOrdered' ||
        events[index][1].type === 'listUnordered'
      ) {
        if (events[index][0] === 'enter') {
          listStack.push(index)
        } else {
          const tail = listStack.pop()
          index = prepareList(events, tail, index)
        }
      }
    }

    // Xử lý cho các trường hợp còn lại
    index = -1

    while (++index < events.length) {
      const handler = config[events[index][0]]

      if (own.call(handler, events[index][1].type)) {
        handler[events[index][1].type].call(
          Object.assign(
            {
              sliceSerialize: events[index][2].sliceSerialize
            },
            context
          ),
          events[index][1]
        )
      }
    }

    // Nếu sau khi xử lý mà vẫn còn Token trong Stack Token thì thực hiện xử lý exit
    if (tokenStack.length > 0) {
      const tail = tokenStack[tokenStack.length - 1]
      const handler = tail[1] || defaultOnError
      handler.call(context, undefined, tail[0])
    }

    // Gán thêm thuộc tính vị trí cho object tree cho phù hợp với tiêu chuẩn
    tree.position = {
      start: point(
        events.length > 0
          ? events[0][1].start
          : {
              line: 1,
              column: 1,
              offset: 0
            }
      ),
      end: point(
        events.length > 0
          ? events[events.length - 2][1].end
          : {
              line: 1,
              column: 1,
              offset: 0
            }
      )
    }

    // Nếu chúng ta có sử dụng thêm plugs in nào thì chúng ta sẽ áp dụng cái đó lên object tree
    index = -1

    while (++index < config.transforms.length) {
      tree = config.transforms[index](tree) || tree
    }

    // Trả về object tree
    return tree
  }`}
      </SyntaxHighlighter>
      <br />
      <p>
        Bây giờ chúng ta hãy thử với paragraph. Code ở trên ghi rằng{" "}
        <b> paragraph: opener(paragraph) </b>. Theo như code ở trên thì với phần
        tử paragraph thì ta sẽ gọi đến địa chỉ hàm <b>opener(paragraph)</b>. Chỗ
        này các bạn phải chú ý rằng paragraph ở bên trái là tên của một thuộc
        tính trỏ tới bất cứ thứ gì trả về ở bên phải. Còn paragraph bên phải là
        một biến đã được định nghĩa ở đâu đó trong code rồi.
      </p>
      <br />
      <h3 id="opener">Hàm Opener</h3>
      <SyntaxHighlighter
        language="javascript"
        style={a11yDark}
      >{`      // Hàm nhận 2 tham số. 
      // create là con trỏ đến một hàm chuyển từ Token thành Node
      // and là một tham số trỏ tới một hàm. Tham số này không bắt buộc phải truyền vào
      function opener(create, and) {
    return open
   
    // Hàm open nhận vào Token
    function open(token) {
      // gọi đến hàm enter với 2 tham số truyền vào là create(token) và token
      enter.call(this, create(token), token)
      // nếu như có truyền vào tham số and. thì gọi luôn hàm and
      if (and) and.call(this, token)
    }
  }`}</SyntaxHighlighter>
      <p>
        Như vậy với hàm <b>opener(paragraph)</b> thì <b>paragraph</b> chính là
        tham số <i>create</i> của hàm <b>opener</b>. Và quả thật{" "}
        <b>paragraph</b> bên vế phải chính là con trỏ tới một hàm chuyển từ
        Token thành Node.
      </p>
      <br />
      <h3 id="paragraph">Hàm paragraph</h3>
      <SyntaxHighlighter language="javascript" style={a11yDark}>
        {`function paragraph() {
    return {
      type: 'paragraph',
      children: []
    }
  }`}
      </SyntaxHighlighter>
      <br />
      <p>
        Cuối cùng thì hàm open sẽ gọi đến hàm enter. Mình nói cho các bạn luôn
        là hàm enter có chức năng là push node vào stack tree của chúng ta.
      </p>
      <br />
      <h3 id="enter">Hàm enter</h3>
      <SyntaxHighlighter language="javascript" style={a11yDark}>
        {`function enter(node, token, errorHandler) {
    const parent = this.stack[this.stack.length - 1]
    parent.children.push(node)
    this.stack.push(node)
    this.tokenStack.push([token, errorHandler]) 
        node.position = {
      start: point(token.start)
    }
    return node
  }`}
      </SyntaxHighlighter>
      <br />
      <p>
        Cuối cùng thì với object tree của chúng ta thì các bạn có thể dễ dàng
        chuyển từ một JSON Like sang ngôn ngữ đích của các bạn. Ví dụ như với
        các phần tử nào có <b>type</b> là <i>Heading</i> thì các bạn sẽ thêm vào
        chuỗi HTML {'"<h"'}. Sau đó với <b>depth = 1</b> thì các bạn thêm vào{" "}
        {'"1>"'}
      </p>
    </div>
  );
};

export default CodeExplain;
