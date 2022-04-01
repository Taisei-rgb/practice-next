import { useRouter } from "next/router";
import Image from "next/image";

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

export const Product = ({ product }: { product: any }) => {
	const router = useRouter();
	const { id } = router.query; // console.log(router.query.id)と記述するのと同じ
	return (
		<div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
			<main>
				<h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
					{id} のページです💪🏻
				</h1>
				<Image src={product.image} className="w-4 h-6" alt="#" />
				<p>{product.name}</p>
				<br />
			</main>
		</div>
	);
};

export default Product;
