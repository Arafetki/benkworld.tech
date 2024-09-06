'use client';

import {createContext,PropsWithChildren} from 'react';
import type { MobileMenuContextState } from '@/types';
import {useBoolean} from 'usehooks-ts';

const initialState: MobileMenuContextState = {
    isMobileMenuOpen: false,
    setFalse: () => null,
    setTrue: () => null,
    toggle: () => null
}

export const MobileMenuContext = createContext<MobileMenuContextState>(initialState);

export function MobileMenuProvider({children}: PropsWithChildren) {

    const {value,setFalse,setTrue,toggle} = useBoolean(false)

    const ctxValue = {
        isMobileMenuOpen: value,
        setFalse: setFalse,
        setTrue: setTrue,
        toggle: toggle
    }

    return (
        <MobileMenuContext.Provider value={ctxValue}>
            {children}
        </MobileMenuContext.Provider>
    );

}