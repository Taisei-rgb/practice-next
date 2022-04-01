import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

// SSGの場合
export const getStaticProps = async ({ params }: { params: any }) => {
	const req = await fetch(`http://localhost:3000/${params.id}.json`);
	const data = await req.json();

	return {
		props: {
			product: data,
		},
	};
};

export const getStaticPaths = async () => {
	const req = await fetch(`http://localhost:3000/products.json`);
	const data = await req.json();

	const paths = data.map((product: string) => {
		return {
			params: {
				id: product,
			},
		};
	});
	return {
		paths,
		fallback: false, // Path で設定されていないものは、すべて404になる
	};
};

export const Product = ({ product }: { product: any }) => {
	const router = useRouter();
	const { id } = router.query; // 左側の記述は router.query.id と記述するのと同じ
	return (
		<div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
			<main>
				<h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
					{id} のページです💪🏻
				</h1>
				<Image
					src={product.image}
					alt="#"
					width={500}
					height={500}
					className="object-cover"
				/>
				<p>{product.name}</p>
				<br />
				<Link href="/products">商品一覧へ</Link>
			</main>
		</div>
	);
};

export default Product;
