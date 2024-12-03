import { useRouter } from "next/router";

export default function Link(props) {
    const router = useRouter();
    function onClick(e) {
        e.preventDefault();
        router.events.emit("routeChangeStart",  "withDelay");
        setTimeout(() => {
            router.push(props.href);
        }, 850);
    }

    return (
        <a {...props} onClick={onClick}>{props.children}</a>
    )
}