import React from "react"
import Image from "next/image"
import Link from "next/link"

// A better way to illustrate with icons
// Pass any SVG icon as children (recommended width/height : w-6 h-6)
// By default, it's using your primary color for styling
const SocialIcon = ({ logo, href }) => {
	return (
		<Link
			href={href}
			className="w-12 h-12 inline-flex items-center justify-center rounded-md bg-primary/10 text-primary hover:bg-primary/20"
		>
			<Image src={logo} alt="Logo" width={25} height={25} />
		</Link>
	)
}

export default SocialIcon
