document.addEventListener("DOMContentLoaded", () => {
    // Select all .nav-item elements
    const navItems = document.querySelectorAll('.nav-item');
  
    // Helper function to add/remove a class to a sibling at a given offset
    const toggleSiblingClass = (items, index, offset, className, add) => {
      const sibling = items[index + offset];
      if (sibling) {
        sibling.classList.toggle(className, add);
      }
    };
  
    // Function to handle the hover effect
    const handleHover = (event, index, isTouchEvent = false) => {
      const item = navItems[index];
      item.classList.add('hover'); // Add .hover to current item
  
      // Toggle classes for siblings
      toggleSiblingClass(navItems, index, -1, 'sibling-close', true); // Previous sibling
      toggleSiblingClass(navItems, index, 1, 'sibling-close', true);  // Next sibling
      toggleSiblingClass(navItems, index, -2, 'sibling-far', true);   // Previous-previous sibling
      toggleSiblingClass(navItems, index, 2, 'sibling-far', true);    // Next-next sibling
  
      if (isTouchEvent) {
        // Remove hover effect after touch event (to simulate mouseleave after touch)
        item.addEventListener('touchend', () => {
          item.classList.remove('hover');
          toggleSiblingClass(navItems, index, -1, 'sibling-close', false);
          toggleSiblingClass(navItems, index, 1, 'sibling-close', false);
          toggleSiblingClass(navItems, index, -2, 'sibling-far', false);
          toggleSiblingClass(navItems, index, 2, 'sibling-far', false);
        }, { once: true }); // Remove listener after it's triggered once
      }
    };
  
    // Event listeners to toggle classes on hover (desktop and mobile)
    navItems.forEach((item, index) => {
      // Desktop hover events
      item.addEventListener('mouseenter', () => handleHover(event, index));
  
      item.addEventListener('mouseleave', () => {
        item.classList.remove('hover');
        toggleSiblingClass(navItems, index, -1, 'sibling-close', false);
        toggleSiblingClass(navItems, index, 1, 'sibling-close', false);
        toggleSiblingClass(navItems, index, -2, 'sibling-far', false);
        toggleSiblingClass(navItems, index, 2, 'sibling-far', false);
      });
  
      // Mobile touch events
      item.addEventListener('touchstart', () => handleHover(event, index, true));
    });
  });
  