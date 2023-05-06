import React from "react";

interface Props {
	color: string;
	size: string;
}

export const IconLocation = (props: Props) => {
	return (
		<svg
			style={{width: `auto`, height: `${props.size}`}}
			viewBox="0 0 24 32"
			fill="none"
		>
			<path
				d="M10.247 14.717c-.5-.531-.747-1.16-.747-1.917 0-.756.248-1.387.747-1.919.496-.53 1.072-.781 1.753-.781.68 0 1.257.251 1.755.781.497.532.745 1.163.745 1.919s-.248 1.386-.745 1.917c-.498.531-1.075.783-1.755.783-.68 0-1.256-.252-1.753-.783zm1.403 13.4.35.343.35-.343c3.067-3.003 5.36-5.75 6.865-8.24 1.5-2.48 2.285-4.737 2.285-6.757 0-3.014-.905-5.523-2.742-7.483C16.927 3.684 14.664 2.7 12 2.7c-2.664 0-4.927.984-6.76 2.937-1.836 1.96-2.74 4.469-2.74 7.483 0 2.02.785 4.277 2.285 6.758 1.504 2.49 3.798 5.236 6.865 8.24zm-8.246-6.566C1.448 18.47.5 15.661.5 13.12c0-3.892 1.17-6.941 3.47-9.204C6.295 1.628 8.965.5 12 .5c3.034 0 5.704 1.128 8.03 3.416 2.3 2.263 3.47 5.312 3.47 9.204 0 2.542-.947 5.349-2.903 8.431-1.9 2.997-4.76 6.254-8.597 9.772-3.836-3.518-6.696-6.776-8.596-9.771z"
				fill={props.color}
				stroke={props.color}
			/>
		</svg>
	);
};