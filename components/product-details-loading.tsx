import type { ProductType } from "@/server/db";
import { getProduct } from "@/server/db";
import { Slider } from "./slider";
import { notFound } from "next/navigation";
import { Rating } from "./rating";
import { CartButton } from "./cart-button";
import AddToCart from "./add-to-cart";
import HomeButton from "./home-button";
import { CartContextWrapper } from "./cart-context-wrapper";

// loading state
export function ProductDetailsLoading() {
  return (
    <main
      role="status"
      className="flex min-h-screen animate-pulse items-center justify-center py-24"
    >
      <div className="flex flex-col xl:flex-row max-w-6xl items-center sm:items-start sm:justify-start gap-10 px-2">
        <div className="flex flex-col gap-4">
          {/* image slider */}
          <div className="flex pb-6">
            <span className="w-14" />
            <div className="flex h-52 w-52 sm:h-[502px] sm:w-[481px] items-center justify-center rounded-[6.01px] bg-gray-300">
              <svg
                className="h-10 w-10 text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
            <span className="w-14" />
          </div>
        </div>

        {/* right side */}
        <div className="flex min-h-[516px] grow flex-col justify-between gap-3">
          {/* name and rating */}
          <div className="flex h-[176px] sm:h-[103px] w-full flex-col sm:flex-row items-center sm:items-end justify-between pb-4">
            <div className="h-[50px] w-40 rounded-full bg-gray-300" />
            <div className="sm:pb-[13px]">
              <div className="h-[24px] w-56 rounded-full bg-gray-300" />
            </div>
          </div>

          {/* description */}
          <div className="flex h-[36px]  items-center">
            <div className="h-[24px] w-40 rounded-full bg-gray-300" />
          </div>

          {/* stock */}
          <div className="flex h-[36px] items-center">
            <div className="h-[24px] w-40 rounded-full bg-gray-300" />
          </div>

          {/* brand */}
          <div className="flex h-[36px] items-center">
            <div className="h-[24px] w-40 rounded-full bg-gray-300" />
          </div>

          {/* category */}
          <div className="flex h-[36px]  items-center">
            <div className="h-[24px] w-40 rounded-full bg-gray-300" />
          </div>

          {/* discount */}
          <div className="pt-6 ">
            <div className="h-[45px] w-[118px] rounded-full bg-gray-300" />
          </div>

          {/* price */}
          <div className="flex w-full flex-col sm:flex-row gap-6 sm:gap-4 items-start sm:items-center justify-between pb-12 pt-4">
            <div className="h-[64px] w-40 rounded-full bg-gray-300" />
            <div className="h-[66px] w-[262px] rounded-full bg-gray-300" />
          </div>
        </div>
      </div>
    </main>
  );
}

// product details
interface ProductDetailsProp {
  idStr: string;
}
export async function ProductDetails({ idStr }: ProductDetailsProp) {
  let product: ProductType;
  try {
    product = await getProduct(idStr);
  } catch (err) {
    notFound();
  }

  return (
    <CartContextWrapper>
      <main className="relative flex min-h-screen items-center justify-center py-24">
        <HomeButton />
        <CartButton />
        <div className="flex flex-col xl:flex-row max-w-6xl items-center sm:items-start sm:justify-start gap-10 px-2">
          <Slider images={product.images} alt={product.title} />

          {/* right side */}
          <div className="flex min-h-[516px] w-full grow flex-col justify-between gap-3">
            {/* name and rating */}
            <div className="flex grow items-end">
              <div className="flex w-full flex-col sm:flex-row items-center justify-between gap-16">
                <h1 className="text-[48px] font-[600]">{product.title}</h1>
                <Rating rating={product.rating} />
              </div>
            </div>

            {/* description */}
            <p className="max-w-sm text-[24px] font-[500]">
              {product.description}
            </p>

            {/* stock */}
            <p className="text-[24px] font-[500] opacity-60">
              Stock: {product.stock}
            </p>

            {/* brand */}
            <p className="text-[24px] font-[500] opacity-60">
              Brand: {product.brand}
            </p>

            {/* category */}
            <p className="text-[24px] font-[500] opacity-60">
              Category: {product.category}
            </p>

            {/* discount */}
            <div className="pt-6">
              <div className="w-fit rounded-full bg-[#6100FF] px-[20px] py-[7.63px] text-[20px] font-[600] text-white">
                {-1 * product.discountPercentage} %
              </div>
            </div>

            {/* price */}
            <div className="flex flex-col sm:flex-row grow justify-between">
              <div className="text-[64px] font-[600] text-[#323232]">
                {product.price} $
              </div>
              <AddToCart item={product} />
            </div>
          </div>
        </div>
      </main>
    </CartContextWrapper>
  );
}
