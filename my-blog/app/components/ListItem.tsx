
import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";

type Props = {
    post: BlogPost
}

export default function ListItem({ post }: Props) {
    const { id, title, date } = post;
    // Check if the date is a valid string before formatting
    const formattedDate = date ? getFormattedDate(date) : "";

    return (
        <li className="mt-4 text-2xl dark:text-white/90">
            <Link className="underline hover:text-black/70 dark:hover:text-white" href={`/posts/${id}`}>{title}</Link>
            <br />
            <p className="text-sm mt-1">{formattedDate}</p>
        </li>
    );
}
