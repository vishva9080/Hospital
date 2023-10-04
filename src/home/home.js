import Aboutus from "../about us/about us"
import Blog from "../blog/blog"
import Booking from "../booking/booking"
import Contact from "../contact us/contact"
import Header from "../header/header"
import Ourteam from "../our team/our team"
import Service from "../services/service"

function Home() {
    return (
        <>
            <Header />
            <Aboutus />
            <Ourteam />
            <Booking />
            <Service />
            <Blog />
            <Contact />
        </>

    )
}
export default Home