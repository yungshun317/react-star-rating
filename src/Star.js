import React from "react";
import { FaStar } from "react-icons/fa";

// [4] Make the stars clickable
const Star = ({ selected = false, onSelect = f => f }) => (
	<FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);