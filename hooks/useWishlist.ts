import { useState, useEffect } from "react";

function useWishlist(initialValue: string[] = []) {
  const [likedItems, setLikedItems] = useState<string[]>(initialValue);

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
    const updatedLikedItems = likedItems.includes(itemId)
      ? likedItems.filter((id) => id !== itemId)
      : [...likedItems, itemId];

    setLikedItems(updatedLikedItems);
  };

  return { likedItems, toggleLike };
}

export default useWishlist;
