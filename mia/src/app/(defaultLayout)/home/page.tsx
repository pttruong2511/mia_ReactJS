"use client";
import Image from "next/image";
import Link from "next/link";
import ProductSale from "@/app/component/saleProduct";
import { useState, useEffect, Fragment } from "react";
import * as productService from "@/app/service/product.service";
import * as categoryService from "@/app/service/category.service";
import Product from "@/app/component/product";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

export default function Home() {
  const [dataProductSale, setDataProductSale] = useState([]);
  const [dataProductByCate, setDataProductByCate] = useState([]);
  useEffect(() => {
    productService.getProductSale().then((data) => setDataProductSale(data));
  }, []);
  useEffect(() => {
    categoryService.getAllCate().then(async (data) => {
      const temp: any = [];
      for (const category of data) {
        await productService.getProductByCat(4, category.id).then((res) => {
          temp.push({ category: category, products: res });
        });
      }
      const result = setDataProductByCate(temp);
    });
  }, []);
  return (
    <div id="container">
      <div className="grid wide">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="banner_show"
        >
          <SwiperSlide>
            <img
              src="https://mia.vn/media/uploads/sale-giua-thang-1731374171.jpg"
              alt="1231232132131232132"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://mia.vn/media/uploads/don-kho-1729825349.jpg"
              alt="1231232132131232132"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://mia.vn/media/uploads/mia-care-1722912419.png"
              alt="1231232132131232132"
            />
          </SwiperSlide>
        </Swiper>

        <div className="banner_service row">
          <div className="col col-3">
            <img
              className="banner_service-img"
              src="/images/banner_service/banner_service_1.png"
              alt=""
            />
          </div>
          <div className="col col-3">
            <img
              className="banner_service-img"
              src="/images/banner_service/banner_service_2.png"
              alt=""
            />
          </div>
          <div className="col col-3">
            <img
              className="banner_service-img"
              src="/images/banner_service/banner_service_3.png"
              alt=""
            />
          </div>
        </div>
        <div className="product_hot-tittle">
          <div className="time_clock">
            <div className="time_clock-tittle">HOT SALE HÔM NAY</div>
            <div className="clock_sale">
              <span className="time_hours">00</span>
              <span className="time_doc">:</span>
              <span className="time_seconds">00</span>
              <span className="time_doc">:</span>
              <span className="time_minutes">00</span>
            </div>
          </div>
          <ProductSale data={dataProductSale} />
          <div className="slide_doc row">
            <span className="slide_doc-1"></span>
            <span className="slide_doc-2"></span>
            <span className="slide_doc-3"></span>
          </div>
        </div>
        {dataProductByCate.map((e: any) => (
          <div className="product_vali" key={e.category.id}>
            <div className="product_vali-tittles row">
              <div className="product_vali-tittle">{e.category.name}</div>
              <div className="product_vali-more">Xem tất cả</div>
            </div>
            <div className="row">
              <a href="" className="product_vali_box-img col col-5">
                <img
                  className="product_vali-img"
                  src={e.category.image}
                  alt={e.category.name}
                />
              </a>
              {e.products.map((product: IProduct) => (
                <Fragment key={product.id}>
                  <Product data={product} />
                </Fragment>
              ))}
            </div>
          </div>
        ))}

        <div className="banner_aquarius-box row">
          <div className="col col-2">
            <video className="auqarius_video" controls>
              <source src="/video/video-aquarius.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="banner_aquarius-content col col-2">
            <p className="banner_aquarius-tittle-eng">MIAGO AQUARIUS</p>
            <p className="banner_aquarius-tittle-vn">
              CHUNG TAY BẢO TỒN RÙA BIỂN
            </p>
            <a className="banner_aquarius-box-btn">Xem Thêm</a>
          </div>
        </div>
        <div className="news_box">
          <div className="row">
            <div className="col col-2">
              <div className="news_box-tittle">
                <p className="news_box-tittle-content">MIA Go! Ăn gì ở đâu?</p>
                <a href="" className="news_box-tittle-more">
                  Xem thêm
                </a>
              </div>
              <div className="row">
                <div className="col col-3">
                  <img
                    className="news_box-img"
                    src="/images/news_img/news_img_1.jpg"
                    alt=""
                  />
                  <a className="news_box-content" href="">
                    Top 10 nhà hàng, quán ăn Hàn Quốc quận 7...
                  </a>
                </div>
                <div className="col col-3">
                  <img
                    className="news_box-img"
                    src="/images/news_img/news_img_2.jpg"
                    alt=""
                  />
                  <a className="news_box-content" href="">
                    Có một Thonburi yên bình nép mình bên...
                  </a>
                </div>
                <div className="col col-3">
                  <img
                    className="news_box-img"
                    src="/images/news_img/news_img_3.jpg"
                    alt=""
                  />
                  <a className="news_box-content" href="">
                    Du lịch hè Quảng Trị và tận hưởng 8...
                  </a>
                </div>
              </div>
            </div>
            <div className="col col-2">
              <div className="news_box-tittle">
                <p className="news_box-tittle-content">Bí kíp chọn hành lý</p>
                <a href="" className="news_box-tittle-more">
                  Xem thêm
                </a>
              </div>
              <div className="row">
                <div className="col col-3">
                  <img
                    className="news_box-img"
                    src="/images/news_img/news_img_4.jpg"
                    alt=""
                  />
                  <a className="news_box-content" href="">
                    MIA.vn đồng hành cùng Vietravel: Du lịch...
                  </a>
                </div>
                <div className="col col-3">
                  <img
                    className="news_box-img"
                    src="/images/news_img/news_img_5.jpg"
                    alt=""
                  />
                  <a className="news_box-content" href="">
                    Balo đeo chéo nam, sự lựa chọn hoàn...
                  </a>
                </div>
                <div className="col col-3">
                  <img
                    className="news_box-img"
                    src="/images/news_img/news_img_6.jpg"
                    alt=""
                  />
                  <a className="news_box-content" href="">
                    Các mẫu balo đi chơi cùng bạn tung tăng...
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="newspapers">
          <div className="newspapers-title">BÁO CHÍ NÓI GÌ VỀ MIA.VN?</div>
          <div className="row">
            <div className="newspaper_box col col-5">
              <div className="newspaper_img-box">
                <img
                  className="newspapers-img"
                  src="https://mia.vn/images/logo-bao-chi/Logo-01.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="newspaper_box col col-5">
              <div className="newspaper_img-box">
                <img
                  className="newspapers-img"
                  src="https://mia.vn/images/logo-bao-chi/Logo-02.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="newspaper_box col col-5">
              <div className="newspaper_img-box">
                <img
                  className="newspapers-img"
                  src="https://mia.vn/images/logo-bao-chi/kenh-14.png"
                  alt=""
                />
              </div>
            </div>
            <div className="newspaper_box col col-5">
              <div className="newspaper_img-box">
                <img
                  className="newspapers-img"
                  src="https://mia.vn/images/logo-bao-chi/Logo-04.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="newspaper_box col col-5">
              <div className="newspaper_img-box">
                <img
                  className="newspapers-img"
                  src="https://mia.vn/images/logo-bao-chi/Logo-06.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="newspaper_box col col-5">
              <div className="newspaper_img-box">
                <img
                  className="newspapers-img"
                  src="https://mia.vn/images/logo-bao-chi/Logo-07.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="newspaper_box col col-5">
              <div className="newspaper_img-box">
                <img
                  className="newspapers-img"
                  src="https://mia.vn/images/logo-bao-chi/Logo-08.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="newspaper_box col col-5">
              <div className="newspaper_img-box">
                <img
                  className="newspapers-img"
                  src="https://mia.vn/images/logo-bao-chi/tinhte.png"
                  alt=""
                />
              </div>
            </div>
            <div className="newspaper_box col col-5">
              <div className="newspaper_img-box">
                <img
                  className="newspapers-img"
                  src="https://mia.vn/images/logo-bao-chi/Logo-10.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col col-5">
              <div className="newspaper_img-box">
                <img
                  className="newspapers-img"
                  src="https://mia.vn/images/logo-bao-chi/cafebiz.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
