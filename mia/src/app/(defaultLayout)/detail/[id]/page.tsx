"use client";
import "@/app/css/product_detail.css";
import { useParams } from "next/navigation";
import * as productServices from "@/app/service/product.service";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/slices/cartslice";

export default function Detail() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart.items);
  console.log(cart);
  const params = useParams();
  const product: IProduct = productServices.getProductOne(
    params.id!.toString()
  );

  return (
    <div id="container">
      {!!product && (
        <div className="grid wide">
          <div className="product_detail_title">
            <a className="product_detail_title-text" href="">
              Trang chủ
            </a>
            <p className="product_detail_title-text">/</p>
            <a className="product_detail_title-text" href="">
              Vali
            </a>
          </div>
          <div className="product_detail_box">
            <div className="row">
              <div className="col col-2">
                <Swiper
                  className="product_detail_box-img"
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[Thumbs]}
                >
                  {product.images.map((image: string, index: number) => (
                    <SwiperSlide key={index}>
                      <img
                        className="product_detail_box-img-primary"
                        src={image}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[Thumbs]}
                >
                  {product.images.map((image: string, index: number) => (
                    <SwiperSlide
                      className="product_detail_box-styles"
                      key={index}
                    >
                      <img
                        className="product_detail_box-styles-img"
                        src={image}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="col col-2">
                <div className="product_detail_box_info">
                  <div className="product_detail_box_info-name">
                    <a href="" className="product_detail_box_info-name-origin">
                      Thương hiệu:
                      <span className="product_detail_box_info-name-origin-color">
                        Pisani
                      </span>
                    </a>
                    <div className="product_detail_box_info-name-text">
                      <p className="product_detail-name">{product.name}</p>
                      <p className="product_detail-star">
                        5*
                        <span className="product_detail-star-quantity">
                          (100)
                        </span>
                      </p>
                    </div>
                    <div className="product_detail_box_info-price">
                      <div className="product_detail_box_info-price-box">
                        <span className="product_detail_box_info-price-sale">
                          {product.price_sale.toLocaleString("vi-VN")}₫
                        </span>
                        <span className="product_detail_box_info-price-origin">
                          {product.price_origin.toLocaleString("vi-VN")}₫
                        </span>
                        <span className="product_detail_box_info-price-percent">
                          -36%
                        </span>
                      </div>
                      <div className="product_detail_box_info-price-ship">
                        <p className="product_detail_box_info-price-ship-text">
                          Giao hoả tốc 2h
                        </p>
                      </div>
                    </div>
                    <div className="product_detail_box_info-price-more">
                      <p className="product_detail_box_info-price-more-sale">
                        hoặc trả trước
                        <span className="product_detail_box_info-price-more-sale-special">
                          499.667₫
                        </span>{" "}
                        x 3 kỳ với Kredivo
                        <a
                          className="product_detail_box_info-price-more-sale-detail"
                          href=""
                        >
                          Xem hướng dẫn
                        </a>
                      </p>
                    </div>
                    <div className="product_detail_box_info-color">
                      <p className="product_detail_box_info-color-title">
                        Màu sắc:
                      </p>
                      {product.images.map((color: string, index: number) => (
                        <div
                          key={index}
                          className="product_detail_box_info-color-box-img"
                        >
                          <img
                            className="product_detail_box_info-color-img"
                            src={color}
                            alt="Màu"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="product_detail_box_info-size">
                      <div className="product_detail_box_info-size-title">
                        <p className="product_detail_box_info-size-title-text">
                          Kích thước:
                        </p>
                        <a
                          className="product_detail_box_info-size-title-toturial"
                          href=""
                        >
                          Hướng dẫn chọn size
                        </a>
                      </div>
                      <div className="product_detail_box_info-size-content">
                        <div className="product_detail_box_info-size-content-select">
                          <p className="product_detail_box_info-size-content-select-text">
                            S - 20 inch
                          </p>
                        </div>
                        <div className="product_detail_box_info-size-content-select">
                          <p className="product_detail_box_info-size-content-select-text">
                            M - 24 inch
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="product_detail_box_info-promotion">
                      <ul>
                        <li className="product_detail_box_info-promotion-text">
                          TẶNG túi đựng giày Mia Sport trị giá 189K cho đơn hàng
                          chứa vali từ 1Tr
                        </li>
                        <li className="product_detail_box_info-promotion-text">
                          Miễn phí vận chuyển toàn quốc
                        </li>
                        <li className="product_detail_box_info-promotion-text">
                          Ưu đãi áp dụng từ 01.07 - 03.07
                        </li>
                      </ul>
                      <span className="product_detail_box_info-promotion-label">
                        Khuyến mãi
                      </span>
                    </div>
                    <div className="product_detail_box_info_btn-box">
                      <button className="product_detail_box_info_btn-box-more">
                        Xem các siêu thị còn hàng
                      </button>
                      <button
                        onClick={() =>
                          dispatch(
                            addToCart({item:product, quantity_cart: 1 })
                          )
                        }
                        className="product_detail_box_info_btn-box-cart"
                      >
                        Thêm vào giỏ hàng
                      </button>
                    </div>
                    <div className="product_detail_box_info_guarantee row">
                      <div className="product_detail_box_info_guarantee-item col col-3">
                        <img
                          className="product_detail_box_info_guarantee-img"
                          src="https://mia.vn/images/commit-02.svg"
                          alt=""
                        />
                        <p className="product_detail_box_info_guarantee-text">
                          Bảo hành trọn đời <br /> trên toàn hệ thống
                        </p>
                      </div>
                      <div className="product_detail_box_info_guarantee-item col col-3">
                        <img
                          className="product_detail_box_info_guarantee-img"
                          src="https://mia.vn/images/commit-03.svg"
                          alt=""
                        />
                        <p className="product_detail_box_info_guarantee-text">
                          Đổi trả trong 365 ngày <br />
                          nếu không hài lòng
                        </p>
                      </div>
                      <div className="product_detail_box_info_guarantee-item col col-3">
                        <img
                          className="product_detail_box_info_guarantee-img"
                          src="https://mia.vn/images/commit-04.svg"
                          alt=""
                        />
                        <p className="product_detail_box_info_guarantee-text">
                          Hoàn tiền 100% <br /> nếu sản phẩm gặp lỗi
                        </p>
                      </div>
                      <div className="product_detail_box_info_guarantee-item col col-3">
                        <img
                          className="product_detail_box_info_guarantee-img"
                          src="https://mia.vn/images/commit-01.svg"
                          alt=""
                        />
                        <p className="product_detail_box_info_guarantee-text">
                          Cam kết chính hãng 100%
                        </p>
                      </div>
                      <div className="product_detail_box_info_guarantee-item col col-3">
                        <img
                          className="product_detail_box_info_guarantee-img"
                          src="https://mia.vn/images/commit-05.svg"
                          alt=""
                        />
                        <p className="product_detail_box_info_guarantee-text">
                          Độc quyền phân phối <br /> tại MIA.vn
                        </p>
                      </div>
                      <div className="product_detail_box_info_guarantee-item col col-3">
                        <img
                          className="product_detail_box_info_guarantee-img"
                          src="https://mia.vn/images/commit-06.svg"
                          alt=""
                        />
                        <p className="product_detail_box_info_guarantee-text">
                          Thanh toán khi <br /> nhận hàng (COD)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product_detail_content">
            <img src="https://mia.vn/images/why-choose-mia-pc.jpg" alt="" />
          </div>
          <div className="product_detail_reviews-box">
            <div className="product_detail_reviews-box-item">
              <p className="product_detail_reviews-quantity">100 đánh giá</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
                width="50"
                height="50"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>

              <div className="product_detail_reviews-user">
                <div className="product_detail_reviews-user-star">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                    width="16"
                    height="16"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                    width="16"
                    height="16"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                    width="16"
                    height="16"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                    width="16"
                    height="16"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                    width="16"
                    height="16"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                    width="16"
                    height="16"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                </div>
                <div className="product_detail_reviews-user-comment-box">
                  <div className="product_detail_reviews-user-comment-box-name">
                    <p className="reviews_name">
                      huynhhonghuong{" "}
                      <i className="reviews_buy_from">mua từ Shopee</i>
                    </p>
                    <p className="reviews_date">03/07/2024</p>
                  </div>
                  <div className="reviews_user-comment">
                    <p className="user_comment">
                      Thấy quảng cáo đẹp lắm mua sài thử, thấy bảo hành trọn đời
                      lận.
                    </p>
                  </div>
                </div>
                <div className="product_detail_reviews-user-comment-box">
                  <div className="product_detail_reviews-user-comment-box-name">
                    <p className="reviews_name">
                      huynhhonghuong{" "}
                      <i className="reviews_buy_from">mua từ Shopee</i>
                    </p>
                    <p className="reviews_date">03/07/2024</p>
                  </div>
                  <div className="reviews_user-comment">
                    <p className="user_comment">
                      Thấy quảng cáo đẹp lắm mua sài thử, thấy bảo hành trọn đời
                      lận.
                    </p>
                  </div>
                </div>
                <div className="product_detail_reviews-user-comment-box">
                  <div className="product_detail_reviews-user-comment-box-name">
                    <p className="reviews_name">
                      huynhhonghuong{" "}
                      <i className="reviews_buy_from">mua từ Shopee</i>
                    </p>
                    <p className="reviews_date">03/07/2024</p>
                  </div>
                  <div className="reviews_user-comment">
                    <p className="user_comment">
                      Thấy quảng cáo đẹp lắm mua sài thử, thấy bảo hành trọn đời
                      lận.
                    </p>
                  </div>
                </div>
                <div className="product_detail_reviews-user-comment-box">
                  <div className="product_detail_reviews-user-comment-box-name">
                    <p className="reviews_name">
                      huynhhonghuong{" "}
                      <i className="reviews_buy_from">mua từ Shopee</i>
                    </p>
                    <p className="reviews_date">03/07/2024</p>
                  </div>
                  <div className="reviews_user-comment">
                    <p className="user_comment">
                      Thấy quảng cáo đẹp lắm mua sài thử, thấy bảo hành trọn đời
                      lận.
                    </p>
                  </div>
                </div>
                <div className="product_detail_reviews-user-comment-box">
                  <div className="product_detail_reviews-user-comment-box-name">
                    <p className="reviews_name">
                      huynhhonghuong{" "}
                      <i className="reviews_buy_from">mua từ Shopee</i>
                    </p>
                    <p className="reviews_date">03/07/2024</p>
                  </div>
                  <div className="reviews_user-comment">
                    <p className="user_comment">
                      Thấy quảng cáo đẹp lắm mua sài thử, thấy bảo hành trọn đời
                      lận.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product_detail_introduce">
            <div className="product_detail_introduce-title">
              <p className="product_detail_introduce-title-text">
                Sản phẩm tương tự
              </p>
            </div>
            <div className="row">
              <div className="col col-5">
                <div className="product">
                  <div className="product_img-background">
                    <a href="">
                      <img
                        className="product_img"
                        src="../images/balo/Balo_Herschel_Classic/Balo_Herschel_Classic_black.jpg"
                        alt=""
                      />
                    </a>
                    <div className="ship-tittle">Giao hỏa tốc 2h</div>
                    <div className="producer">
                      <img
                        src="https://mia.vn/images/flags/canada.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="product_colors">
                    <div className="color-1"></div>
                    <div className="color-2"></div>
                    <div className="color-3"></div>
                    <div className="color-4"></div>
                  </div>
                  <a href="">
                    <p className="product_name">Larita Asti ID2047</p>
                    <div className="product_price">
                      <span className="product_price-sale">999.000₫</span>
                      <span className="product_price-origin">1.815.000₫</span>
                      <span className="product_price-percent">-45%</span>
                    </div>
                    <div className="product_star">
                      <span className="product_star-numbers">5</span>
                      <span className="product_star-icon">*</span>
                      <span className="product_star-quantity">(100)</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col col-5">
                <div className="product">
                  <div className="product_img-background">
                    <a href="">
                      <img
                        className="product_img"
                        src="../images/balo/Balo_Herschel_Classic/Balo_Herschel_Classic_black.jpg"
                        alt=""
                      />
                    </a>
                    <div className="ship-tittle">Giao hỏa tốc 2h</div>
                    <div className="producer">
                      <img
                        src="https://mia.vn/images/flags/canada.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="product_colors">
                    <div className="color-1"></div>
                    <div className="color-2"></div>
                    <div className="color-3"></div>
                    <div className="color-4"></div>
                  </div>
                  <a href="">
                    <p className="product_name">Larita Asti ID2047</p>
                    <div className="product_price">
                      <span className="product_price-sale">999.000₫</span>
                      <span className="product_price-origin">1.815.000₫</span>
                      <span className="product_price-percent">-45%</span>
                    </div>
                    <div className="product_star">
                      <span className="product_star-numbers">5</span>
                      <span className="product_star-icon">*</span>
                      <span className="product_star-quantity">(100)</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col col-5">
                <div className="product">
                  <div className="product_img-background">
                    <a href="">
                      <img
                        className="product_img"
                        src="../images/balo/Balo_Herschel_Classic/Balo_Herschel_Classic_black.jpg"
                        alt=""
                      />
                    </a>
                    <div className="ship-tittle">Giao hỏa tốc 2h</div>
                    <div className="producer">
                      <img
                        src="https://mia.vn/images/flags/canada.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="product_colors">
                    <div className="color-1"></div>
                    <div className="color-2"></div>
                    <div className="color-3"></div>
                    <div className="color-4"></div>
                  </div>
                  <a href="">
                    <p className="product_name">Larita Asti ID2047</p>
                    <div className="product_price">
                      <span className="product_price-sale">999.000₫</span>
                      <span className="product_price-origin">1.815.000₫</span>
                      <span className="product_price-percent">-45%</span>
                    </div>
                    <div className="product_star">
                      <span className="product_star-numbers">5</span>
                      <span className="product_star-icon">*</span>
                      <span className="product_star-quantity">(100)</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col col-5">
                <div className="product">
                  <div className="product_img-background">
                    <a href="">
                      <img
                        className="product_img"
                        src="../images/balo/Balo_Herschel_Classic/Balo_Herschel_Classic_black.jpg"
                        alt=""
                      />
                    </a>
                    <div className="ship-tittle">Giao hỏa tốc 2h</div>
                    <div className="producer">
                      <img
                        src="https://mia.vn/images/flags/canada.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="product_colors">
                    <div className="color-1"></div>
                    <div className="color-2"></div>
                    <div className="color-3"></div>
                    <div className="color-4"></div>
                  </div>
                  <a href="">
                    <p className="product_name">Larita Asti ID2047</p>
                    <div className="product_price">
                      <span className="product_price-sale">999.000₫</span>
                      <span className="product_price-origin">1.815.000₫</span>
                      <span className="product_price-percent">-45%</span>
                    </div>
                    <div className="product_star">
                      <span className="product_star-numbers">5</span>
                      <span className="product_star-icon">*</span>
                      <span className="product_star-quantity">(100)</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col col-5">
                <div className="product">
                  <div className="product_img-background">
                    <a href="">
                      <img
                        className="product_img"
                        src="../images/balo/Balo_Herschel_Classic/Balo_Herschel_Classic_black.jpg"
                        alt=""
                      />
                    </a>
                    <div className="ship-tittle">Giao hỏa tốc 2h</div>
                    <div className="producer">
                      <img
                        src="https://mia.vn/images/flags/canada.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="product_colors">
                    <div className="color-1"></div>
                    <div className="color-2"></div>
                    <div className="color-3"></div>
                    <div className="color-4"></div>
                  </div>
                  <a href="">
                    <p className="product_name">Larita Asti ID2047</p>
                    <div className="product_price">
                      <span className="product_price-sale">999.000₫</span>
                      <span className="product_price-origin">1.815.000₫</span>
                      <span className="product_price-percent">-45%</span>
                    </div>
                    <div className="product_star">
                      <span className="product_star-numbers">5</span>
                      <span className="product_star-icon">*</span>
                      <span className="product_star-quantity">(100)</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
