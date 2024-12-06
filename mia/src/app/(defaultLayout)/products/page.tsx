"use client";
import Link from "next/link";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import "@/app/css/product.css";
import * as productService from "@/app/service/product.service";
import Product from "@/app/component/product";
export default function Products() {
  const query = useSearchParams();
  const [products, setProducts] = useState<any>([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const router = useRouter();
  useEffect(() => {
    if (!query.get("sort")) {
      const searchParams = new URLSearchParams(query.toString());
      searchParams.set("sort", "1");
      router.push(`/products?${searchParams.toString()}`);
    }

    productService.getQuery(query.toString()).then((res) => setProducts(res));
  }, [query]);
  
  function handleSort(sort: string) {
    const searchParams = new URLSearchParams(query.toString());
    searchParams.set("sort", sort);
    router.push(`/products?${searchParams.toString()}`);
  }
  function handleClick() {
    const searchParams = new URLSearchParams(query.toString());
    searchParams.set("price", `${minPrice}-${maxPrice}`);
    router.push(`/products?${searchParams.toString()}`);
  }

  return (
    <div id="container">
      <div className="grid wide">
        <div className="product_title">
          <a className="product_title-text">Trang chủ</a>
          <span className="product_title-text">/ Balo</span>
        </div>
        <div className="product_filter">
          <div onClick={handleClick} className="filter_box">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
              width="24"
              height="24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
              />
            </svg>
            <span className="filter_box-text">Lọc</span>
          </div>
          <div className="filter_box-choose">
            <select
              onChange={(e) => handleSort(e.target.value)}
              className="filter_box-choose-text"
            >
              <option className="filter_box-choose-text" value="1">
                Giá Tăng
              </option>
              <option className="filter_box-choose-text" value="-1">
                Giá Giảm
              </option>
            </select>
          </div>
        </div>
        <div className="product_filter_styles">
          <div className="product_filter_styles-text">Lọc Theo Giá</div>
          <input
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="product_filter_styles-text"
            type="text"
            placeholder="Giá Thấp"
          />
          <input
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="product_filter_styles-text"
            type="text"
            placeholder="Giá Cao"
          />
        </div>
        <div className="product_title-name">
          <p className="product_title-name-text">Balo nam nữ chính hãng</p>
        </div>
        <div className="product_list">
          <div className="row">
            {products.map((pro: IProduct) => (
              <Fragment key={pro.id}>
                <Product data={pro} />
              </Fragment>
            ))}
          </div>
        </div>
        <div className="product_list_more">
          <a className="product_list_more-btn">Xem thêm 70 sản phẩm</a>
        </div>
      </div>
    </div>
  );
}
