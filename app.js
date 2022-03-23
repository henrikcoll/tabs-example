// Get all the tab groups (elements with the .tabs class).
const tabGroups = document.querySelectorAll('.tabs');

// Loop through all the tab groups.
for (let tabGroup of tabGroups) {
	// Get all the li elements in the tab group.
	let lis = tabGroup.querySelectorAll('li');

	// Loop through the li elements inside the tab group.
	for (let li of lis) {
		// Get the anchor inside the li element.
		let a = li.querySelector('a');

		// Add an onclick handler.
		a.addEventListener('click', () => {

			// Hide all the tabs.
			hideAll(tabGroup, lis);

			// Add the 'active' class to the li element.
			li.classList.add('active');

			// Get all the divs with the same data-tag as the li element, and remove the 'hidden' class.
			tabGroup.querySelectorAll(`div[data-tab='${li.dataset.tab}']`)
				.forEach(el => el.classList.remove('hidden'));
		})
	}

	// "Press" the first tab so there always is an active tab.
	lis[0].querySelector('a').click();
}

// Function to hide all the content, and deactivate all the tabs.
function hideAll(tabGroup, lis) {
	for (let li of lis) {

		// Remove the 'active' class from the li element so it doesn't have the black line.
		li.classList.remove('active');

		// Get all the divs with the same data-tag as the li element, and add the 'hidden' class.
		tabGroup.querySelectorAll(`div[data-tab='${li.dataset.tab}']`)
			.forEach(el => el.classList.add('hidden'));
	}
}