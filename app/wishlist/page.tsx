"use client";

import useWishlist from "@/hooks/useWishlist";

const Wishlist = () => {
  const { likedItems, toggleLike } = useWishlist();
  return (
    <div>
      <h1>{likedItems}</h1>
    </div>
  );
};

export default Wishlist;
