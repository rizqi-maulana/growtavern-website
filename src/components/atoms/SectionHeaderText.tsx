interface Props {
  text: string,
}

const SectionHeader = ({ text }: Props) => {
  return (
    <h1 className="font-GothicExtraBold text-xl xl:text-2xl">
      {text}
    </h1>
  );
}

export default SectionHeader;