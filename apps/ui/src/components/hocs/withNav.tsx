import { Link } from '@tanstack/react-router';
import { ComponentType, FC } from 'react';

interface WithNavProps {
}

const withNav = <P extends WithNavProps>(WrappedComponent: ComponentType<P>) => {

    const WithHOC: FC<P> = (props) => {
        return <>
            <div className="p-2 flex gap-2">
                <Link to="/" className="[&.active]:font-bold">
                    Home
                </Link>{' '}
                <Link to="/conversions" className="[&.active]:font-bold">
                    Conversions
                </Link>
            </div>
            <hr />
            <WrappedComponent {...props} />
        </>;
    };

    return WithHOC;
};

export default withNav;