// THESE AREN'T POSSIBLE WITH THE CURRENT TESTING HARNESS, IS THERE ANOTHER WAY?

/**
 * Helpers related to checking meta-data in the applications HEAD
 * Reference: http://www.w3.org/TR/WCAG10-HTML-TECHS/#document
 */

import A11yError from '../a11y-error';

/**
 * Checks the pages HTML element to ensure it has a language set
 * @return {Boolean|Error}
 */
export function checkLanguage() {
  let html = document.querySelector('html');

  if (!html.lang) {
    throw new A11yError(`The page at ${window.location.pathname} does not have a proper language set on the HTML element.`);
  }

  return true;
}

/**
 * Checks the page to ensure there is a title element and it has proper content
 * @return {Boolean|Error}
 */
export function checkTitle() {
  let title = document.querySelector('title');

  if (!title || !title.textContent) {
    throw new A11yError(`The page at ${window.location.pathname} does not have a proper title.`);
  }

  return true;
}
