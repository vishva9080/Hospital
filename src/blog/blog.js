import './blog.css'
import backgroundimg from './assets/download.png';
import doc1 from './assets/download.jpg'
import doc2 from './assets/download (1).jpg'
import doc3 from './assets/download (2).jpg'
import doc4 from './assets/download (3).jpg'
import doc5 from './assets/download (4).jpg'
import doc6 from './assets/download (5).jpg'

function Blog() {
    return (
        <>
            <div className='blog-main-div' id='blog-main-div'>
                <p className='blog-head'>Testimonial</p>
                <p className='blog-sub'>See What Are The Patients
                    Saying About us</p>

                <div className='blog-banner'>
                    <div className='blog-left' >
                        <img src={backgroundimg} className='bg-1' />
                        <img src={doc1} className='doc-1' />
                        <img src={doc2} className='doc-2' />
                        <img src={doc3} className='doc-3' />
                        <img src={doc4} className='doc-4' />
                        <img src={doc5} className='doc-5' />
                        <img src={doc6} className='doc-6' />
                    </div>
                    <div className='blog-right'>
                        <div className='review'>
                            <p className='quote-up'><i class="fa-solid fa-quote-left"></i></p>
                            <p className='quote-down'><i class="fa-solid fa-quote-right"></i></p>
                            <p className='lorem1'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                 dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                 <p className='jhon'>Jhon Deo</p>
                                 <p className='patient'>-PATIENT</p>
                        </div>
                        <div className='review1'>
                            <p className='quote-up'><i class="fa-solid fa-quote-left"></i></p>
                            <p className='quote-down'><i class="fa-solid fa-quote-right"></i></p>
                            <p className='lorem1'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                 dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                 <p className='jhon'>Jhon Deo</p>
                                 <p className='patient'>-PATIENT</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Blog