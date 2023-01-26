import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import { Stack } from "@mui/material";
import React from "react";
import {
  Product,
  ProductActionsWrapper,
  ProductImage,
  ProductFavButton,
  ProductAddToCart,
  ProductActionButton,
} from "../../styles/product";
import ProductMeta from "./ProductMeta";

function SingleProduct({ product, matches }) {
  return (
    <>
      <Product>
        <ProductImage src={product.image}></ProductImage>
        <ProductMeta product={product} matches={matches} />
        <ProductActionsWrapper>
          <Stack direction="row">
            <ProductFavButton isFav={0}>
              <FavoriteIcon />
            </ProductFavButton>
            <ProductActionButton>
              <ShareIcon color="primary" />
            </ProductActionButton>
            <ProductActionButton>
              <FitScreenIcon color="primary" />
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>
      </Product>
      <ProductAddToCart variant="contained">Add to cart</ProductAddToCart>
    </>
  );
}

export default SingleProduct;
