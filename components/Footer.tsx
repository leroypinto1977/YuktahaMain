import React from 'react'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-gray-100 p-6 text-center">
            <div className="container mx-auto flex justify-between items-center">
                <p>&copy; 2024 Ideathon Platform. All rights reserved.</p>
                <div className="space-x-4">
                    <Link href="/privacy" className="hover:text-blue-600">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-blue-600">Terms of Service</Link>
                    <Link href="/contact" className="hover:text-blue-600">Contact</Link>
                </div>
            </div>
        </footer>
    )
}