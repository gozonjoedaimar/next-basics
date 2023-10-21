import { Url } from "next/dist/shared/lib/router/router";
import NextLink from "next/link";
import { twMerge } from "tailwind-merge";

interface LinkProps extends React.PropsWithChildren<React.AnchorHTMLAttributes<HTMLAnchorElement>> {}

export default function Link({ children, href, className, ...props }: LinkProps) {
    return (
        <NextLink
            href={href as Url}
            className={twMerge(
                "text-blue-300",
                className
            )}
            {...props}
        >{children}</NextLink>
    )
}