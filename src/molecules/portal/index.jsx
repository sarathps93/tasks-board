import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { applyPortalStyles } from '../../utils/appUtils';

const Portal = ({ children, closePortal }) => {
    const el = document.createElement('div');

    const preventScroll = (e) => e.preventDefault();
    const toggleOffPortal = () => closePortal();

    useEffect(() => {
        document.body.appendChild(el);
        applyPortalStyles(el);
        el.addEventListener('click', toggleOffPortal);
        document.querySelector('#root').style['pointer-events'] = 'none';
        return () => {
            el.removeEventListener('click', toggleOffPortal);
            document.body.removeChild(el);
            document.body.removeEventListener('scroll', preventScroll);
            document.querySelector('#root').style['pointer-events'] = 'auto';
        }
    }, [el]);

    return createPortal(children, el);
};

export default Portal;