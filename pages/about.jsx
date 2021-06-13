import Link from 'next';
import Navbar from '../components/Navbar';

function About() {
    return (
        <>
            <Navbar />

            <section className="hero">
                <div className="container">
                    <div className="text-wrapper w-full">
                        <h1 className="title">Profile</h1>
                        <p className="description">Irure et cupidatat nisi fugiat sit duis commodo veniam ex consectetur et aliquip magna magna. Et aliqua in consectetur in laboris anim velit commodo. Et exercitation tempor labore voluptate eu id.</p>

                        <p className="description">In sit nisi veniam ad cillum tempor excepteur veniam laborum dolore. Cupidatat velit ea ex Lorem Lorem voluptate elit do cupidatat aliqua exercitation ad deserunt. Commodo esse nostrud quis fugiat officia nulla culpa.</p>

                        <p className="description">Esse esse fugiat in amet consequat aute laborum esse anim sunt eiusmod est. Aliqua incididunt incididunt do consequat sit. Id occaecat sunt ut consectetur nulla non et enim sit fugiat.</p>
                    </div>
                </div>

            </section>
        </>
    )
}

export default About;