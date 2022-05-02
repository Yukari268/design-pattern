import React from "react";
import "./Introduction.css";
import IDPWithAST from "../../../../Ulitities/Assets/IDP_with_AST.png";
const Introduction = () => {
  return (
    <div className="introduction-section" id="introduction-section">
      <h2>Giới thiệu tổng quan</h2>
      <p>
        {" "}
        Chắc hẳn bạn đã tìm kiếm và đọc không ít tài liệu về Interpreter Design
        Pattern (IDP). Do đó tài liệu này có thể là điểm dừng chân của bạn, vì
        chúng mình sẽ cung cấp những kiến thức tổng quát nhất về IDP. Đủ để các
        bạn áp dụng IDP vào dự án của các bạn. Đó cũng chính là lí do ban đầu
        Design Pattern được sinh ra.
      </p>
      <br />
      <h3 id="history">Lịch sử</h3>
      <p>
        Vào năm 2004, một nhà lập trình viên kiêm blogger - Steve Yegge viết về
        10 quyển sách nên đọc. Anh ta có nói rằng quyển sách Design Pattern có
        tổng cộng 23 Design Pattern. Nhưng thực tế đối với anh ta thì chỉ có 22
        Design Pattern và 1 "trò đùa thực tiễn" [Gốc là "practical joke"].
      </p>
      <br />
      <p>
        Trò đùa đó chính là Interpreter. Tại sao anh ta lại nói thế? Bởi vì The
        Gang Of Four (GoF) - tác giả của quyển sách, đã đơn giản hóa Interpreter
        lại. Interpreter ban đầu cần phải tạo ra được AST (Abstract Syntax
        Tree). Nhưng GoF tách vấn đề đó ra thành một vấn đề riêng biệt độc lập
        với Interpreter. Từ đó, Interpreter chỉ còn bao gồm cách bạn sử dụng AST
        như thế nào chứ không còn đề cập đến cách để tạo ra AST. Còn về AST thì
        nó chỉ đơn giản là một cái cây trong code thể hiện lại ngôn ngữ mà bạn
        viết
      </p>
      <br />
      <p>
        Lí do mà GoF làm như vậy bởi vì thời đấy không có thuật toán phân tích
        cú pháp (Parsing Algorithm) nào mà tạo ra được AST trong khoảng thời
        gian ngắn đáng kể để có thể áp dụng thực tiễn. Cụ thể thì các bạn đọc
        phần <b>There 's a problem</b> ở đường{" "}
        <a href="http://blogs.perl.org/users/jeffrey_kegler/2013/03/the-interpreter-design-pattern.html">
          link
        </a>{" "}
        này. Hiện giờ thì phân tích cú pháp (Parse) đã đạt được tốc độ đáng kể
        để có thể áp dụng vào thực tiễn.
      </p>
      <br />
      <h3 id="usecase">Công dụng</h3>
      <p>
        Ok! Mình lang mang như vậy là đủ rồi. Chúng ta sẽ trả lời câu hỏi cho
        Interpreter này sinh ra để làm gì? Thì như cái tên của nó
        "Interpreter"("Biên dịch"), cái design pattern này được dùng để dịch từ
        một ngôn ngữ này sang một ngôn ngữ khác. Đó tất cả chỉ có vậy thôi. Bây
        giờ mình với các bạn cùng đến vài ví dụ thực tiễn nhá.
      </p>
      <br />
      <h4 id="prettier">Prettier</h4>
      <p>
        Nếu bạn nào không biết đến Prettier thì Prettier chính là một Extension
        trên VSCode giúp chúng ta làm đẹp code chúng ta viết. Thế thì cái
        Interpreter này thể hiện ở đâu? Các bạn hãy tưởng tượng code bạn viết
        chính là ngôn ngữ của bạn (bao gồm cách bạn cách lề, cách bạn xuống
        dòng) thì Prettier biên dịch ngôn ngữ của bạn thành ngôn ngữ của nó
        (Cách xuống dòng mà nó thích,...)
      </p>
      <br />
      <img
        width="100%"
        src="https://lh3.googleusercontent.com/sfHO5MKevLesNw1grlh21j0hgtH5IaMmASI5aVv_-gYyF7dvA96FlS7mdagWM6NDPxfEY2JwkArooEZZPOzXmu01-g=w640-h400-e365-rj-sc0x00ffffff"
      ></img>
      <br />
      <h4 id="markdown">Markdown</h4>
      <p>
        Markdown là ngôn ngữ dùng để viết specification. Các bạn chắc chắn đã
        gặp Markdown rồi. Đó là khi các bạn download một phần mềm nào đó luôn
        luôn có file README.md. Thì đuôi .md chính là đuôi của file Markdown.
        Công dụng của Markdown là chuyển đổi từ những cú pháp quy định sẵn thành
        những định dạng chữ cho chúng ta như là: viết nghiêng, viết đậm,...
      </p>
      <br />
      <img
        width="100%"
        src="https://res.cloudinary.com/practicaldev/image/fetch/s--CRJTTGM8--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/g595slgphyi9lkqz2u18.png"
      ></img>
      <br />
      <h3 id="structure">Cấu trúc</h3>
      <p>
        Như mình nói ở trên thì Interpreter bây giờ có tổng cộng hai cấu trúc
        chính. Cấu trúc đầu tiên là theo GoF không bao gồm AST. Và cấu trúc thứ
        hai là có bao gồm AST.
      </p>
      <br />
      <h4 id="structure-1">Cấu trúc 1: Không bao gồm AST</h4>
      <br />
      <img
        width="100%"
        src="https://circle.visual-paradigm.com/wp-content/uploads/2017/08/GoF-Design-Patterns-Behavioral-Patterns-Interpreter.png"
      ></img>
      <br />
      <p>
        Đối với cấu trúc này thì chúng ta sẽ cần có 1 class 1 interface. Class
        đầu tiên là <b>Context</b> để chứa <b>input</b> của người dùng và những
        thông số khác tùy loại ngôn ngữ. Ví dụ như tiếng Trung sẽ còn có thêm
        tiếng Trung Phồn thể hoặc tiếng Trung giản thể. Interface là{" "}
        <b>Expression </b>
        Những class tạo ra từ Interface này thường sẽ có hàm mang tên{" "}
        <b>Interpret</b>. Tham số truyền vào của hàm này sẽ là chuỗi tương ứng
        với Expression đó. Ví dụ như chuỗi "2 + 3*4" thì 3*4 sẽ được truyền vào
        Expression Nhân. Và tác dụng của những class này đó chính là biên dịch
        một phân đoạn nhỏ tương ứng với nó.
      </p>
      <br />
      <h4 id="structure-2">Cấu trúc 2: Bao gồm AST</h4>
      <br />
      <img width="100%" src={IDPWithAST}></img>
      <br />
      <p>
        Còn đối với cấu trúc này thì chúng ta chia làm 3 phần rõ rệt.
        <br /> Phần đầu tiên là <b>Parse</b>: Tại phần này chúng ta sẽ phân tích
        cú pháp của đoạn văn bản vừa nhập vào. Ví dụ đối với ngôn ngữ C# thì
        mình tách những từ nào là biến ra một cụm. Những từ nào là hằng số ra
        một cụm,... và còn nhiều cụm khác
        <br /> Phần thứ hai là <b>Convert To AST</b>: Tại phần này chúng ta sẽ
        thể hiện những cụm biến, hàm, hằng,.. ở trên thành một cái cây
        <br /> Phần cuối cùng là <b>Compile</b>: Tại phần này chúng ta sẽ dùng
        cái cây AST lấy được ở bước 2 và chuyển đổi thành ngôn ngữ đích mà chúng
        ta muốn. Ví dụ như chúng ta lấy được các cụm biến trong cây rồi chúng ta
        chuyển nó thành cú pháp biến trong java là "var + biến"
      </p>
      <br /> Bây giờ chúng ta sẽ đến với một ví dụ thực tiễn mà mình đã chuẩn bị
      cho các bạn
    </div>
  );
};

export default Introduction;
