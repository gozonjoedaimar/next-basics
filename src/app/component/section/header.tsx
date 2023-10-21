import { twMerge } from "tailwind-merge";

interface HeaderProps extends React.PropsWithChildren<React.HTMLAttributes<HTMLHeadingElement>> {}

export default function Header({ children, className, ...props }: HeaderProps) {
    return (
        <h1
            className={twMerge(
                "text-xl",
                className
            )}
            {...props}
        >{children}</h1>
    )
}