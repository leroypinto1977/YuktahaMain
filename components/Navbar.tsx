import React from 'react'
import Link from 'next/link'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { LoginLink, LogoutLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs'
import { Button } from '@/components/ui/button'

export default async function Navbar() {
    const { getUser, isAuthenticated } = getKindeServerSession()
    const user = await getUser()

    const publicNavLinks = [
        { href: '/', label: 'Home' },
        { href: '/workshops', label: 'Workshops' },
        { href: '/events', label: 'Technical Events' },
        { href: '/about', label: 'About' }
    ]

    const privateNavLinks = [
        { href: '/dashboard', label: 'Dashboard' },
        { href: '/profile', label: 'Profile' }
    ]

    return (
        <nav className="flex justify-between items-center p-4 bg-gray-100">
            <div className="flex space-x-4">
                {publicNavLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="hover:text-blue-600">
                        {link.label}
                    </Link>
                ))}

                {isAuthenticated && privateNavLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="hover:text-blue-600">
                        {link.label}
                    </Link>
                ))}
            </div>

            <div>
                {!isAuthenticated ? (
                    <div className="space-x-2">
                        <LoginLink>
                            <Button variant="outline">Login</Button>
                        </LoginLink>
                        <RegisterLink>
                            <Button>Sign Up</Button>
                        </RegisterLink>
                    </div>
                ) : (
                    <div className="flex items-center space-x-2">
                        <span>{user?.given_name || 'User'}</span>
                        <LogoutLink>
                            <Button variant="destructive">Logout</Button>
                        </LogoutLink>
                    </div>
                )}
            </div>
        </nav>
    )
}