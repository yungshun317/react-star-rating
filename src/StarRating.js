import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

// [2] Create a new array from the given length
const createArray = length => [...Array(length)];

// [1] `StarRating` component
export default function StarRating({ totalStars = 5 }) {
	// `selectedStars` initially is set to `0`;
	// function `setSelectedStar` is used to change the state value
	const [selectedStars, setSelectedStars] = useState(0);

	return (
		<>
		    {createArray(totalStars).map((n, i) => (
		    	<Star 
		    	    key={i} 
		    	    selected={selectedStars > i}
		    	    onSelect={() => setSelectedStars(i + 1)} 
		    	/>
		    ))}
		    <p>
		        {selectedStars} of {totalStars} stars
		    </p>
		</>
	);
}