import { IProduct } from "../../interfaces";

function ProductCard({
  name,
  price,
  thumbnail_image,
  description,
  rating,
}: IProduct) {
  function calcStars() {
    return [1,2,3,4,5].map((num) => (
      <svg
          key={num}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 fill-current ${num <= rating! ? 'text-yellow-500' : 'text-gray-400'} `}
        >
          <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
        </svg>
    ))
  }

  return (
    <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
      <a
        href=""
        className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
      >
        <div className="relative pb-48 overflow-hidden">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={thumbnail_image}
            alt=""
          />
        </div>
        <div className="p-4">
          <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
            Highlight
          </span>
          <h2 className="mt-2 mb-2  font-bold">{name}</h2>
          <p className="text-sm desc">{description}</p>
          <div className="mt-3 flex items-center">
            <span className="text-sm font-semibold">${price}</span>&nbsp;
            <span className="text-sm font-semibold"></span>
          </div>
        </div>
        <div className="p-4 flex items-center text-sm text-gray-600">
          {calcStars()}
          <span className="ml-2">{rating} rating</span>
        </div>
      </a>
    </div>
  );
}

export default ProductCard;
