// import React, { useState } from "react";
// import { useGetPlantsQuery } from "../../redux/api/api";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { Product } from "../../types/types";
// import { Pagination } from "antd";
// import "./AllProducts.css";

// const AllProducts: React.FC = () => {
//   const { data, error, isLoading } = useGetPlantsQuery();
//   const searchTerm = useSelector((state: any) => state.search.toLowerCase());

//   // State for pagination
//   const [currentPage, setCurrentPage] = useState(1);
//   const [pageSize, setPageSize] = useState(8); // Number of items per page

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error loading data</div>;

//   const plantDataArray = data?.data || [];

//   // Function to filter products based on search term
//   const filterProducts = (products: Product[]) =>
//     products.filter((product: any) =>
//       product.name.toLowerCase().includes(searchTerm)
//     );

//   // Combine all data from all objects into one array for each category
//   const floweringPlants = plantDataArray.flatMap(
//     (item: any) => item.flowers || []
//   );
//   const flowersBySeason = plantDataArray.flatMap(
//     (item: any) => item.season || []
//   );
//   const gardenDecor = plantDataArray.flatMap(
//     (item: any) => item.gardenDecor || []
//   );
//   const giftPlants = plantDataArray.flatMap((item: any) => item.gifts || []);
//   const potsPlanters = plantDataArray.flatMap((item: any) => item.pots || []);
//   const seedsBulbs = plantDataArray.flatMap((item: any) => item.seeds || []);

//   // Apply search term filter to each category
//   const filteredFloweringPlants = filterProducts(floweringPlants);
//   const filteredFlowersBySeason = filterProducts(flowersBySeason);
//   const filteredGardenDecor = filterProducts(gardenDecor);
//   const filteredGiftPlants = filterProducts(giftPlants);
//   const filteredPotsPlanters = filterProducts(potsPlanters);
//   const filteredSeedsBulbs = filterProducts(seedsBulbs);

//   // Function to handle pagination changes
//   const handlePaginationChange = (page: number, pageSize: number) => {
//     setCurrentPage(page);
//     setPageSize(pageSize);
//   };

//   // Function to paginate products
//   const paginateProducts = (products: any[]) => {
//     const startIndex = (currentPage - 1) * pageSize;
//     const endIndex = startIndex + pageSize;
//     return products.slice(startIndex, endIndex);
//   };

//   const renderProductSection = (
//     title: string,
//     products: any[],
//     routePrefix: string
//   ) => {
//     const paginatedProducts = paginateProducts(products);

//     return (
//       <>
//         <h2 className="plants">{title}</h2>
//         <Pagination
//           current={currentPage}
//           pageSize={pageSize}
//           total={products.length}
//           onChange={handlePaginationChange}
//           style={{ marginBottom: "16px" }}
//         />
//         <div className="gallery-grid">
//           {paginatedProducts.length === 0 ? (
//             <div>No data available</div>
//           ) : (
//             paginatedProducts.map((product: any) => (
//               <Link
//                 key={product.name}
//                 to={`/${routePrefix}/${product.name}`}
//                 className="gallery-item"
//               >
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="gallery-image"
//                 />
//                 <div className="gallery-item-title">{product.name}</div>
//               </Link>
//             ))
//           )}
//         </div>
//       </>
//     );
//   };

//   return (
//     <div style={{ padding: "0 16px" }}>
//       {renderProductSection(
//         "Flowering Plants",
//         filteredFloweringPlants,
//         "flower"
//       )}
//       {renderProductSection(
//         "Flowers By Season",
//         filteredFlowersBySeason,
//         "season"
//       )}
//       {renderProductSection(
//         "Garden Decor",
//         filteredGardenDecor,
//         "garden-decor"
//       )}
//       {renderProductSection("Gift Plants", filteredGiftPlants, "gift")}
//       {renderProductSection(
//         "Pots & Planters",
//         filteredPotsPlanters,
//         "pots-planters"
//       )}
//       {renderProductSection("Seeds & Bulbs", filteredSeedsBulbs, "seeds-bulbs")}
//     </div>
//   );
// };

// export default AllProducts;
// import React, { useState } from "react";
// import { useGetPlantsQuery } from "../../redux/api/api";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { Product } from "../../types/types";
// import { Pagination, Select } from "antd";
// import "./AllProducts.css";

// const { Option } = Select;

// const AllProducts: React.FC = () => {
//   const { data, error, isLoading } = useGetPlantsQuery();
//   const searchTerm = useSelector((state: any) => state.search.toLowerCase());
//   const [currentPage, setCurrentPage] = useState(1);
//   const [pageSize] = useState(8);
//   const [sortOrder, setSortOrder] = useState<string | null>(null);

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error loading data</div>;

//   const plantDataArray = data?.data || [];

//   const filterProducts = (products: Product[]) =>
//     products.filter((product: any) =>
//       product.name.toLowerCase().includes(searchTerm)
//     );

//   const sortProducts = (products: Product[]) => {
//     if (sortOrder === "asc") {
//       return products.sort((a, b) => a.price - b.price);
//     }
//     if (sortOrder === "desc") {
//       return products.sort((a, b) => b.price - a.price);
//     }
//     return products;
//   };

//   const paginateProducts = (products: any[]) => {
//     const startIndex = (currentPage - 1) * pageSize;
//     const endIndex = startIndex + pageSize;
//     return products.slice(startIndex, endIndex);
//   };

//   const renderProductSection = (
//     title: string,
//     products: any[],
//     routePrefix: string
//   ) => {
//     const filteredProducts = filterProducts(products);
//     const sortedProducts = sortProducts(filteredProducts);
//     const paginatedProducts = paginateProducts(sortedProducts);

//     return (
//       <>
//         <h2 className="plants">{title}</h2>
//         <Select
//           placeholder="Sort by price"
//           onChange={(value) => setSortOrder(value)}
//           style={{ marginBottom: "16px" }}
//         >
//           <Option value="asc">Price: Low to High</Option>
//           <Option value="desc">Price: High to Low</Option>
//         </Select>
//         <Pagination
//           current={currentPage}
//           pageSize={pageSize}
//           total={filteredProducts.length}
//           onChange={setCurrentPage}
//           style={{ marginBottom: "16px" }}
//         />
//         <div className="gallery-grid">
//           {paginatedProducts.length === 0 ? (
//             <div>No data available</div>
//           ) : (
//             paginatedProducts.map((product: any) => (
//               <Link
//                 key={product.name}
//                 to={`/${routePrefix}/${product.name}`}
//                 className="gallery-item"
//               >
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="gallery-image"
//                 />
//                 <div className="gallery-item-title">{product.name}</div>
//               </Link>
//             ))
//           )}
//         </div>
//       </>
//     );
//   };

//   return (
//     <div style={{ padding: "0 16px" }}>
//       {renderProductSection(
//         "Flowering Plants",
//         plantDataArray.flatMap((item: any) => item.flowers || []),
//         "flower"
//       )}
//       {renderProductSection(
//         "Flowers By Season",
//         plantDataArray.flatMap((item: any) => item.season || []),
//         "season"
//       )}
//       {renderProductSection(
//         "Garden Decor",
//         plantDataArray.flatMap((item: any) => item.gardenDecor || []),
//         "garden-decor"
//       )}
//       {renderProductSection(
//         "Gift Plants",
//         plantDataArray.flatMap((item: any) => item.gifts || []),
//         "gift"
//       )}
//       {renderProductSection(
//         "Pots & Planters",
//         plantDataArray.flatMap((item: any) => item.pots || []),
//         "pots-planters"
//       )}
//       {renderProductSection(
//         "Seeds & Bulbs",
//         plantDataArray.flatMap((item: any) => item.seeds || []),
//         "seeds-bulbs"
//       )}
//     </div>
//   );
// };

// export default AllProducts;
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
    );

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
