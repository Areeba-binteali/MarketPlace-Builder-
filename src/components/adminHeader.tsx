import Link from "next/link";

export default function AdminHeader(){
    return(
        <div className="adminHeader">
            <Link href="/admin">Dashboard</Link>
            <Link href="/admin/studio">Sanity Studio</Link>
            <Link href="/admin/snipcart">SnipCart</Link>
        </div>
    );
}