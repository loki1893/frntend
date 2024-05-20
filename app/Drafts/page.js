import UserDrafts from '@/app/ui/UserDrafts';
import ProfileNav from '@/app/ui/Navbar/ProfileNav'
import Category from '../ui/Category';
export default function page({ children }) {
  return (
    <section className="text-black">
      <div className="pb-[82px] pt-[32px]">
      <ProfileNav/>
      </div>
      <div className='py-[20px]'>
  <Category/>

      </div>
      <div className="flex justify-center items-center min-h-screen mt-10">
        <UserDrafts/>
      </div>
      
    </section>
  );
}