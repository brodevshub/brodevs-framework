export const handleClick = (event) => {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};