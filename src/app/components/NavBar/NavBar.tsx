import React from "react";
import Link from 'next/link'


export default function NavBar () {
    return (
        <header>
            <nav className="border-nav-border shadow-sm border-b">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
                    <Link href="/">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">Modern Walk</span>
                    </Link>
                </div>
            </nav>
        </header>
    )
}