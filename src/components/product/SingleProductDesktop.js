import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import { Stack } from "@mui/material";
import React, { useState } from "react";
import {
  Product,
  ProductActionsWrapper,
  ProductImage,
  ProductFavButton,
  ProductAddToCart,
  ProductActionButton,
} from "../../styles/product";
import ProductMeta from "./ProductMeta";

function SingleProductDesktop({ product, matches }) {
  const [showButton, setShowButton] = useState(false);

  const hanldeEnter = () => {
    setShowButton(true);
  };

  const handleOut = () => {
    setShowButton(false);
  };

  return (
    <>
      <Product onMouseEnter={hanldeEnter} onMouseOut={handleOut}>
        <ProductImage src={product.image} />
        <ProductFavButton isFav={0}>
          <FavoriteIcon />
        </ProductFavButton>

        {showButton && (
          <ProductAddToCart show={showButton} variant="contained">
            Add to cart
          </ProductAddToCart>
        )}

        <ProductActionsWrapper show={showButton}>
          <Stack direction="column">
            <ProductActionButton>
              <ShareIcon color="primary" />
            </ProductActionButton>
            <ProductActionButton>
              <FitScreenIcon color="primary" />
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>
      </Product>
      <ProductMeta product={product} matches={matches} />
    </>
  );
}

export default SingleProductDesktop;
