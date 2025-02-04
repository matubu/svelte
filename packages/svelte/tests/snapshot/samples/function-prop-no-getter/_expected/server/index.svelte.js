import * as $ from "svelte/internal/server";

export default function Function_prop_no_getter($$payload, $$props) {
	$.push();

	let count = 0;

	function onmouseup() {
		count += 2;
	}

	const plusOne = (num) => num + 1;

	$$payload.out += `<!--[-->`;

	Button($$payload, {
		onmousedown: () => count += 1,
		onmouseup,
		onmouseenter: () => count = plusOne(count),
		children: ($$payload, $$slotProps) => {
			$$payload.out += `clicks: ${$.escape(count)}`;
		}
	});

	$$payload.out += `<!--]-->`;
	$.pop();
}