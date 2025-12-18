/**
 * Navigation Utilities
 * Handles smooth scrolling and navigation between sections
 */

/**
 * Smooth scroll to a specific section by ID
 * @param {string} sectionId - The ID of the target section
 * @param {number} offset - Optional offset from the top (default: 80px for navbar)
 */
export const scrollToSection = (sectionId, offset = 80) => {
  try {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      return true;
    } else {
      console.warn(`Section with ID "${sectionId}" not found`);
      return false;
    }
  } catch (error) {
    console.error('Error scrolling to section:', error);
    return false;
  }
};

/**
 * Scroll to "Tentang Kami" section (Section3 - Team)
 */
export const scrollToTentangKami = () => {
  return scrollToSection('tentang-kami');
};

/**
 * Scroll to "Profesionalitas" section (Section4 - Services)
 */
export const scrollToProfesionalitas = () => {
  return scrollToSection('profesionalitas');
};

/**
 * Navigation configuration
 */
export const NAVIGATION_CONFIG = {
  sections: {
    TENTANG_KAMI: 'tentang-kami',
    PROFESIONALITAS: 'profesionalitas',
    LOKASI: 'lokasi',
    KONTAK: 'kontak'
  },
  scrollOffset: 80, // Default offset for fixed headers
  scrollBehavior: 'smooth'
};

/**
 * Get all available navigation sections
 */
export const getNavigationSections = () => {
  return Object.values(NAVIGATION_CONFIG.sections);
};
