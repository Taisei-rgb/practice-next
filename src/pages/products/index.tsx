import Link from "next/link";

export const ProductsList = () => {
	return (
		<div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
			<h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
				商品一覧
			</h1>
			<ul className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
				<li>
					<Link href="products/mobile">
						<a>mobile端末</a>
					</Link>
				</li>
				<li>
					<Link href="products/pc">
						<a>パソコン</a>
					</Link>
				</li>
				<li>
					<Link href="products/headphone">
						<a>ヘッドホン</a>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default ProductsList;
