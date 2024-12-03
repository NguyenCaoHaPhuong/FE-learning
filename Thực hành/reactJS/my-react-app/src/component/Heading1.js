import React from "react";
import images from '../images/images.png';
import search from '../images/search.png';
import people from '../images/people.png';
import bell from '../images/bell.png';
import home from '../images/home.png';

function Heading1() {
    return (
        <div className="heading1">

        <div className="heading-left">
          <img src="https://s1.vnecdn.net/vnexpress/restruct/i/v9519/v2_2019/pc/graphics/logo.svg" alt="Logo"/>
          <hr style={{ margin: '0px 12px' }} />
          <span className="date">Thứ sáu, 8/11/2024</span>
          <hr style={{ margin: '0px 12px' }} />
          <div className="date">Hà Nội</div>
        </div>

        <div className="heading-right">
          <div className="lately">Mới nhất</div>
          <hr style={{ margin: '0px 12px' }} />
          <div className="area-news">Tin theo khu vực</div>
          <hr style={{ margin: '0px 12px' }} />

          <div className="logo-inter">
            <img src={images} alt="Logo" width="18px" height="20px" />
            <hr style={{ margin: '-1px 5px 0px 0px' }} />
            International
          </div>

          <hr style={{ margin: '0px 12px' }} />

          <div className="login">
            <img src={search} alt="search" width="15" height="15" />
            <hr style={{ margin: '0px 8px' }} />
            <img src={people} alt="people" width="15" height="15" />
            <hr style={{ margin: '-1px 5px 0px 0px' }} />
            Đăng nhập
            <hr style={{ margin: '0px 8px' }} />
            <img src={bell} alt="bell" width="15" height="15" />
          </div>

        </div>

      </div>
    )

}


export default Heading1;