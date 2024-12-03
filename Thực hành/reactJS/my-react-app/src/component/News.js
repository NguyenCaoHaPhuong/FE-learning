import React from "react";
import baotang21 from "../images/cauthehuc-1652240529-1630-1652253987.jpg";
import baotang22 from "../images/langlua-1727239565-1727250252.jpg";
import baotang23 from "../images/dsc1923-1728110886-1728123133.jpg";
// import baotang24 from "../images/chenong-1730092308-173010204.jpg";

function News(){
    return(
        <div class="extra-news">
                <article class="item-news">
                    <img src={baotang21} alt="Bảo tàng ảnh 21" style={{ width: '25%', maxWidth: '300px', margin: '10px 10px 10px 0' }} /> 
                    <div className="content-news">
                        <h4>Cẩm nang du lịch Hà Nội</h4>
                        <p>Đến Hà Nội, du khách có thể dành thời gian dạo quanh phố cổ, hồ Hoàn Kiếm, thăm lăng Chủ tịch Hồ Chí Minh, Văn Miếu - Quốc Tử Giám... </p>
                    </div>
                </article>

                <article class="item-news">
                    <img src={baotang22} alt="Bảo tàng ảnh 22" style={{ width: '25%', maxWidth: '300px', margin: '10px 10px 10px 0' }} /> 
                    <div className="content-news">
                        <h4>7 tour trải nghiệm mùa thu Hà Nội</h4>
                        <p>"Thưởng thức" Hà Nội qua 5 giác quan, ghé các làng nghề truyền thống, làng cổ Đường Lâm là những trải nghiệm cho du khách đến thủ đô mùa thu.  </p>
                    </div>
                </article>

                <article class="item-news">
                    <img src={baotang23} alt="Bảo tàng ảnh 23" style={{ width: '25%', maxWidth: '300px', margin: '10px 10px 10px 0' }} /> 
                    <div className="content-news">
                        <h4>1.000 người đồng diễn Carnaval Áo dài Hà Nội</h4>
                        <p>Hơn 1.000 người dân Hà Nội sáng nay diện áo dài truyền thống diễu hành qua nhiều tuyến phố trong tiết thu nhằm chào mừng 70 năm giải phóng Thủ đô.</p>
                    </div>
                </article>

                <article class="item-news">
                    <img src={baotang23} alt="Bảo tàng ảnh 23" style={{ width: '25%', maxWidth: '300px', margin: '10px 10px 10px 0' }} /> 
                    <div className="content-news">
                        <h4>Những món hút khách khi Hà Nội se lạnh</h4>
                        <p>Chè sắn, bánh đúc nóng hay lẩu là những món ăn đắt hàng khi thời tiết Hà Nội chuyển lạnh. </p>
                    </div>
                </article>

            </div>
    )
}

export default News;