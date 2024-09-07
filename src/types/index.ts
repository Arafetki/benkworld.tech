export type SiteConfig = {
    title: string
    description: string
    url: string
    emailAdresses: string[]
}

export type NavItem = {
    name: string
    href: string
}

export type MobileMenuContextState = {
    isMobileMenuOpen: boolean
    setTrue: () => void
    setFalse: () => void
    toggle: ()=>void
}

export type SearchParams = Record<string,string | string[] | undefined>

export type HeadingProps = React.HTMLProps<HTMLHeadingElement>;
export type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
export type ParagraphProps = React.HTMLProps<HTMLParagraphElement>;
export type ListProps = React.HTMLProps<HTMLUListElement>;
export type OrderedListProps = React.OlHTMLAttributes<HTMLOListElement>;;
export type ListItemProps = React.HTMLProps<HTMLLIElement>;
export type BlockquoteProps = React.HTMLProps<HTMLQuoteElement>;
export type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>;
export type HrProps = React.HTMLProps<HTMLHRElement>;
export type TableProps = React.HTMLProps<HTMLTableElement>;
export type TableRowProps = React.HTMLProps<HTMLTableRowElement>;
export type TableCellProps = React.HTMLProps<HTMLTableCellElement>;
export type PreProps = React.HTMLProps<HTMLPreElement>;
export type CodeProps = React.HTMLProps<HTMLElement>;