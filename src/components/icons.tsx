import type { SVGProps } from 'react';
import {
    Mail, 
    Sun, 
    Moon, 
    Monitor, 
    X, 
    Menu, 
    Eye, 
    EyeOff, 
    Clipboard, 
    ClipboardCheck, 
    Trash, 
    ClipboardPen, 
    CloudDownload, 
    Plus,
    GraduationCap
} from 'lucide-react';


export const Icons = {
    logo: GraduationCap,
    close: X,
    burgerMenu: Menu,
    sun: Sun,
    moon: Moon,
    monitor: Monitor,
    mail: Mail,
    eye: Eye,
    eyeOff: EyeOff,
    clipboard: Clipboard,
    clipboardCheck: ClipboardCheck,
    trash: Trash,
    edit: ClipboardPen,
    download: CloudDownload,
    add: Plus,
    file: (props: SVGProps<SVGSVGElement>) => (
        <svg 
            aria-hidden="true"
            focusable="false"
            data-icon="file"
            role="img"
            xmlns="http://www.w3.org/2000/svg" 
            width="1em" 
            height="1em" 
            viewBox="0 0 24 24" 
            {...props}
        >
            <path fill="currentColor" d="M13 9V3.5L18.5 9M6 2c-1.11 0-2 .89-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"></path>
        </svg>
    ),
    github: (props: SVGProps<SVGSVGElement>) => (
        <svg 
            aria-hidden="true"
            focusable="false"
            data-icon="github"
            role="img"
            xmlns="http://www.w3.org/2000/svg" 
            width="1em" 
            height="1em" 
            viewBox="0 0 24 24" 
            {...props}
        >
            <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"></path>
        </svg>
    ),
    linkedin: (props: SVGProps<SVGSVGElement>) => (
        <svg 
            aria-hidden="true"
            focusable="false"
            data-icon="linkedin"
            role="img"
            xmlns="http://www.w3.org/2000/svg" 
            width="1em" 
            height="1em" 
            viewBox="0 0 24 24" 
            {...props}
        >
            <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path>
        </svg>
    ),
    medium: (props: SVGProps<SVGSVGElement>) => (
        <svg 
            aria-hidden="true"
            focusable="false"
            data-icon="medium"
            role="img"        
            xmlns="http://www.w3.org/2000/svg" 
            width="1em" 
            height="1em" 
            viewBox="0 0 24 24" 
            {...props}
        >
            <path fill="currentColor" fillRule="evenodd" d="M6.77 3.082a47.5 47.5 0 0 1 10.46 0c1.899.212 3.43 1.707 3.653 3.613a45.7 45.7 0 0 1 0 10.61c-.223 1.906-1.754 3.401-3.652 3.614a47.5 47.5 0 0 1-10.461 0c-1.899-.213-3.43-1.708-3.653-3.613a45.7 45.7 0 0 1 0-10.611C3.34 4.789 4.871 3.294 6.77 3.082m9.64 5.898l.84-.803V8h-2.902l-2.069 5.16L9.927 8H6.883v.177l.98 1.18a.4.4 0 0 1 .133.343v4.641a.53.53 0 0 1-.142.46l-1.104 1.34v.175h3.127v-.176l-1.103-1.338a.55.55 0 0 1-.152-.46v-4.014l2.745 5.989h.32l2.357-5.989v4.773c0 .127 0 .151-.084.235l-.848.823v.176h4.117v-.176l-.818-.804a.25.25 0 0 1-.094-.235V9.215a.25.25 0 0 1 .094-.235" clipRule="evenodd"></path>
        </svg>
    )
}