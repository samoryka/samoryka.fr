import React, { useState, useEffect, ReactNode } from 'react';
import { CSSTransition } from 'react-transition-group'

import '../../styles/animations.css'

interface ComponentTransitionProps {
    animation: string;
    children: ReactNode;
}

const ComponentTransition: (props: ComponentTransitionProps) => JSX.Element = ({ animation, children }) => {
    const [componentDisplayed, setComponentDisplayed] = useState(false);
    useEffect(() => {
        setComponentDisplayed(true);
        return () => setComponentDisplayed(false);
    }, []);

    return (
        <CSSTransition
            in={componentDisplayed}
            timeout={500}
            classNames={animation}
            appear={true}>
            {children}
        </CSSTransition>
    );
}

export default ComponentTransition;
