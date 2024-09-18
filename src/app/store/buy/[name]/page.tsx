import BuyTemplate from "@/components/template/buy"
interface BuyProps {
  params: {
    name: string
  }
}

function Buy({ params }: BuyProps) {
  const decodeUrl = decodeURI(params.name)

  return (
    <BuyTemplate name={decodeUrl} />
  )
}

export default Buy;