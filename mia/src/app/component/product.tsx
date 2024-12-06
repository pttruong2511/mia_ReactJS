import Link from "next/link";
import { ShoppingBagIcon, ShoppingCartIcon } from "@heroicons/react/16/solid";
export default function Product(prop: { data: IProduct }) {
  return (
    <div className="col col-5">
      <div className="product">
        <div className="product_img-background">
          <Link href={`detail/${prop.data.id}`}>
            <img
              className="product_img"
              src={prop.data.images[0]}
              alt={prop.data.name}
            />
          </Link>
          <div className="ship-tittle">Giao hỏa tốc 2h</div>
          <div className="producer">
            <img src="https://mia.vn/images/flags/canada.jpg" alt="" />
          </div>
          <a className="product_btn_box" href="">
            <ShoppingCartIcon
              width={32}
              style={{ color: "#f04f24" }}
            />
          </a>
        </div>
        <div className="product_colors">
          <div className="color-1"></div>
          <div className="color-2"></div>
          <div className="color-3"></div>
          <div className="color-4"></div>
        </div>
        <a href="">
          <p className="product_name">{prop.data.name}</p>
          <div className="product_price">
            <span className="product_price-sale">
              {prop.data.price_sale.toLocaleString("vi-VN")}₫
            </span>
            <span className="product_price-origin">
              {prop.data.price_sale.toLocaleString("vi-VN")}₫
            </span>
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
  );
}
