import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Track from './Track';

export default function Layout({ children }: any) {
  return (
    <div>
      <Navbar />
      <div>
        < Sidebar/>
        <main>{children}</main>
      </div>
    </div>
  );
}
