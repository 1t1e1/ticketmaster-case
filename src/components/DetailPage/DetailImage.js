import React from "react";

export default function DetailImage({ imagesrc }) {
	return <>{imagesrc && <img src={imagesrc} className="img-fluid" />}</>;
}
