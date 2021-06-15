import Link from "next/link"
import Image from 'next/image'

const Footer = () => {
    return (
        <>
            <div className="container footer mt-5">
                <hr />
            <div className="row">
                <div className="col-12 col-md-6 text-center">
                    <Link href="/">
                        <a>
                            Home
                        </a>
                    </Link>
                    <p>
                        Homepage is where you can search and find a movie you want to watch
                    </p>
                </div>
                <div className="col-12 col-md-6 text-center">
                <Link href="/about">
                        <a>
                            About
                        </a>
                    </Link>
                    <p>
                        About page is designed so that you can see authors of all assets in this website
                    </p>
                </div>
            </div>
            <br/>
            <div className="row">
            <div className="offset-5 col-2 text-center">
                    <a href="https://yts.mx/">
                        <Image src="/logo-YTS.svg" width={127} height={40}/>
                        <p>
                        Made using YTS API
                        </p>
                            
                        </a>
                </div>
            </div>
            <div className="text-center mt-2">
                <p>All rights are reserved to their respective owners</p>
            </div>
            </div>
            
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossOrigin="anonymous"></script>
        </>
    );
}
 
export default Footer;