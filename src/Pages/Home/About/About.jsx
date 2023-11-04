import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className='w-1/2 absolute top-[60%] left-[30%] shadow-2xl 
                     border-8 border-white rounded-lg' />
                </div>
                <div className='w-1/2 space-y-7 p-4'>
                <h2 className='font-bold text-[#ff5200]'>ABOUT US</h2>
                <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                <div className='className="py-6"'>
                    <p >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p >the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                </div>
                <button className="btn btn-secondary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;