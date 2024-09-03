import { useContext } from "react";
import {MobileMenuContext} from '@/contexts/mobile-context';

export function useMobileMenu() {

    const ctx = useContext(MobileMenuContext);
    
    if (!ctx) {
        throw new Error('useMobileMenu must be used within a MobileMenuProvider');
    }

    return ctx
}