// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.

const imgList = document.getElementById("img-list");

//render product image list
fetch("./data/product-images.json")
  .then((res) => res.json())
  .then((data) => {
    let str = "";
    data.forEach((item) => {
      str += `
      <div class="w-20 h-[120px] md:w-[188px] md:h-[190px] lg:w-40 flex-shrink-0">
              <img
                class="w-full h-full object-cover rounded-md"
                src=${item.image_url}
                alt="product"
              />
            </div>
      `;
    });
    imgList.innerHTML = str;
  })
  .catch((err) => console.error(err));
