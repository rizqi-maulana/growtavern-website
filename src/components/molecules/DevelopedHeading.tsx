import Developed from '@/assets/image/developed.png'
import SectionHeader from '../atoms/SectionHeaderText';
import SectionHeaderIcon from '../atoms/SectionHeaderIcon';
const DevelopedHeading = () => {
  return (
    <div className='flex items-center gap-3 my-3'>
      <SectionHeader text="What do we make?" />
      <SectionHeaderIcon src={Developed} />
    </div>
  );
}

export default DevelopedHeading;