export const LOADER = 'assets/loader.svg';
export const STAR = 'assets/star.svg';
export const YELLOW_STAR = 'assets/yellow-star.svg';
export const TARGET = 'assets/target.svg';
export const RIGHT_CHEVRON = 'assets/right-chevron.svg';

export const getIcon = (name) => {
    return `assets/weather-icons/${name}`;
}

export const getPng = (name) => {
    let png = name.slice(0, name.length-4);
    return `assets/weather-icons/${png}.png`;
}