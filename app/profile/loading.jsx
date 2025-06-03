import Image from "next/image";
import loader from "@public/assets/icons/loader.svg"

const Loading = () => {
  return (
    <>
    <div className='w-full hidden sm:block' >
      <Image
        src={loader}
        width={120}
        height={120}
        alt='loader'
        className='object-contain'
        />
    </div>
    <div className='w-full block sm:hidden ' >
      <Image
        src={loader}
        width={60}
        height={60}
        alt='loader'
        className='object-contain'
        />
    </div>

    </>
  );
};

export default Loading;
