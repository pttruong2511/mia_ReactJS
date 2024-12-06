"use client";
import "@/app/css/cart.css";
import { useDispatch, UseDispatch, useSelector } from "react-redux";
import { ShoppingBagIcon, XMarkIcon } from "@heroicons/react/16/solid";
import { downQuantity, removeProduct, upQuantity, removeAll } from "@/redux/slices/cartslice";
import Link from "next/link";

export default function Cart() {
  const cart = useSelector((state: any) => state.cart.items);
  console.log(cart);
  const dispatch = useDispatch();
  return (
    <>
      {cart.length && (
        <div className="container">
          <div className="container-cart">
            <div className="car_title">
              <p className="car_title-text">Giỏ hàng</p>
              <p
              onClick={() => dispatch(removeAll({}))}
               className="car_title-remove-all">Xóa tất cả</p>
            </div>
            {cart.map((item: any) => (
              <div key={item.id} className="cart_product_box">
                <div className="cart_product_box-img">
                  <img
                    className="cart_product_box-img-item"
                    src={item.images[0]}
                    alt={item.name}
                  />
                </div>
                <div className="cart_product_box-info">
                  <div className="cart_product_box-info-name">
                    <div className="product_name">
                      <p className="product_name-text">{item.name}</p>
                    </div>
                    <div
                    onClick={() => dispatch(removeProduct({id: item.id}))}
                    >
                      <XMarkIcon width={32} />
                    </div>
                  </div>
                  <div className="cart_product_box-info-price">
                    <div className="cart_btn-box">
                      <div
                        onClick={() => dispatch(downQuantity({ id: item.id }))}
                        className="cart_btn-minor"
                      >
                        -
                      </div>
                      <div className="car_btn-number">{item.quantity_cart}</div>
                      <div
                        onClick={() => dispatch(upQuantity({ id: item.id }))}
                        className="cart_btn-add"
                      >
                        +
                      </div>
                    </div>
                    <div className="product_price">
                      <p className="product_price-text">
                        {(item.price_sale * item.quantity_cart).toLocaleString(
                          "vi-VN"
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="cart_check">
              <div className="cart_total">
                <p className="cart_total-text">Tổng tiền sản phẩm:</p>
                <p className="cart_total-price"></p>
              </div>
              <div className="cart_ship">
                <p className="cart_ship-text">Phí vận chuyển:</p>
                <p className="cart_ship-label">Miễn phí</p>
              </div>
              <div className="cart_user_payment">
                <p className="cart_user_payment-text">Cần thanh toán:</p>
                <p className="cart_user_payment-price">
                  {cart
                    .reduce(
                      (sum: any, price: any) =>
                        (sum += price.price_sale * price.quantity_cart),
                      0
                    )
                    .toLocaleString("vi-VN")}
                </p>
              </div>
            </div>
            <button className="cash-btn">Thanh Toán</button>
          </div>
        </div>
      )}
      {!cart.length && (
        <div className="container-cart-empty">
          <h1 className="">Giỏ Hàng Trống</h1>
          <img
            className=""
            src="https://theme.hstatic.net/1000183719/1001043132/14/cart_banner_image.jpg?v=262"
            alt=""
          />
          <Link href={"/"} className="cash-btn">
            Quay Lại Mua Sắm
          </Link>
        </div>
      )}
    </>
  );
}
