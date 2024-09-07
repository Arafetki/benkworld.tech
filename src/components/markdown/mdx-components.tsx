import { MDXRemote } from 'next-mdx-remote/rsc';
import { cn } from "@/lib/utils";
import Image from "next/image";
import { MdxCard } from "@/components/markdown/mdx-card"
import { Callout } from "@/components/markdown/mdx-callout";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';

import type {
    HeadingProps,
    AnchorProps,
    ParagraphProps,
    ListProps,
    OrderedListProps,
    ListItemProps,
    BlockquoteProps,
    ImageProps,
    HrProps,
    TableProps,
    TableRowProps,
    TableCellProps,
    PreProps,
    CodeProps
} from '@/types';

const components = {
  h1: ({ className, ...props }: HeadingProps) => (
    <h1
      className={cn(
        "mt-2 scroll-m-20 text-4xl font-bold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: HeadingProps) => (
    <h2
      className={cn(
        "mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: HeadingProps) => (
    <h3
      className={cn(
        "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: HeadingProps) => (
    <h4
      className={cn(
        "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: HeadingProps) => (
    <h5
      className={cn(
        "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: HeadingProps) => (
    <h6
      className={cn(
        "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: AnchorProps) => (
    <a
      className={cn("font-medium underline underline-offset-4", className)}
      {...props}
    />
  ),
  p: ({ className, ...props }: ParagraphProps) => (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: ListProps) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: OrderedListProps) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: ListItemProps) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: BlockquoteProps) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground",
        className
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: ImageProps) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn("rounded-md border", className)} alt={alt} {...props} />
  ),
  hr: ({ ...props }: HrProps) => <hr className="my-4 md:my-8" {...props} />,
  table: ({ className, ...props }: TableProps) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: TableRowProps) => (
    <tr
      className={cn("m-0 border-t p-0 even:bg-muted", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: TableCellProps) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: TableCellProps) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: PreProps) => (
    <pre
      className={cn(
        "mb-4 mt-6 px-2 overflow-x-auto rounded-lg border bg-stone-900 py-4",
        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: CodeProps) => (
    <code
      className={cn(
        "relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className
      )}
      {...props}
    />
  ),
  Image,
  MdxCard,
  Callout
}

type MdxProps = {
  code: string
}

export function Mdx({ code }: MdxProps) {
    return (
        <div className="mdx">
          <MDXRemote 
              source={code} 
              components={components}
              options={{
                  mdxOptions: {
                      rehypePlugins: [
                        [rehypePrettyCode,{theme: 'dark-plus', keepBackground: false}],
                      ],
                      remarkPlugins: [
                        remarkGfm,
                        remarkRehype
                      ]
                  },
              }}
          />
        </div>
    );
}