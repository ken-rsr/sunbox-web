"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebaseConfig"; // Corrected import path
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Image from "next/image"; // For the logo

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        setLoading(true);
        setError(null);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            // Handle successful login, e.g., redirect to a dashboard
            console.log("User logged in successfully!");
            // router.push('/dashboard'); // Example redirect
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("An unknown error occurred.");
            }
            console.error("Login error:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
            <Card className="w-full max-w-md bg-gray-800 border-gray-700 shadow-xl">
                <CardHeader className="text-center">
                    {/* Placeholder for logo - replace with your actual logo */}
                    <div className="mx-auto mb-6 flex justify-center">
                        {/* You will need to add a logo in your public folder and update the src path */}
                        {/* e.g., <Image src="/sunbox-logo.svg" alt="Sunbox Logo" width={100} height={100} /> */}
                        {/* Using a simple div as a visual placeholder for now */}
                        <div
                            className="w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center text-gray-800 text-4xl font-bold"
                            style={{
                                backgroundImage: "url(/sun_icon.svg)",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            {/* Icon similar to image, replace with actual image if possible */}
                            ⚡
                        </div>
                    </div>
                    <CardTitle className="text-3xl font-bold text-white">
                        Welcome to
                    </CardTitle>
                    <CardDescription className="text-5xl font-extrabold text-white mt-1">
                        Sunbox
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-300">
                            Email
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-yellow-500 focus:border-yellow-500"
                            disabled={loading}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password" className="text-gray-300">
                            Password
                        </Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-yellow-500 focus:border-yellow-500"
                            disabled={loading}
                        />
                    </div>
                    {error && (
                        <p className="text-sm text-red-500 text-center">
                            {error}
                        </p>
                    )}
                </CardContent>
                <CardFooter className="flex flex-col items-center space-y-4">
                    <Button
                        onClick={handleLogin}
                        className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3"
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </Button>
                    <Separator className="bg-gray-600 my-4" />
                    <div className="text-center text-sm text-gray-400">
                        <p>To create an account, please contact the</p>
                        <p>administrators at</p>
                        <a
                            href="mailto:sunbox041990@gmail.com"
                            className="text-yellow-500 hover:text-yellow-400 underline"
                        >
                            sunbox041990@gmail.com
                        </a>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}
