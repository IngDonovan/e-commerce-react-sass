import './Layout.scss';

const Layout = ({ children }) => {
    return(
        <main className="layout flex flex-col items-center bg-[#212121] text-white">
            {children}  
        </main>
    );
};

export default Layout;