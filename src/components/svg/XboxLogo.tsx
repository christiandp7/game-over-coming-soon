import React from 'react'

const XboxLogo = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			viewBox="0 0 746 746">
			<defs>
				<style
					dangerouslySetInnerHTML={{
						__html:
							'\n          .a {\n            fill: url(#a);\n          }\n\n          .b {\n            fill: url(#b);\n          }\n\n          .c {\n            fill: url(#c);\n          }\n\n          .d {\n            fill: url(#d);\n          }\n\n          .e {\n            fill: url(#e);\n          }\n\n          .f {\n            fill: url(#f);\n          }\n        ',
					}}
				/>
				<radialGradient
					id="a"
					cx={373}
					cy={373}
					r={373}
					gradientUnits="userSpaceOnUse">
					<stop offset={0} stopColor="#4d4d4d" />
					<stop offset={1} />
				</radialGradient>
				<linearGradient
					id="b"
					x1="60.97"
					y1="336.01"
					x2="685.97"
					y2="336.01"
					gradientUnits="userSpaceOnUse">
					<stop offset={0} stopColor="#fff" />
					<stop offset="0.87" stopColor="#fff" />
				</linearGradient>
				<linearGradient
					id="c"
					x1="60.47"
					y1="417.76"
					x2="289.47"
					y2="417.76"
					xlinkHref="#b"
				/>
				<linearGradient
					id="d"
					x1="495.93"
					y1="458.63"
					x2="590.14"
					y2="407.31"
					gradientUnits="userSpaceOnUse">
					<stop offset={0} stopColor="#fff" />
					<stop offset={1} stopColor="#fff" />
				</linearGradient>
				<linearGradient
					id="e"
					x1="269.47"
					y1="210.6"
					x2="306.24"
					y2="166.18"
					xlinkHref="#b"
				/>
				<linearGradient
					id="f"
					x1="471.09"
					y1="210.68"
					x2="415.94"
					y2="163.96"
					xlinkHref="#d"
				/>
			</defs>
			<title>Untitled-3</title>
			<circle className="a" cx={373} cy={373} r={373} />
			<polygon
				className="b"
				points="685.97 558.25 374.97 352.74 373.47 353.73 373.47 353.24 371.97 352.25 60.97 557.75 289.97 277.75 130.48 113.78 371.38 221.06 373.47 220.15 373.47 220.63 375.56 221.56 616.46 114.27 456.97 278.25 685.97 558.25"
			/>
			<polygon
				className="c"
				points="289.47 277.75 289.47 406.76 60.47 557.75 289.47 277.75"
			/>
			<polyline className="d" points="685.47 557.75 456.47 277.75 456.47 406.59" />
			<polyline className="e" points="130.47 113.75 373.47 349.75 373.47 221.75" />
			<polyline className="f" points="375.47 221.75 616.47 113.75 375.47 349.75" />
		</svg>
	)
}

export default XboxLogo
