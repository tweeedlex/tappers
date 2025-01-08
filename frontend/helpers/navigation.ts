export const scrollToSection = (section: string) => {
  const el: (HTMLDivElement | null) = document.querySelector(`.${section}`);
  if (el) {
    window.scrollTo({
      top: el.offsetTop - 100,
      behavior: "smooth"
    });
  }
}