export const toDecart = (r, fi) => {

    return {
        x: r * Math.cos(fi/57.4),
        y: r * Math.sin(fi/57.4),
    }
}