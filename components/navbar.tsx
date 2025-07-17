"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Palette, Menu, X, Wallet, User, LogOut } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isConnected, setIsConnected] = useState(false)

  const connectWallet = async () => {
    // Simulate wallet connection
    setIsConnected(true)
  }

  const disconnectWallet = () => {
    setIsConnected(false)
  }

  return (
    <nav className="bg-black/90 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Left side */}
          <Link href="/" className="flex items-center space-x-2">
            <Palette className="h-8 w-8 text-purple-600" />
            <span className="text-xl font-bold text-white">VeriArt</span>
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center justify-center space-x-8 flex-1">
            <Link href="/generate" className="text-gray-300 hover:text-purple-400 transition-colors">
              Generate
            </Link>
            <Link href="/gallery" className="text-gray-300 hover:text-purple-400 transition-colors">
              My Gallery
            </Link>
            <Link href="/marketplace" className="text-gray-300 hover:text-purple-400 transition-colors">
              Marketplace
            </Link>
            <Link href="/explore" className="text-gray-300 hover:text-purple-400 transition-colors">
              Explore
            </Link>
          </div>

          {/* Wallet Connection - Right side */}
          <div className="hidden md:flex items-center space-x-4">
            {!isConnected ? (
              <Button onClick={connectWallet} className="bg-purple-600 hover:bg-purple-700">
                <Wallet className="h-4 w-4 mr-2" />
                Connect Wallet
              </Button>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>0x1234...5678</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={disconnectWallet}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Disconnect
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 items-center">
              <Link href="/generate" className="text-gray-300 hover:text-purple-400 transition-colors">
                Generate
              </Link>
              <Link href="/gallery" className="text-gray-300 hover:text-purple-400 transition-colors">
                My Gallery
              </Link>
              <Link href="/marketplace" className="text-gray-300 hover:text-purple-400 transition-colors">
                Marketplace
              </Link>
              <Link href="/explore" className="text-gray-300 hover:text-purple-400 transition-colors">
                Explore
              </Link>
              {!isConnected ? (
                <Button onClick={connectWallet} className="bg-purple-600 hover:bg-purple-700 w-full max-w-xs">
                  <Wallet className="h-4 w-4 mr-2" />
                  Connect Wallet
                </Button>
              ) : (
                <div className="flex flex-col space-y-2 items-center">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>0x1234...5678</span>
                  </div>
                  <Button variant="outline" onClick={disconnectWallet} className="w-full max-w-xs bg-transparent">
                    <LogOut className="h-4 w-4 mr-2" />
                    Disconnect
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}