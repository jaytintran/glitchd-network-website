import Image from "next/image"
// import TestimonialsAvatars from "./TestimonialsAvatars"
import config from "@/config"

const Hero = () => {
	return (
		<section className="container mx-auto bg-base-100 flex flex-col xl:grid xl:grid-cols-4 items-center justify-center gap-10 lg:gap-15 px-8 py-8 lg:py-20">
			{/* Left side content */}
			<div className="xl:col-span-3">
				<div className="lg:w-full">
					<Image
						src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
						alt="Product Demo"
						className="w-full h-[500px] object-cover"
						priority={true}
						width={500}
						height={500}
					/>
				</div>
				<div className="flex flex-row gap-10 lg:gap-14 items-center justify-between text-center lg:text-left lg:items-start">
					<h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4 mt-10">
						Unmatched <span className="text-secondary">Scalability</span> with
						GlitchD Labs Performance
					</h1>

					{/* <TestimonialsAvatars priority={true} /> */}
				</div>
			</div>

			{/* Right side content */}
			<div className="xl:col-span-1 h-full">
				<div className="flex flex-col gap-10 lg:gap-16 items-center justify-center h-full text-center lg:text-left lg:items-around lg:justify-between">
					<div>
						<h1 className="font-extrabold text-xl lg:text-2xl tracking-tight md:-mb-Q4">
							Unlock Real-World Solutions with GlitchD Labs advanced ZK-EVM
							technology
						</h1>
					</div>

					<div className="flex flex-col gap-3">
						<p className="text-lg opacity-90 leading-relaxed">
							Empower your operations with GlitchD Labs ZK-EVM technology
							designed to solve complex challenges across industries
						</p>
						<button className="btn btn-neutral hover:bg-[#1b1b1b] w-full">
							Get {config.appName}
						</button>
					</div>

					{/* <TestimonialsAvatars priority={true} /> */}
				</div>
			</div>
		</section>
	)
}

export default Hero
