export const safeAnchorInNewTab = {
    target: '__blank',
    rel: 'noreferrer noopener'
}

const portalStyles = {
    width: '100%',
    height: '100%',
    'z-index': 10000,
    position: 'fixed',
    top: 0,
    left: 0,
    'background-color': 'rgba(0,0,0,.6)'
}

export const applyPortalStyles = (el) => {
    for (const style in portalStyles) {
        el.style[style] = portalStyles[style];
    }
}

export const debounce = (func, delay = 1000) => { 
    let debounceTimer 
    return (...args) => { 
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(null, args), delay);
    } 
}

export const stopImmediatePropagation = (e) => e.nativeEvent.stopImmediatePropagation();

export const preventDefault = (e) => e.preventDefault();

export const getTaskId = (id) => String(id).padStart(3, '0');

