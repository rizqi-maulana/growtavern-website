import clsx from "clsx";
import { useCallback } from "react";
import { FaCopy } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

interface RedeemCodeCardProps {
  code: string;
  expired: number;
  created: number;
  key: number;
}

const RedeemCodeCard = ({ code, expired, key, created }: RedeemCodeCardProps) => {
  const TWELVE_HOURS_MS = 12 * 60 * 60 * 1000;
  const timePassed = Date.now() - created;
  const remainingTime = Math.max(TWELVE_HOURS_MS - timePassed, 0); // Jangan tampilkan angka negatif

  // Fungsi untuk mengubah milidetik ke format jam, menit, detik
  const formatTime = (ms: number) => {
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  };

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(code);
    toast.success("Copied to clipboard!");
  }, [code]);

  return (
    <>
      <Toaster />
      <div key={key} className="w-full rounded-xl h-10 flex justify-between items-center bg-[#162138] py-3 px-4">
        <div className="flex items-center gap-1">
          <p>
            <code>{code}</code>
          </p>
          <button>
            <FaCopy onClick={copyToClipboard} />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <p>{formatTime(remainingTime)}</p>
          <p
            style={{ borderRadius: 5 }}
            className={clsx("text-center px-2", {
              "text-green-700 bg-green-400": expired > 0,
              "text-red-700 bg-red-400": expired <= 0,
            })}
          >
            {expired > 0 ? "Active" : "Expired"}
          </p>
        </div>
      </div>
    </>
  );
};

export default RedeemCodeCard;
