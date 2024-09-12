interface BuyProps {
  params: {
    name: string
  }
}

function Buy({ params }: BuyProps) {
  return (
    <>
      <h1>{params.name}</h1>
    </>
  );
}

export default Buy;