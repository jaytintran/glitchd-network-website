import Image from "next/image"

const featuresData = [
	{
		imageUrl:
			"https://images.unsplash.com/photo-1587161584760-f51779fb276a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		altText: "Product Demo 1",
		title:
			"We leverage the power of zero-knowledge (ZK) technology to address real-world challenges in various sectors from financial services to gaming",
	},
	{
		imageUrl:
			"https://images.unsplash.com/photo-1599723352663-d84307d89a8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		altText: "Product Demo 2",
		title:
			"By integrating ZK proofs into our ecosystem, we offer robust solutions that protect sensitive information while maintaining high performance and scalability",
	},
	{
		imageUrl: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2",
		altText: "Product Demo 3",
		title:
			"With breakthroughs like the Data Availability Network and Appchains, we are setting new standards in blockchain interoperability",
	},
]
const Feature = ({ imageUrl, altText, title, description }) => {
	return (
		<div className="flex flex-col justify-center items-center min-w-[600px] gap-10">
			<div className="lg:w-full h-[600px] overflow-hidden">
				<Image
					src={imageUrl}
					alt={altText}
					className="w-full h-full object-cover"
					priority={true}
					width={500}
					height={300}
				/>
			</div>
			<div>
				<h2 className="text-center font-extrabold text-2xl md:text-4xl tracking-tight mb-12 md:mb-20 space-y-2 max-w-3xl mx-auto">
					{title}
				</h2>
				<p>{description ? description : ""}</p>
			</div>
		</div>
	)
}

const Features = () => {
	return (
		<section className="bg-base-100 container mx-auto px-8 py-16 md:py-32">
			<div className="flex flex-col gap-16 md:gap-32">
				{featuresData.map((feature, index) => (
					<Feature
						key={index}
						imageUrl={feature.imageUrl}
						altText={feature.altText}
						title={feature.title}
						description={feature.description}
					/>
				))}
			</div>

			{/* <div className="flex flex-col py-16 md:py-32 gap-10">
				<div className="flex flex-col md:flex-row justify-center items-center min-w-[600px]">
					<div className="lg:w-full">
						<Image
							src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
							alt="Product Demo"
							className="w-full h-[400px] object-cover"
							priority={true}
							width={500}
							height={500}
						/>
					</div>
				</div>
				<div>
					<span className="text-secondary button bg-primary/10 px-3 py-2 mb-5 inline-block">
						Features
					</span>
					<h2 className="text-left font-extrabold text-3xl md:text-5xl tracking-tight mb-12 md:mb-20">
						Welcome to GlitchD Labs, a leader in digital innovation. We
						specialize in ZK-EVM technology and advanced blockchain solutions,
						ensuring your data is secure, verifiable, and accessible
					</h2>
				</div>
			</div> */}
		</section>
	)
}

export default Features
