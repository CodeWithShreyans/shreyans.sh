import Link from "next/link"

// import Logo from "@/../public/logo.png"

import "./header.css"

import { Github, Mail, Twitter } from "lucide-react"

import { Button } from "@/components/shadcn/button"
import { Separator } from "@/components/shadcn/separator"

const Footer = () => {
    return (
        <footer className="w-full" id="bottom">
            <Separator />
            <div
                className="flex h-[5vh] items-center justify-between p-1"
                id="footer"
            >
                <p className="cursor-default">Shreyans Jain</p>
                <div className="flex gap-1">
                    <Button asChild variant="ghost">
                        <Link href="https://github.com/destroyerxyz">
                            <Github size={20} />
                        </Link>
                    </Button>
                    <Button asChild variant="ghost">
                        <Link href="https://twitter.com/Destroyer_Xyz">
                            <Twitter size={20} />
                        </Link>
                    </Button>
                    <Button asChild variant="ghost">
                        <Link href="mailto:shreyans@shreyans.sh">
                            <Mail size={20} />
                        </Link>
                    </Button>
                </div>
            </div>
        </footer>
    )
}

export default Footer
