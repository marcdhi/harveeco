"use client"

import { PushAPI, CONSTANTS } from "@pushprotocol/restapi";
import { ChatView, ChatUIProvider, darkChatTheme, MODAL_POSITION_TYPE } from "@pushprotocol/uiweb";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { usePrivy, useWallets } from "@privy-io/react-auth";
import { FaUserGroup } from "react-icons/fa6";

export const CreateGroup = async (name,description) => {

    console.log("creating...")
    const Pkey = `0x${process.env.NEXT_PUBLIC_PUSH_PRIVATE_KEY}`;
    const _signer = new ethers.Wallet(Pkey);

    const userAlice = await PushAPI.initialize(_signer, { env: 'staging' })

    const createdGroup = await userAlice.chat.group.create(
        name,
        {
            description: description,
            image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FImage&psig=AOvVaw16PEctH_L9HtCiWSSHn4qE&ust=1702201061445000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNjataCHgoMDFQAAAAAdAAAAABAD"
        }

    );
    // setGroupCreated(true);
    console.log(createdGroup)
    return createdGroup;
}

export default function PushChat() {

    const [signerInfo, setSignerInfo] = useState()
    const [groupCreated, setGroupCreated] = useState(false)
    const [chats, setChats] = useState({})
    const { wallets } = useWallets();
    const [activeChat, setActiveChat] = useState("")

    const Pkey = `0x${process.env.NEXT_PUBLIC_PUSH_PRIVATE_KEY}`;
    const _signer = new ethers.Wallet(Pkey);

    useEffect(() => {
        async function fetchChats() {

            const Pkey = `0x${process.env.NEXT_PUBLIC_PUSH_PRIVATE_KEY}`;
            const _signer = new ethers.Wallet(Pkey);

            const userAlice = await PushAPI.initialize(_signer, { env: CONSTANTS.ENV.STAGING });

            const aliceChats = await userAlice.chat.list("CHATS", { limit: 10 });

            console.log('Chats: \n', aliceChats);
            setChats(aliceChats)
        }
        if (wallets.length > 0) {
            fetchChats()
        }
    }, [wallets])

    return (
        <div className="flex gap-5 bg-black min-h-[calc(100vh-72px)]">
            <aside className="flex flex-col gap-4 px-3 static top-0">
                {/* <button className="bg-[#624a7d] text-white py-4 px-3 rounded-xl font-semibold w-full" onClick={() => CreateGroup}>make group</button> */}
                <div>
                    {chats.length > 0
                        ? (chats.map((data, index) => {
                            return (
                                <div onClick={() => setActiveChat(data.chatId)} className="p-3 flex w-[130px] rounded-md cursor-pointer bg-[#BC8DA0] hover:bg-[#D2B2BF] font-medium mb-3">
                                    <span><FaUserGroup /></span><span>{" " + data.groupInformation.groupName.slice(0, 8) + "..."}</span>
                                </div>
                            )
                        }))
                        : <></>
                    }
                </div>
            </aside>
            {
                _signer
                    ? (
                        <div className="h-[calc(100vh-80px)] w-[calc(100%-15px)] mr-2 sticky top-0">
                            <ChatUIProvider theme={darkChatTheme} signer={_signer} env="staging">
                                <ChatView
                                    chatId={activeChat}
                                    limit={10}
                                    isConnected={true}
                                    verificationFailModalPosition={MODAL_POSITION_TYPE.RELATIVE}
                                />
                            </ChatUIProvider>
                        </div>
                    )
                    : null
            }
        </div>
    )
}

