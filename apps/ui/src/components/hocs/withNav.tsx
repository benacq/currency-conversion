import { ComponentType, FC } from 'react';
import Sidebar from '../sidebar';
import Nav from '../nav';

interface WithNavProps {
}

const withNav = <P extends WithNavProps>(WrappedComponent: ComponentType<P>) => {

    const WithHOC: FC<P> = (props) => {
        return <>

            <div className="flex">
                <div className="fixed h-full bg-white1 text-brown1 w-[15%] p-4">
                    <Sidebar />
                </div>

                <div className="flex-1 ml-[15%] bg-light1 min-h-screen">
                    <Nav/>
                    <div className='px-8 mt-12'>
                    <WrappedComponent {...props} />

                    </div>
                </div>
            </div>


        </>;
    };

    return WithHOC;
};

export default withNav;