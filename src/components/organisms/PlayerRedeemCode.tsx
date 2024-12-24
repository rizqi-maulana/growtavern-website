import RedeemCodeCard from "../molecules/RedeemCodeCard";
interface RedeemCodeProps {
  redeem_code?: {
    code: string;
    expired: number;
    created: number;
  }[];
}

const PlayerRedeemCode = ({ redeem_code }: RedeemCodeProps) => {
  return (
    <div className="flex h-96 overflow-auto flex-col relative gap-3 rounded-xl w-full ">
      <h2>Your Redeem Code ({redeem_code?.length}):</h2>
      {
        redeem_code?.map((data, index) => (
          <RedeemCodeCard code={data.code} expired={data.expired} key={index} created={data.created} />
        ))
      }
    </div>
  );
}

export default PlayerRedeemCode;