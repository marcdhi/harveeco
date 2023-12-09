import Link from "next/link"
import { usePrivy, useWallets } from "@privy-io/react-auth";
import { useEffect, useState } from "react";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

export default function Navbar() {

    const { ready, authenticated, user, login, logout, signMessage } = usePrivy();
    const { wallets } = useWallets();
    const [signer, setSigner] = useState(null);
    const [loggingOut, setLoggingOut] = useState(false);

    console.log(ready, authenticated, wallets)

    const handleLogout = async () => {
        setLoggingOut(true); // Set loggingOut to true when logout begins
        await logout(); // Wait for logout to complete
        setLoggingOut(false); // Set loggingOut to false when logout ends
    };

    useEffect(() => {
        const getSigner = async () => {
            const embeddedWallet =
                wallets.find((wallet) => wallet.walletClientType === "privy") ||
                wallets[0];
            if (embeddedWallet) {
                const provider = await embeddedWallet.getEthersProvider();
                const signer = provider.getSigner();
                signer.signMessage = async (message) => {
                    const uiConfig = {
                        title: "Enable Secure Messaging with XMTP",
                        description:
                            "What is XMTP? XMTP provides apps and websites with private, secure, and encrypted messaging without your email or phone number. To turn on secure messaging for this app, tap the 'Enable XMTP' button.",
                        buttonText: "Enable XMTP",
                    };

                    const signature = await signMessage(message, uiConfig);

                    return signature;
                };
                setSigner(signer);
            }
        };

        if (wallets.length > 0) {
            getSigner();
        }
    }, [wallets]);

    return (
        <section class="w-full backdrop-blur-2xl border-b border-white/5 bg-current overflow-hidden z-20" aria-labelledby="navigation" id="navigation">
            <div class="relative mx-auto max-w-7xl w-full">
                <div class="flex relative px-8 flex-col lg:px-32 md:flex-row md:items-center md:justify-between md:px-12 mx-auto py-4 w-full" x-data="{ open: false }">
                    <div class="flex items-center text-white flex-row justify-between lg:justify-start">
                        <Link href="/" class="lg:pr-8">
                            <div class="items-center inline-flex">

                            </div>
                        </Link>
                        <button class="items-center inline-flex focus:outline-none justify-center text-white focus:text-white hover:text-indigo-400 md:hidden p-2 ">
                            <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" stroke-linejoin="round inline-flex" class="inline-flex" stroke-width="2"></path><path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round inline-flex" class="hidden" stroke-width="2"></path></svg>
                        </button>
                    </div>
                    <nav class="items-center flex-col flex-grow hidden md:flex md:flex-row md:justify-center md:pb-0" >
                        <Link href="/" class="text-sm text-white font-normal hover:text-white/50 lg:px-6 md:px-3 px-2 py-2">Home</Link>
                        <Link href="/#features" class="text-sm text-white font-normal hover:text-white/50 lg:px-6 md:px-3 px-2 py-2">Features</Link>
                        <Link href="/chatPush" class="text-sm text-white font-normal hover:text-white/50 lg:px-6 md:px-3 px-2 py-2">Discussion</Link>
                        <span className="flex items-center md:px-4 transition hover:text-primary">
                            {ready
                                ? (authenticated
                                    ? <button className=" bg-[#604085] text-white p-2 px-3 rounded-xl font-semibold" onClick={() => handleLogout()}>{loggingOut ? "logging out..." : "Logout Privy"}</button>
                                    : <button className=" bg-[#604085] text-white p-2 px-3 rounded-xl font-semibold" onClick={login}>Login Privy</button>
                                )
                                : <button className=" bg-[#624a7d] text-white p-2 px-3 rounded-xl font-semibold" onClick={login} disabled>Login Privy</button>
                            }
                        </span>
                        <div className="mt-12 lg:mt-0 flex gap-4">
                            {ready && wallets.length > 0
                                ? <HoverCard>
                                    <HoverCardTrigger asChild>
                                        <img
                                            alt="user"
                                            src={`https://api.dicebear.com/7.x/identicon/svg?seed=${wallets[0].address}`}
                                            className=" w-10 h-10 rounded-full"
                                        />
                                    </HoverCardTrigger>
                                    <HoverCardContent className="z-20">
                                        <button onClick={() => router.push("/profile/annotator")} className="hover:bg-slate-200 p-2 rounded-lg">
                                            Profile
                                        </button>
                                    </HoverCardContent>
                                </HoverCard>
                                : <></>
                            }
                        </div>
                    </nav >
                </div>
            </div >
        </section >
    )
}