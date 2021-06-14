import Link from 'next';
import Navbar from '../components/Navbar';
import Head from 'next/head';

function Contact() {
    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <Navbar />

            <section className="hero">
                <div className="container">
                    <div className="text-wrapper w-full">
                        <h1 className="title">Contact</h1>
                        <p className="description">Irure et cupidatat nisi fugiat sit duis commodo veniam ex consectetur et aliquip magna magna. Et aliqua in consectetur in laboris anim velit commodo. Et exercitation tempor labore voluptate eu id.</p>

                        <ul className="contact-links">
                            <li className="contact-item">Email: muhamadfikri64@yahoo.co.id</li>
                            <li className="contact-item">Phone: 085794301002</li>
                        </ul>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Contact;