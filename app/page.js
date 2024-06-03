import { Suspense } from "react"
import Header from "@/components/Header"
import Problem from "@/components/Problem"
import FeaturesAccordion from "@/components/FeaturesAccordion"
import Pricing from "@/components/Pricing"
import FAQ from "@/components/FAQ"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"

import Hero from "@/components/homepage/Hero"
import Partners from "@/components/homepage/Partners"
import About from "@/components/homepage/About"
import Features from "@/components/homepage/Features"

export default function Home() {
	return (
		<>
			<Suspense>
				<Header />
			</Suspense>
			<main>
				<Hero />
				<Partners />
				<About />
				<Features />

				<Problem />
				<FeaturesAccordion />
				<Pricing />
				<FAQ />
				<CTA />
			</main>
			<Footer />
		</>
	)
}
