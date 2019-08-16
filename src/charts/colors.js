const colors = alpha => [
	`rgb(57, 119, 175, ${alpha})`,
	`rgb(239, 133, 54, ${alpha})`,
	`rgb(81, 157, 62, ${alpha})`,
	`rgb(197, 57, 50, ${alpha})`,
	`rgb(141, 107, 184, ${alpha})`,
	`rgb(133, 88, 77, ${alpha})`,
	`rgb(213, 126, 190, ${alpha})`,
	`rgb(127, 127, 127, ${alpha})`,
	`rgb(189, 188, 69, ${alpha})`,
	`rgb(87, 188, 204, ${alpha})`,
	`rgb(235, 68, 31, ${alpha})`,
	`rgb(181, 252, 129, ${alpha})`,
	`rgb(129, 252, 226, ${alpha})`,
	`rgb(129, 207, 252, ${alpha})`,
	`rgb(176, 129, 252, ${alpha})`,
	`rgb(252, 129, 245, ${alpha})`,
	`rgb(208, 133, 111, ${alpha})`,
	`rgb(93, 224, 137, ${alpha})`,
	`rgb(1, 255, 216, ${alpha})`,
	`rgb(52, 35, 202, ${alpha})`,
	`rgb(90, 15, 103, ${alpha})`
];

export const getColors = (alpha = 1, length = 500) =>
	Array(length)
		.fill(null)
		.map((_, i) => {
			const cs = colors(alpha);
			return cs[i % cs.length];
		});
