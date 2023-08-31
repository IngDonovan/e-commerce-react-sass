import './Layout.scss';

const Layout = ({ children }) => {
    return(
        <div className="layout flex flex-col items-center bg-[#212121] text-white">
            {children}  
        </div>
    );
};

export default Layout;