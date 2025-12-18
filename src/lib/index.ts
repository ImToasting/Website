export function timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function scrollToAnchor (id: string, offset = 0) {
    const anchor = document.getElementById(id)
    window?.scrollTo({
        top: (anchor?.offsetTop ?? 0) - offset,
        behavior: 'smooth'
    });
}