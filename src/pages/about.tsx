import Link from "next/link";
import Image from "next/image";

export const About = () => {
	return (
		<>
			<Image
				src="/images/profile.jpg"
				height={144}
				width={144}
				alt="Your Name"
			/>
			<h2>
				<Link href="/">
					<a>Back to home</a>
				</Link>
			</h2>
		</>
	);
};

export default About;
