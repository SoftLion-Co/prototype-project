import { useState, useEffect } from "react";

function useWishlist() {
  const [likedItems, setLikedItems] = useState<string[]>(
    JSON.parse(localStorage.getItem("likedItems") || "[]")
  );

  useEffect(() => {
    const savedLikedItems = localStorage.getItem("likedItems");
    if (savedLikedItems) {
      setLikedItems(JSON.parse(savedLikedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("likedItems", JSON.stringify(likedItems));
  }, [likedItems]);

  const toggleLike = (itemId: string) => {
    let savedLikedItems = localStorage.getItem("likedItems");
    let likeIds = [];
    if (savedLikedItems) {
      likeIds = JSON.parse(savedLikedItems);
    }
    const updatedLikedItems = likeIds.includes(itemId)
      ? likeIds.filter((id: string) => id !== itemId)
      : [...likeIds, itemId];

    setLikedItems(updatedLikedItems);
  };

  return { likedItems, toggleLike };
}

export default useWishlist;
