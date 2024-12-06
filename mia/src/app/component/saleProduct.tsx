import Link from "next/link";

export default function ProductSale(props: { data: IProduct[]}) {
  return (
    <div className="row">
      {props.data.map((pro, index) => (
        <div key={index} className="col col-5">
          <Link className="product_hot_box" href={`detail/${pro.id}`}>
            <div className="product_hot">
              <img
                className="product_hot-img"
                src={pro.images[0]}
                alt={pro.images[0]}
              />
              <div className="product_hot-colors">
                <div className="color-1"></div>
                <div className="color-2"></div>
                <div className="color-3"></div>
                <div className="color-4"></div>
              </div>
              <p className="product_hot-name">{pro.name}</p>
              <div className="product_hot-price">
                <span className="product_hot-price-sale">{pro.price_sale.toLocaleString('vi-VN')} ₫</span>
                <span className="product_hot-price-origin">{pro.price_origin.toLocaleString('vi-VN')}₫</span>
                <span className="product_hot-price-percent">-45%</span>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
