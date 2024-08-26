const category = document.querySelectorAll(".item");
let num = [];

category.forEach((item) => {
  num.push(item);
  const categoryName = item.querySelector("h2").textContent;
  const categoryQuantity = item.querySelectorAll("ul > li").length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryQuantity}`);
});

console.log(`Number of categories: ${num.length}`);