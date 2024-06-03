import Image from "next/image"

const About = () => {
	return (
		<section className="bg-base-100 container mx-auto px-8">
			<div className="flex flex-col lg:flex-row py-16 md:py-32 gap-10">
				<div>
					<span className="text-secondary button bg-primary/10 px-3 py-2 mb-5 inline-block">
						About
					</span>
					<h2 className="text-left font-extrabold text-3xl md:text-5xl tracking-tight mb-12 md:mb-20">
						Welcome to GlitchD Labs, a leader in digital innovation. We
						specialize in ZK-EVM technology and advanced blockchain solutions,
						ensuring your data is secure, verifiable, and accessible
					</h2>
				</div>

				<div className="flex flex-col md:flex-row justify-center items-center min-w-[600px]">
					<div className="lg:w-full">
						<Image
							src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
							alt="Product Demo"
							className="w-full min-h-[500px] lg:min-h-[400px] object-cover"
							priority={true}
							width={500}
							height={500}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
