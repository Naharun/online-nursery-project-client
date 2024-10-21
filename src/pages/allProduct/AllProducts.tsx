import React, { useState } from "react";
import { useGetPlantsQuery } from "../../redux/api/api";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Pagination } from "antd";
import "./AllProducts.css";

const AllProducts: React.FC = () => {
  const { data, error, isLoading } = useGetPlantsQuery();
  const searchTerm = useSelector((state: any) => state.search.toLowerCase());
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(8);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  const plantDataArray = data?.data || [];

  const filterProducts = (products: any[]) =>
    products.filter((product: any) =>
      product.name.toLowerCase().includes(searchTerm)
    )
    ;

  const paginateProducts = (products: any[]) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return products.slice(startIndex, endIndex);
  };

  const renderProductSection = (
    title: string,
    products: any[],
    routePrefix: string
  ) => {
    const filteredProducts = filterProducts(products);
    const paginatedProducts = paginateProducts(filteredProducts);

    return (
      <>
        <h2 className="plants">{title}</h2>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={filteredProducts.length}
          onChange={setCurrentPage}
          style={{ marginBottom: "16px" }}
        />
        <div className="gallery-grid">
          {paginatedProducts.length === 0 ? (
            <div>No data available</div>
          ) : (
            paginatedProducts.map((product: any) => (
              <Link
                key={product.name}
                to={`/${routePrefix}/${product.name}`}
                className="gallery-item"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="gallery-image"
                />
                <div className="gallery-item-title">{product.name}</div>
              </Link>
            ))
          )}
        </div>
      </>
    );
  };

  return (
    <div style={{ padding: "0 16px" }}>
      {renderProductSection(
        "Flowering Plants",
        plantDataArray.flatMap((item: any) => item.flowers || []),
        "flower"
      )}
      {renderProductSection(
        "Flowers By Season",
        plantDataArray.flatMap((item: any) => item.season || []),
        "season"
      )}
      {renderProductSection(
        "Garden Decor",
        plantDataArray.flatMap((item: any) => item.gardenDecor || []),
        "garden-decor"
      )}
      {renderProductSection(
        "Gift Plants",
        plantDataArray.flatMap((item: any) => item.gifts || []),
        "gift"
      )}
      {renderProductSection(
        "Pots & Planters",
        plantDataArray.flatMap((item: any) => item.pots || []),
        "pots-planters"
      )}
      {renderProductSection(
        "Seeds & Bulbs",
        plantDataArray.flatMap((item: any) => item.seeds || []),
        "seeds-bulbs"
      )}
    </div>
  );
};

export default AllProducts;
