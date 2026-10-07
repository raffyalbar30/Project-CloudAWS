import { useState } from "react";
import { FaCopy } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaTelegram, FaWhatsapp } from "react-icons/fa6";
import { TbBrandWechat } from "react-icons/tb";

const CryptoPaymentModal = ({ isOpen, onClose, data, qyt }) => {
     
    const price = data?.price * qyt;
        
      const sosialsmedia = [
            {
                id: 5, 
                name: "Telegram", 
                icons: <FaTelegram className="bg-blue-400 p-2 rounded-lg"/>, 
                link: "/linktelegramlo"
             }, 
             {
                id: 6, 
                name: "Whatsapp", 
                icons: <FaWhatsapp className="bg-green-400 p-2 rounded-lg"/>, 
                link: "/linkwhatsapplo"
             }, 
              {
                id: 7, 
                name: "Wechat", 
                icons: <TbBrandWechat className="bg-gray-400 p-2 rounded-lg"/>, 
                link: "/linkwechatlo"
             }, 
        ]; 

    const [copied, setCopied] = useState(false);

    const cryptoAddress = "0x71C7656EC7ab88b098defB751B7401B5f6d8976F";

    const handleCopy = async () => {
        await navigator.clipboard.writeText(cryptoAddress);

        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">

            {/* Modal */}
            <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">

                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-100 hover:text-black"
                >
                   X
                </button>

                {/* Header */}
                <div className="mb-6 text-center">
                    <h2 className="text-xl font-bold text-gray-900">
                        Crypto Payment
                    </h2>

                    <p className="mt-2 text-sm text-gray-500">
                        Send your payment to the crypto address below.
                    </p>
                </div>

                {/* Crypto */}
                <div className="mb-5 rounded-xl border border-gray-200 bg-gray-50 p-4">
                    <p className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">
                        USDT Address
                    </p>

                    <div className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white p-2">
                        <input
                            type="text"
                            value={cryptoAddress}
                            readOnly
                            className="min-w-0 flex-1 bg-transparent px-2 text-xs text-gray-700 outline-none sm:text-sm"
                        />

                        <button
                            onClick={handleCopy}
                            className="flex h-9 shrink-0 items-center gap-1.5 rounded-md bg-black px-3 text-xs font-medium text-white transition hover:bg-gray-800"
                        >
                            {copied ? (
                                <>
                                    <FaCheckCircle size={15} />
                                    Copied
                                </>
                            ) : (
                                <>
                                    <FaCopy size={15} />
                                    Copy
                                </>
                            )}
                        </button>
                    </div>
                </div>
                <p className="text-center text-3xl text-blue-600 ">Price: ${price}</p>
                 <div className="flex flex-col items-center justify-center mt-2 gap-3 text-center">
                    <p className="text-sm text-gray-700">
                        And Confirmations to an admin
                    </p>

                    <div className="flex items-center justify-center gap-x-4">
                        {sosialsmedia.map((items, index) => (
                            <span
                                onClick={() => navigate(items.link)}
                                key={index}
                                className="cursor-pointer text-[35px] text-slate-100 transition hover:scale-110 lg:text-[45px]"
                            >
                                {items.icons}
                            </span>
                        ))}
                    </div>
                 </div>
                {/* Warning */}
                <div className="rounded-lg bg-yellow-50 p-3 text-xs leading-relaxed text-yellow-800">
                    Make sure you send the payment using the correct network.
                    Sending crypto through the wrong network may result in permanent loss.
                </div>

                {/* Close */}
                <button
                    onClick={onClose}
                    className="mt-5 h-10 w-full rounded-lg border border-gray-300 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                >
                    Done
                </button>

            </div>
        </div>
    );
};

export default CryptoPaymentModal;