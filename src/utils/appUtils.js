export const safeAnchorInNewTab = {
    target: '__blank',
    rel: 'noreferrer noopener'
}

const portalStyles = {
    width: '100vw',
    height: '100vh',
    'z-index': 10000,
    position: 'absolute',
    top: 0,
    left: 0,
    'background-color': 'rgba(0,0,0,.6)'
}

export const applyPortalStyles = (el) => {
    for (const style in portalStyles) {
        el.style[style] = portalStyles[style];
    }
}

export const createMarkup = (string) => ({ __html: string });

export const age = (() => {
    const currentDate = new Date();
    const birthday = new Date('05/31/1993');
    const diffTime = Math.abs(birthday - currentDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.floor(diffDays / 365);
})();

export const experience = (() => {
    const currentDate = new Date();
    const joiningDate = new Date('12/08/2014');
    const diffTime = Math.abs(joiningDate - currentDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const years = Math.floor(diffDays / 365);
    let months = 12 - ((joiningDate.getMonth() + 1) - (currentDate.getMonth() + 1));
    if(months === 0) months = 0;
    return `${years}.${months}`;
})();