interface Props {
  Amount: number
  Category: string
}

const BoardScore = ({ Amount, Category }: Props) => {
  return (
    <h1 className="font-GothicSemiBold text-lg">({Amount}) {Category}</h1>
  );
}

export default BoardScore;