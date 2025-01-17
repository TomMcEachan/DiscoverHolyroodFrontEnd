export const components = {
    h1: (props: any) => (
        <h1 className="text-4xl font-bold pb-2 text-base-100" {...props}>
            {props.children}
        </h1>
    ),
    h2: (props: any) => (
        <h2
            className="text-4xl font-bold pb-2 text-base-100 pt-2 mx-4"
            {...props}
        >
            {props.children}
        </h2>
    ),
    h3: (props: any) => (
        <>
            <h3
                className="text-2xl font-bold text-base-100 pb-2 mx-4 pt-4"
                {...props}
            >
                {props.children}
            </h3>
        </>
    ),
    h4: (props: any) => (
        <h4 className="text-lg font-bold text-base-100 pb-2" {...props}>
            {props.children}
        </h4>
    ),
    h5: (props: any) => (
        <h5 className="text-base font-bold text-base-100 pb-2" {...props}>
            {props.children}
        </h5>
    ),
    h6: (props: any) => (
        <h6 className="text-sm font-bold text-base-100 pb-2" {...props}>
            {props.children}
        </h6>
    ),
    p: (props: any) => (
        <p className="font-normal pb-4 text-lg text-base-100" {...props}>
            {props.children}
        </p>
    ),
    strong: (props: any) => (
        <strong className="font-bold" {...props}>
            {props.children}
        </strong>
    ),
    em: (props: any) => (
        <em className="italic" {...props}>
            {props.children}
        </em>
    ),
    blockquote: (props: any) => (
        <blockquote className="border-l-4 border-primary pl-4" {...props}>
            {props.children}
        </blockquote>
    ),
    ul: (props: any) => (
        <ul className="list-disc list-inside" {...props}>
            {props.children}
        </ul>
    ),
    ol: (props: any) => (
        <ol className="list-decimal list-inside text-base-100" {...props}>
            {props.children}
        </ol>
    ),
    li: (props: any) => (
        <li className="font-normal text-lg text-base-100 mx-4 mb-2" {...props}>
            {props.children}
        </li>
    ),
};
