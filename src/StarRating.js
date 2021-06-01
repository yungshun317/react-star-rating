import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

import Star from "./Star";

// [2] Create a new array from the given length
const createArray = length => [...Array(length)];

// [1] `StarRating` component
export default function StarRating({ style = {}, totalStars = 5, ...props }) {
	// [3] `selectedStars` initially is set to `0`;
	// function `setSelectedStar` is used to change the state value
	const [selectedStars, setSelectedStars] = useState(0);

	return (
		// [5] Pass the style to `div`
		<div style={{ padding: "5px", ...style }} {...props}>
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
		</div>
	);
}