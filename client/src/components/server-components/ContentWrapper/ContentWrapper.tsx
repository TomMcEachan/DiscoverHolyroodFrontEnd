import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export const ContentWrapper = ({ children }: Props) => {
    return (
        <main id="page-content" className="min-h-screen pb-40 md:mx-5 mx-0">
            {children}
        </main>
    );
};
