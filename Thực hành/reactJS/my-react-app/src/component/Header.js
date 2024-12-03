import React from "react";

function Header(){
    return(
        <div class="container-header">
            <ul class="header-left">
                <li>
                    <a href="https://vnexpress.net/du-lich">Du lịch</a>
                </li>
                <li style={{color: "#8b8b8b"}}> > </li>
                <li>
                    <a href="https://vnexpress.net/du-lich/diem-den" style={{color:"#8b8b8b"}}>Điểm đến</a>
                </li>
            </ul>
            <span class="date-b"> Thứ sáu, 1/11/2024, 16:45 (GMT+7)</span>
        </div>
    )
}

export default Header;