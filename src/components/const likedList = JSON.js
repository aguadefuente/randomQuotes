const likedList = JSON.parse(localStorage.getItem("liked")) ?? [];

const nextLikedList = likedList.concat({ id: 5, liked: true });
const nextLikedList = likedList.filter((obj) => texto !== "");
localStorage.setItem("liked", JSON.stringify(nextLikedList));
