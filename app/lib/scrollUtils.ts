/**
 * Utility function for smooth scrolling to page sections with proper navbar height handling
 */

/**
 * Scrolls to a target element with appropriate offset for the navbar
 * @param targetId - The ID of the element to scroll to
 * @param extraOffset - Additional offset if needed (optional)
 */
export const smoothScrollTo = (
  e: React.MouseEvent<HTMLAnchorElement>,
  targetId: string,
  extraOffset: number = -30
): void => {
  e.preventDefault();
  const targetElement = document.getElementById(targetId);

  if (!targetElement) return;

  // Get the navbar element and its height
  const navbar = document.querySelector("nav");
  // Calculate navbar height dynamically, or use fallback of 80px
  const navbarHeight = navbar?.offsetHeight || 80;

  // Use a slightly larger offset to ensure the section is fully visible
  // The extra padding provides breathing room between the navbar and section content
  const totalOffset = navbarHeight + 20 + extraOffset;

  window.scrollTo({
    top: targetElement.offsetTop - totalOffset,
    behavior: "smooth",
  });

  // Update URL without causing page jump
  if (window.history && window.history.pushState) {
    window.history.pushState(null, "", `#${targetId}`);
  }
};
