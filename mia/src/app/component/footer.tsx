
export default function Footer(){
    return(
        <div id="footer">
        <div className ="grid wide">
            <div className ="footer_search-hot">
                <div className ="footer_title-search">Tìm kiếm nhiều</div>
                <a href="" className ="footer_title-product">Vali kéo du lịch</a>
                <a href="" className ="footer_title-product">Vali khóa khung</a>
                <a href="" className ="footer_title-product">Vali kéo nhựa dẻo</a>
                <a href="" className ="footer_title-product">Balo thời trang</a>
                <a href="" className ="footer_title-product">Balo đựng laptop</a>
            </div>
            <div className ="footer__banner">
                <img src="/images/img_footer/footer_banner.jpg" alt=""/>
            </div>
            <div className ="row footer_show-proof">
                <div className ="col col-5">
                    <img className ="footer_img-proof" src="/images/img_footer/img_proof1.jpg" alt=""/>
                    <p className ="footer_img_describle">Á hậu 1 Hoàn vũ 2022 Thảo Nhi</p>
                </div>
                <div className ="col col-5">
                    <img className ="footer_img-proof" src="/images/img_footer/img_proof2.jpg" alt=""/>
                    <p className ="footer_img_describle">Á hậu 2 Hoàn vũ 2022 Thuỷ Tiên</p>
                </div>
                <div className ="col col-5">
                    <img className ="footer_img-proof" src="/images/img_footer/img_proof3.jpg" alt=""/>
                    <p className ="footer_img_describle">HHHV Việt Nam 2017 - H'Hen Niê</p>
                </div>
                <div className ="col col-5">
                    <img className ="footer_img-proof" src="/images/img_footer/img_proof4.jpg" alt=""/>
                    <p className ="footer_img_describle">Cầu thủ Nguyễn Quang Hải</p>
                </div>
                <div className ="col col-5">
                    <img className ="footer_img-proof" src="/images/img_footer/img_proof5.jpg" alt=""/>
                    <p className ="footer_img_describle">Ca sĩ Thủy Tiên</p>
                </div>
            </div>
        </div>
        <div className =" footer__guarantee">
            <div className ="grid wide row">
                <div className ="guarantee_info col col-4">
                    <img src="https://mia.vn/images/policy/warranty.svg" alt=""/>
                    <div>
                        <span className ="guarantee_info-1">Bảo hành trọn đời</span>
                        <span className ="guarantee_info-2">Trên toàn hệ thống</span>
                    </div>
                </div>
                <div className ="guarantee_info col col-4">
                    <img src="https://mia.vn/images/policy/auth.svg" alt=""/>
                    <div>
                        <span className ="guarantee_info-1">Hàng chính hãng 100%</span>
                        <span className ="guarantee_info-2">Hoàn tiền nếu phát hiện hàng giả</span>
                    </div>
                </div>
                <div className ="guarantee_info col col-4">
                    <img src="https://mia.vn/images/policy/return.svg" alt=""/>
                    <div>
                        <span className ="guarantee_info-1">Đổi trả trong 365 ngày</span>
                        <span className ="guarantee_info-2">Nếu không hài lòng</span>
                    </div>
                </div>
                <div className ="guarantee_info col col-4">
                    <img src="https://mia.vn/images/policy/cashback.svg" alt=""/>
                    <div>
                        <span className ="guarantee_info-1">Hoàn tiền 100%</span>
                        <span className ="guarantee_info-2">Nếu sản phẩm gặp lỗi</span>
                    </div>
                </div>
            </div>
        </div>
        <div className ="footer__mia-info">
            <div className ="grid wide row">
                <div className ="hot_line col col-4">
                    <a href="" className ="hot_line-tittle">Hệ thống siêu thị</a>
                    <div>
                        <p className ="hot_line-text">Hotline: 8h - 22h (miễn phí)</p>
                        <a href="" className ="hot_line-phone">1800 6198</a>
                    </div>
                    <div>
                        <p className ="hot_line-B2B">B2B (Khách doanh nghiệp)</p>
                        <a href="" className ="hot_line-B2b-phone">0918.197.299</a>
                    </div>
                    <div>
                        <a href="" className ="hot_line-email">Email: b2b@mia.vn</a>
                    </div>
                </div>
                <div className ="customer_survice col col-4">
                    <div className ="customer_survice-tittle">Hỗ trợ khách hàng</div>
                    <a className ="customer_survice-info" href="">MIA Care - Sửa Vali Tận Nhà</a>
                    <a className ="customer_survice-info" href="">Hướng dẫn sử dụng khóa Vali</a>
                    <a className ="customer_survice-info" href="">Hướng dẫn sử dụng mã voucher</a>
                    <a className ="customer_survice-info" href="">Chính sách khách hàng thân thiết</a>
                    <a className ="customer_survice-info" href="">Phương thức thanh toán</a>
                    <a className ="customer_survice-info" href="">Chính sách đổi trả</a>
                    <a className ="customer_survice-info" href="">Chính sách bảo hành</a>
                    <a className ="customer_survice-info" href="">Chính sách vận chuyển</a>
                    <a className ="customer_survice-info" href="">Chính sách bảo mật</a>
                </div>
                <div className ="mia_infos col col-4">
                    <div className ="mia_infos-tittle">Về MIA.vn</div>
                    <a className ="mia_info" href="">Đặt hàng doanh nghiệp (B2B)</a>
                    <a className ="mia_info" href="">Giới thiệu MIA.vn</a>
                    <a className ="mia_info" href="">Tuyển dụng</a>
                    <a className ="mia_info" href="">Bí kíp chọn hành lý</a>
                    <a className ="mia_info" href="">MIA Go! Ăn gì ở đâu?</a>
                    <a className ="mia_info" href="">MIAGO AQUARIUS</a>
                </div>
                <div className ="socials col col-4">
                    <div className ="social-tittle">Kết nối với MIA.vn</div>
                    <div className ="social">
                        <a href="">
                            <img src="https://mia.vn/images/fb.svg" alt=""/>
                        </a>
                        <a href="">
                            <img src="https://mia.vn/images/youtube.svg" alt=""/>
                        </a>
                        <a href="">
                            <img src="https://mia.vn/images/tiktok.svg" alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}