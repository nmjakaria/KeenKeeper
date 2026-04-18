import { Circles } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div className="flex justify-center items-center min-h-50">
            <Circles
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="circles-loading"
                visible={true}
            />
        </div>
    );
};

export default Loading;