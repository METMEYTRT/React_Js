import React, { useState, useEffect } from "react";
import iconheart1 from "../../images/icons/icon-heart-01.png";
import iconheart2 from "../../images/icons/icon-heart-02.png";
import { useCart } from "../CartContext";

const Product = () => {
  const [activeFilter, setActiveFilter] = useState("All Product");
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  const categories = [
    { name: "All Product", api: "https://fakestoreapi.com/products" },
    {
      name: "Electronics",
      api: "https://fakestoreapi.com/products/category/electronics",
    },
    {
      name: "Jewelery",
      api: "https://fakestoreapi.com/products/category/jewelery",
    },
    {
      name: "Men's clothing",
      api: "https://fakestoreapi.com/products/category/men's%20clothing",
    },
    {
      name: "Women's clothing",
      api: "https://fakestoreapi.com/products/category/women's%20clothing",
    },
  ];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const selectedCategory = categories.find(
          (cat) => cat.name === activeFilter
        );
        const response = await fetch(selectedCategory.api);
        const text = await response.text();
        const data = JSON.parse(text);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      }
    };

    fetchProducts();
  }, [activeFilter]);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div>
      <div class="bg0 m-t-23 p-b-140" style={{ marginTop: "110px" }}>
        <div class="container">
          <div class="p-b-10">
            <h3 class="ltext-103 cl5">Product Overview</h3>
          </div>
          <div class="flex-w flex-sb-m p-b-52">
            <div class="flex-w flex-l-m filter-tope-group m-tb-10">
              <ul style={{ display: "flex", gap: "20px", cursor: "pointer" }}>
                {categories.map((category) => (
                  <li
                    key={category.name}
                    onClick={() => handleFilterClick(category.name)}
                    style={{
                      padding: "10px",
                      fontSize: "16px",
                      cursor: "pointer",
                      color:
                        activeFilter === category.name ? "#007bff" : "#000",
                      fontWeight: "normal",
                      textDecoration:
                        activeFilter === category.name ? "underline" : "none",
                    }}
                  >
                    {category.name}
                  </li>
                ))}
              </ul>
            </div>

            {/* {/* Search product */}
            <div class="dis-none panel-search w-full p-t-10 p-b-15">
              <div class="bor8 dis-flex p-l-15">
                <button class="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
                  <i class="zmdi zmdi-search"></i>
                </button>

                <input
                  class="mtext-107 cl2 size-114 plh2 p-r-15"
                  type="text"
                  name="search-product"
                  placeholder="Search"
                />
              </div>
            </div>

            {/* Filter */}
            <div class="dis-none panel-filter w-full p-t-10">
              <div class="wrap-filter flex-w bg6 w-full p-lr-40 p-t-27 p-lr-15-sm">
                <div class="filter-col1 p-r-15 p-b-27">
                  <div class="mtext-102 cl2 p-b-15">Sort By</div>

                  <ul>
                    <li class="p-b-6">
                      <a href="#" class="filter-link stext-106 trans-04">
                        Default
                      </a>
                    </li>

                    <li class="p-b-6">
                      <a href="#" class="filter-link stext-106 trans-04">
                        Popularity
                      </a>
                    </li>

                    <li class="p-b-6">
                      <a href="#" class="filter-link stext-106 trans-04">
                        Average rating
                      </a>
                    </li>

                    <li class="p-b-6">
                      <a
                        href="#"
                        class="filter-link stext-106 trans-04 filter-link-active"
                      >
                        Newness
                      </a>
                    </li>

                    <li class="p-b-6">
                      <a href="#" class="filter-link stext-106 trans-04">
                        Price: Low to High
                      </a>
                    </li>

                    <li class="p-b-6">
                      <a href="#" class="filter-link stext-106 trans-04">
                        Price: High to Low
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="filter-col2 p-r-15 p-b-27">
                  <div class="mtext-102 cl2 p-b-15">Price</div>

                  <ul>
                    <li class="p-b-6">
                      <a
                        href="#"
                        class="filter-link stext-106 trans-04 filter-link-active"
                      >
                        All
                      </a>
                    </li>

                    <li class="p-b-6">
                      <a href="#" class="filter-link stext-106 trans-04">
                        $0.00 - $50.00
                      </a>
                    </li>

                    <li class="p-b-6">
                      <a href="#" class="filter-link stext-106 trans-04">
                        $50.00 - $100.00
                      </a>
                    </li>

                    <li class="p-b-6">
                      <a href="#" class="filter-link stext-106 trans-04">
                        $100.00 - $150.00
                      </a>
                    </li>

                    <li class="p-b-6">
                      <a href="#" class="filter-link stext-106 trans-04">
                        $150.00 - $200.00
                      </a>
                    </li>

                    <li class="p-b-6">
                      <a href="#" class="filter-link stext-106 trans-04">
                        $200.00+
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="filter-col3 p-r-15 p-b-27">
                  <div class="mtext-102 cl2 p-b-15">Color</div>

                  <ul>
                    <li class="p-b-6">
                      <span class="fs-15 lh-12 m-r-6" style={{ color: "#222" }}>
                        <i class="zmdi zmdi-circle"></i>
                      </span>

                      <a href="#" class="filter-link stext-106 trans-04">
                        Black
                      </a>
                    </li>

                    <li class="p-b-6">
                      <span
                        class="fs-15 lh-12 m-r-6"
                        style={{ color: "#4272d7" }}
                      >
                        <i class="zmdi zmdi-circle"></i>
                      </span>

                      <a
                        href="#"
                        class="filter-link stext-106 trans-04 filter-link-active"
                      >
                        Blue
                      </a>
                    </li>

                    <li class="p-b-6">
                      <span
                        class="fs-15 lh-12 m-r-6"
                        style={{ color: "#b3b3b3" }}
                      >
                        <i class="zmdi zmdi-circle"></i>
                      </span>

                      <a href="#" class="filter-link stext-106 trans-04">
                        Grey
                      </a>
                    </li>

                    <li class="p-b-6">
                      <span
                        class="fs-15 lh-12 m-r-6"
                        style={{ color: "#00ad5f" }}
                      >
                        <i class="zmdi zmdi-circle"></i>
                      </span>

                      <a href="#" class="filter-link stext-106 trans-04">
                        Green
                      </a>
                    </li>

                    <li class="p-b-6">
                      <span
                        class="fs-15 lh-12 m-r-6"
                        style={{ color: "#fa4251" }}
                      >
                        <i class="zmdi zmdi-circle"></i>
                      </span>

                      <a href="#" class="filter-link stext-106 trans-04">
                        Red
                      </a>
                    </li>

                    <li class="p-b-6">
                      <span class="fs-15 lh-12 m-r-6" style={{ color: "#aaa" }}>
                        <i class="zmdi zmdi-circle-o"></i>
                      </span>

                      <a href="#" class="filter-link stext-106 trans-04">
                        White
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="filter-col4 p-b-27">
                  <div class="mtext-102 cl2 p-b-15">Tags</div>

                  <div class="flex-w p-t-4 m-r--5">
                    <a
                      href="#"
                      class="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                    >
                      Fashion
                    </a>

                    <a
                      href="#"
                      class="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                    >
                      Lifestyle
                    </a>

                    <a
                      href="#"
                      class="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                    >
                      Denim
                    </a>

                    <a
                      href="#"
                      class="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                    >
                      Streetstyle
                    </a>

                    <a
                      href="#"
                      class="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                    >
                      Crafts
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="isotope-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
              gap: "20px",
            }}
          >
            {products.map((product) => (
              <div key={product.id} className="block2">
                <div className="block2-pic hov-img0">
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{
                      width: "200px",
                      height: "300px",
                      marginBottom: "10px",
                      marginLeft: "50px",
                      backgroundPosition: "center center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain",
                    }}
                  />
                  <a
                    // href="#"
                    className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to cart
                  </a>
                </div>
                <div className="block2-txt flex-w flex-t p-t-14">
                  <div className="block2-txt-child1 flex-col-l">
                    <a
                      href="#"
                      className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                    >
                      {product.title}
                    </a>
                    <span className="stext-105 cl3">${product.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
