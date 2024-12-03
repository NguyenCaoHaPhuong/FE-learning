import React from "react";
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import youtube from '../images/youtube.png';

function Footer() {
  return (
    <div className="footer">
      <div className="footer0">
        <ul className="inner-footer">
          <b>
            <li>Trang chủ</li>
            <li>Video</li>
            <li>Podcast</li>
            <li>Ảnh</li>
            <li>Infographics</li>
            <hr />
            <li>Mới nhất</li>
            <li>Xem nhiều</li>
            <li>Tin nóng</li>
          </b>
        </ul>
        <ul className="inner-footer">
          <li>Thời sự</li>
          <li>Góc nhìn</li>
          <li>Thế giới</li>
          <li>Kinh doanh</li>
          <li>Bất động sản</li>
          <li>Giải trí</li>
        </ul>
        <ul className="inner-footer">
          <li>Thể thao</li>
          <li>Pháp luật</li>
          <li>Giáo dục</li>
          <li>Sức khỏe</li>
          <li>Đời sống</li>
          <li>Du lịch</li>
        </ul>
        <ul className="inner-footer" style={{ borderRight: "1px solid #bcbcbc" }}>
          <li>Khoa học</li>
          <li>Số hóa</li>
          <li>Xe</li>
          <li>Ý kiến</li>
          <li>Tâm sự</li>
          <li>Thư giãn</li>
        </ul>
        <ul className="inner-footer" style={{ borderRight: "1px solid #bcbcbc" }}>
          <li>Rao vặt</li>
          <li>Startup</li>
        </ul>

        <div className="contact">
          <p>Tải ứng dụng</p>
          <div className="chosen">
            <button style={{ marginRight: "10px" }}>VnExpress</button>
            <button>International</button>
          </div>
          <p>Liên hệ</p>
          <div className="contacting">
            <p style={{ marginRight: "30px" }}>Tòa soạn</p>
            <p>Quảng cáo</p>
          </div>
          <hr />
          <p>Đường dây nóng</p>
          <div className="hotline">
            <div className="h-left">
              <b>083.888.0123</b>
              <p>(Hà Nội)</p>
            </div>
            <div className="h-right" style={{ marginLeft: "20px" }}>
              <b>082.233.3555</b>
              <p>(TP. Hồ Chí Minh)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer1">
        <div className="f-left">
          <span style={{ alignContent: "center", marginRight: "4px" }}>Báo điện tử</span>
          <img src="https://s1.vnecdn.net/vnexpress/restruct/i/v9519/v2_2019/pc/graphics/logo.svg" alt="Logo" width="25%"/>
        </div>
        <ul className="f-right">
          <li>Điều khoản sử dụng</li>
          <hr style={{ margin: "0px 12px" }} />
          <li>Chính sách bảo mật</li>
          <hr style={{ margin: "0px 12px" }} />
          <li>Cookies</li>
          <hr style={{ margin: "0px 12px" }} />
          <li>RSS</li>
          <hr style={{ margin: "0px 12px" }} />
          <li>Theo dõi VnExpress trên</li>
          <hr style={{ margin: "0px 12px" }} />
          <img src={facebook} alt="Facebook" width="15" height="15" style={{ opacity: 0.5, marginRight: "5px" }}/>
          <img src={twitter} alt="Twitter" width="15" height="15" style={{ opacity: 0.5, marginRight: "5px" }}/>
          <img src={youtube} alt="YouTube" width="15" height="15" style={{ opacity: 0.5, marginRight: "5px" }}/>
        </ul>
      </div>

      <div className="footer2">
        <div className="info">
          <p>
            <b>Báo tiếng Việt nhiều người xem nhất</b>
          </p>
          <p>Thuộc Bộ Khoa học và Công nghệ</p>
          <p>Số giấy phép: 548/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 24/08/2021</p>
        </div>
        <div className="info">
          <p>Tổng biên tập: Phạm Văn Hiếu</p>
          <p>
            Địa chỉ: Tầng 10, Tòa A FPT Tower, số 10 Phạm Văn Bạch, Dịch Vọng, Cầu Giấy, Hà Nội
          </p>
          <p>Điện thoại: 024 7300 8899 - máy lẻ 4500</p>
          <p>Email: webmaster@vnexpress.net</p>
        </div>
        <div className="info">
          <p>© 1997-2024. Toàn bộ bản quyền thuộc VnExpress</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
