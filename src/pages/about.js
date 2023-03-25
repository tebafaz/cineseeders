import Image from 'next/image'

const About = () => {
    return (
        <div className="container floralwhite-text">
            <div className="row">
                <h1>Made by Tebafaz</h1>
                <h4>Source code <a href="https://github.com/tebafaz/nextjs-movie">here</a></h4>
                <p>Email: <a href="mailto:tebafaz@gmail.com">tebafaz@gmail.com</a></p>
            </div>
            <div className="row text-center my-5">
                <h3>Used stack of technologies and API</h3>
            </div>
            <div className="row my-5">
                <div className="text-center my-3 col-md-12 col-lg-2">
                    <a href="https://nextjs.org/">
                        <Image src="/nextjs-logo.png" width={200} height={200}/>
                    </a>
                </div>
                <div className="col-md-12 col-lg-10 my-auto">
                    <h2><a href="https://nextjs.org/">Next.js</a></h2>
                    <p>Next.js is an open-source React front-end development web framework created by Vercel that enables functionality such as server-side rendering and generating static websites for React based web applications. 
                        It is a production-ready framework that allows developers to quickly create static and dynamic JAMstack websites and is used widely by many large companies. 
                        Next.js is one of several recommended toolchains available when starting a new React app, all of which provide a layer of abstraction to aid in common tasks. 
                        Traditional React apps render all their content in the client-side browser, Next.js is used to extend this functionality to include applications rendered on the server side.
                    </p>
                </div>
            </div>
            <div className="row my-5">
            <div className="text-center my-3 col-md-12 col-lg-2 d-md-block d-lg-none">
                    <a href="https://getbootstrap.com/">
                        <Image src="/bootstrap-logo.png" width={200} height={200}/>
                    </a>
                </div>
                <div className="col-md-12 col-lg-10 my-auto text-end">
                    <h2><a href="https://getbootstrap.com/">Bootstrap 5</a></h2>
                    <p>Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. 
                        It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.
                        As of April 2021, Bootstrap is the tenth most starred project on GitHub, with more than 150,000 stars, behind freeCodeCamp (almost 312,000 stars), 
                        Vue.js framework, React library, TensorFlow and others.
                    </p>
                </div>
                <div className="text-center my-3 col-md-12 col-lg-2 d-none d-lg-block">
                    <a href="https://getbootstrap.com/">
                        <Image src="/bootstrap-logo.png" width={200} height={200}/>
                    </a>
                </div>
            </div>
            <div className="row my-5">
                <div className="text-center my-3 col-md-12 col-lg-2">
                    <a href="https://yts.mx">
                        <Image src="/yts-logo.png" width={200} height={200}/>
                    </a>
                </div>
                <div className="col-sm-12 col-lg-10 my-auto">
                    <h2><a href="https://yts.mx">YTS API</a></h2>
                    <p>YIFY Torrents or YTS was a peer-to-peer release group known for distributing large numbers of movies as free downloads through BitTorrent. 
                        YIFY releases were characterised through their consistent HD video quality in a small file size, which attracted many downloaders.
                        Their website called yts.mx had an API with over 30 000 movies which has been used for this website project.
                    </p>
                </div>
            </div>
            <div className="row text-center my-5">
                <h3>Used free pictures</h3>
            </div>
            <div className="row">
                <div className="col-4 col-md-2 text-center">
                    <a href="https://www.123freevectors.com/abstract-red-polygon-pattern-background-vector-art-131686/">
                        <Image className="image-cover" src="/abstract-polygon.jpg" width={200} height={200}/>
                        <p>Background image</p>
                    </a>
                </div>
                <div className="col-4 col-md-2 text-center">
                    <a href="https://www.vectorstock.com/royalty-free-vector/button-next-template-design-vector-33644854">
                        <Image className="image-cover" src="/arrow.png" width={200} height={200}/>
                        <p>Arrow used in pagination</p>
                    </a>
                </div>
                <div className="col-4 col-md-2 text-center">
                    <a href="https://loading.io/asset/488326">
                        <Image className="image-cover" src="/loading.svg" width={200} height={200}/>
                        <p>Loading<br/>(it is actually loaded)</p>
                    </a>
                </div>
                <div className="col-4 col-md-2 text-center">
                    <a href="https://www.flaticon.com/free-icon/popcorn_3851486?term=cinema&related_id=3851486">
                        <Image className="image-cover" src="/logoxs.png" width={200} height={200}/>
                        <p>Logo of this website</p>
                    </a>
                </div>
            </div>
        </div>
    );
}
 
export default About;