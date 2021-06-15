import Image from "next/image";

const Loading = () => {
    return (
        <div className="text-center loading">
            <Image src="/loading.svg" width={200} height={200}/>
        </div>
    );
}
 
export default Loading;