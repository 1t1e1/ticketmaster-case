import React from "react";

export default function DetailImage({ images }) {
	if (images)
		console.log(
			"DetailImage -> images",
			images.sort((image1, image2) => image1.width - image2.width)
		);

	return (
		<div>
			image comp from Component
			<div>
				{images &&
					images
						// .sort((image1, image2) => image1.width - image2.width)
						.map((image) => (
							<div>
								<h3> {image.ratio}</h3>
								<img src={image.url} /> <hr />
							</div>
						))}

				{/* {JSON.stringify(images, null, 4)} */}
			</div>
		</div>
	);
}
