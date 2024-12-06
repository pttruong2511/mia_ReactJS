"use client";
import Link from "next/link";
import * as category from "@/app/service/category.service";
import { useContext, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { SearchContext } from "@/app/component/searchContext";
import { useSelector } from "react-redux";

export default function Header() {
  const user = localStorage.getItem("user");
  const cartItems = useSelector((state: any) => state.cart.items);
  const cartCount = cartItems.reduce(
    (count: any, item: any) => count + Number(item.quantity_cart),
    0
  );
  const [dataCate, setDataCate] = useState([]);
  const query = useSearchParams();
  useEffect(() => {
    category.getAllCate().then((data) => setDataCate(data));
  }, []);
  const { keyword, setKeyword } = useContext(SearchContext);
  const router = useRouter();
  function handleClick(e: any) {
    e.preventDefault();
    const searchParams = new URLSearchParams(query.toString());
    searchParams.set("search", keyword);
    router.push(`/products?${searchParams.toString()}`);
  }

  function handleLink(category_id: string) {
    const searchParams = new URLSearchParams(query.toString());
    searchParams.set("categoryID", category_id);
    router.push(`/products?${searchParams.toString()}`);
  }

  function handleLogout() {
    localStorage.removeItem("user");
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "refreshtoken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    router.push("/");
  }
  return (
    <div id="header">
      <div className="header__navbar grid wide">
        <Link href="/" className="logo">
          <img
            className="logo-img"
            src="https://mia.vn/images/logo.svg"
            alt=""
          />
        </Link>
        <div className="header__navbar-menu">
          {dataCate.map((category: ICategory, index: number) => (
            <div
              key={index}
              className="header__navbar-menu-font menu_font"
              onClick={() => handleLink(category.id)}
            >
              {category.name}
            </div>
          ))}

          <a className="header__navbar-menu-font menu_font" href="/products">
            Mia Go!
          </a>
          <a className="header__navbar-menu-font menu_font" href="">
            Ăn gì ở đâu
          </a>
          <a className="header__navbar-menu-font menu_font" href="">
            Bí kíp chọn hành lý
          </a>
        </div>
        <form className="header__navbar-icons">
          <input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="header_input-text"
            type="text"
            placeholder=" Tìm kiếm..."
          />
          <button
            style={{ backgroundColor: "transparent", border: "none" }}
            onClick={(e) => handleClick(e)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
              width="32"
              height="32"
              color="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>

          <Link className="quantity-cart" href="/cart">
            <p className="icon-cart">{cartCount}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
              width="32"
              height="32"
              color="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </Link>
          <div className="account">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
              width="32"
              height="32"
              color="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <div className="account-user">
              {!user && (
                <>
                  <Link href={"/login"} className="account-user-btn">
                    Đăng nhập
                  </Link>
                  <div className="account-user-btn">Đăng ký</div>
                </>
              )}
              {user && (
                <div onClick={handleLogout} className="account-user-btn">
                  Đăng xuất
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
