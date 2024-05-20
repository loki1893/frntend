import ProfileNav from '@/app/ui/Navbar/ProfileNav';
import Editor from '@/app/ui/Editor'
import Category from '../ui/Category';
export default function page({ children }) {
    return (
        <section className="text-black font-Roboto">
            <div>
                <ProfileNav />
            </div>
            
            <div className="flex justify-center items-center min-h-screen">
                <Editor />
            </div>
        </section>
    );
}