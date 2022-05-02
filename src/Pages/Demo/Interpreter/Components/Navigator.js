import React from 'react'
import "./Navigator.css"


const Navigator = () => {
  return (
    <nav className='nav-section'>
        <ul>
            <li><a href='#whatyouget-section' className='h2-ancor'>Những gì bạn sẽ đạt được</a></li>
            <li><a href='#introduction-section' className='h2-ancor'>Giới thiệu tổng quan</a></li>
            <ul>
                <li><a href='#history'>Lịch sử</a></li>
                <li><a href='#usecase'>Công dụng</a></li>
                <ul>
                    <li><a href='#prettier'>Prettier</a></li>
                    <li><a href='#markdown'>MarkDown</a></li>
                </ul>
                <li><a href='#structure'>Cấu trúc</a></li>
                <ul>
                    <li><a href='#structure-1'>Cấu trúc không bao gồm AST</a></li>
                    <li><a href='#structure-2'>Cấu trúc bao gồm AST</a></li>
                </ul>
            </ul>
            <li><a href='#interpreter-app' className='h2-ancor'>MarkDown Language Converter</a></li>
            <li><a href='#ast' className='h2-ancor'>AST</a></li>
            <li><a href='#explain' className='h2-ancor'>Giải thích Code</a></li>
            <ul>
                <li><a href='#remark-parse'>Hàm trả về của thư viện remark-parse</a></li>
                <li><a href='#compiler'>Hàm trả compiler</a></li>
                <li><a href='#opener'>Hàm trả opener</a></li>
                <li><a href='#paragraph'>Hàm trả paragraph</a></li>
                <li><a href='#enter'>Hàm enter</a></li>
            </ul>
            <li><a href='#cited' className='h2-ancor'>Tham khảo</a></li>

        </ul>
    </nav>
  )
}

export default Navigator