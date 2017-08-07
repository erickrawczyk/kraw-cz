import smoothScroll from './smoothScroll.js'

function addSmoothScrolling(pages) {
  pages.map((page, idx) => {
    const trigger = `#${page.name.toLowerCase()}-next-btn`;
    const destIdx = idx === pages.length - 1 ? 0 : idx+1
    const dest = `#${pages[destIdx].name.toLowerCase()}`;
    return smoothScroll(trigger, dest)
  })
}

export default addSmoothScrolling;
