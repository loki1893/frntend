import BlogUI from './BlogUI'
import Navbar from '../Navbar'
// import axios from 'axios'

  export default function Dashboard(){

    return(
        <>
            <div className="font-Roboto">
                <Navbar/>
            </div>
            <div>
                <BlogUI/>
            </div>
        </>
    )
}