import { cn } from "@/lib/utils";
import React from 'react'

export default function Illustration() {
    return (
        <div
            className="relative w-[100%] flex h-[50rem] items-center justify-center bg-white dark:bg-yellow-400">
            <div
                className={cn(
                    "absolute inset-0",
                    "[background-size:70px_70px]",
                    "[background-image:linear-gradient(to_right,rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.3)_1px,transparent_1px)]"
                )}
            />
        </div>
    )
}