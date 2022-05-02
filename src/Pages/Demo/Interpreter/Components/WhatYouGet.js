import React from 'react'
import "./WhatYouGet.css"

const WhatYouGet = () => {
  return (
    <div className='whatyouget-section' id="whatyouget-section">
        <h2>Những gì bạn sẽ đạt được</h2>
        <p>Sau khi đọc xong bài viết này bạn sẽ có thể:</p>
        <div className='whatyouget-list'>
            <ul>
                <li>Biết được IDP là loại thiết kế như thế nào</li>
                <li>Biết được khi nào thì sử dụng IDP</li>
                <li>Biết đến những dự án nào ngoài đó đang sử dụng IDP</li>
                <li>Cấu trúc Code của một dự án sử dụng IDP hoàn chỉnh</li>
                <li>Tự viết cho mình một ứng dụng Interpreter</li>
            </ul>
        </div>
    </div>
  )
}

export default WhatYouGet