import React from "react";
import home from '../images/home.png';
import menu from '../images/menu.png';

function Heading2(){
    return(
        <div className="heading2">
        <ul className="header">
          <img src={home} alt="home" width="15" height="15" style={{ opacity: 0.5 }}/>
          <hr style={{ margin: '0px 2px' }} />
          <li>Thời sự</li>
          <li>Góc nhìn</li>
          <li>Thế giới</li>
          <li>Video</li>
          <li>Podcasts</li>
          <li>Kinh doanh</li>
          <li>Bất động sản</li>
          <li>Khoa học</li>
          <li>Giải trí</li>
          <li>Thể thao</li>
          <li>Pháp luật</li>
          <li>Giáo dục</li>
          <li>Sức khỏe</li>
          <li>Đời sống</li>
          <li>Podcasts</li>
          <hr style={{ margin: '0px 2px' }} />
          <img
            src={menu}
            alt="menu"
            width="15"
            height="15"
            style={{ opacity: 0.5 }}
          />
        </ul>
      </div>
    )
}

export default Heading2;