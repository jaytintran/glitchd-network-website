const Partners = () => {
	return (
		<section className="bg-base-100 container mx-auto px-8">
			<div className="py-16 md:py-32 ">
				<span className="text-secondary button bg-primary/10 px-3 py-2 mb-5 inline-block">
					Trusted by
				</span>
				<h2 className="text-left font-extrabold text-3xl md:text-5xl tracking-tight mb-12 md:mb-20">
					Our Strategic Partners
				</h2>

				<div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-12">
					<div className="bg-[#f8f8f8] shadow-sm text-secondary p-8 md:p-12 rounded-lg w-full min-h-[300px]">
						<h3 className="font-bold text-lg mb-4">Logo</h3>
					</div>

					<div className="bg-[#f8f8f8] shadow-sm text-secondary p-8 md:p-12 rounded-lg w-full min-h-[300px]">
						<h3 className="font-bold text-lg mb-4">Logo</h3>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Partners
