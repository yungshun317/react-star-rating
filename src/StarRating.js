import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

// [2] Create a new array from the given length
const createArray = length => [...Array(length)];

// [1] StarRating component
export default function StarRating({ totalStars = 5 }) {
	// `selectedStars` initially is set to `3`
	const [selectedStars] = useState(3);

	return (
		<>
		    {createArray(totalStars).map((n, i) => (
		    	<Star key={i} selected={selectedStars > i} />
		    ))}
		    <p>
		        {selectedStars} of {totalStars} stars
		    </p>
		</>
	);
}