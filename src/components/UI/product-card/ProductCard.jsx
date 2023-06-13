import React from "react";

import "../../../styles/product-card.css";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import Category from "../category/Category.jsx";

const ProductCard = (props) => {
  const { id, title, image01, price, category } = props.item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
      
        price,
      })
    );
  };

  return (
    <div className="product__item">
     {image01 ? (<>
      <div className="product__img">
        <img src={image01} alt="product-img" className="w-50" />
      </div>
     </>):("")}

      <div className="product__content">
        {/* <h5>
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5> */}
      <h6 className="text-uppercase text-success">  {title}</h6>
        <div className=" d-flex align-items-center justify-content-center ">
          {/* <span className="product__price ">{ category}</span> */}
          <button className="addTOCart__btn">
          {price}K
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
