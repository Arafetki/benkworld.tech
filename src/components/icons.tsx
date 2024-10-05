import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { SVGProps } from "react";
import {
    Mail, 
    Monitor, 
    X, 
    Menu, 
    Clipboard, 
    ClipboardCheck, 
    CloudDownload, 
    Send,
    HardHat,
    RotateCcw,
    Bell,
    ChevronLeft,
    ChevronRight,
    Phone,
    MapPin,
    ArrowUpRight,
    CircleCheck,
    CircleX,
    Rss,
    MoveDown,
    ChevronDown
} from 'lucide-react';

export const Icons = {
    close: X,
    burgerMenu: Menu,
    sun: SunIcon,
    moon: MoonIcon,
    monitor: Monitor,
    mail: Mail,
    send: Send,
    clipboard: Clipboard,
    clipboardCheck: ClipboardCheck,
    download: CloudDownload,
    construction:HardHat,
    reload:RotateCcw,
    bell: Bell,
    chevronLeft: ChevronLeft,
    chevronRight: ChevronRight,
    phone: Phone,
    location: MapPin,
    externLink: ArrowUpRight,
    circleCheck: CircleCheck,
    circleX: CircleX,
    rss: Rss,
    arrowDown: MoveDown,
    chevronDown: ChevronDown,
    tunisianFlag: ({...props}: SVGProps<SVGSVGElement>) => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-tn" viewBox="0 0 512 512" {...props}>
                <path fill="#e70013" d="M0 0h512v512H0z"/>
                <path fill="#fff" d="M256 135a1 1 0 0 0-1 240 1 1 0 0 0 0-241zm72 174a90 90 0 1 1 0-107 72 72 0 1 0 0 107m-4.7-21.7-37.4-12.1-23.1 31.8v-39.3l-37.3-12.2 37.3-12.2v-39.4l23.1 31.9 37.4-12.1-23.1 31.8z"/>
            </svg>
        );
    }
}