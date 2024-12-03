import React from "react";

function Email(){
    return(
        <div className="send-email">
        <div className="E-left">
            <div className="VN-newsletter">
                <img src="/image/mail.png" width="20" height="20" style={{ margin: "5px", color: "#bdbdbd" }} alt="Mail Icon"/>
                <p>VnExpress Newsletters</p>
            </div>
            <h3>Đừng bỏ lỡ tin tức quan trọng!</h3>
            <p>Nhận tóm tắt tin tức nổi bật, hấp dẫn nhất 24 giờ qua trên VnExpress.</p>
        </div>
        
        <div className="E-right">
            <div className="email">
            <input type="email" placeholder="Địa chỉ email" style={{ margin: "10px", width: "300px", height: "30px" }}/>
            <button style={{ backgroundColor: "#851d40", color: "#ffffff", width: "80px", height: "30px", alignSelf: "center", }}>
                Đăng ký
            </button>
            </div>

            <p style={{ margin: "10px", fontSize: "14px", color: "#6b6b6b" }}>
            -------------------------------------Hoặc-------------------------------------
            </p>

            <div className="chosen-b">
                <button>Google</button>
                <button>Facebook</button>
            </div>

            <p style={{ fontSize: "12px", color: "#bdbdbd" }}>
                *Khi đăng ký, bạn đồng ý với{" "} <a href="https://vnexpress.net/dieu-khoan-su-dung" style={{ color: "#39aaff" }}>điều khoản </a>{" "} của VnExpress
            </p>

            
        </div>
    </div>
    
    )
}

export default Email;