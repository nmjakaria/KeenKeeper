import React, { Suspense } from 'react';
import InfoSection from './InfoSection';
import FriendCard from '../shared/UI/FriendCard';
import Loading from '../Loading/Loading';
import useFriendData from '../../Hooks/useFriendData';



const FriendList = () => {
    const {friends} = useFriendData();
    return (
        <div className="cardSection grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                friends.map((friend, index) => (

                    <FriendCard key={index} friend={friend}></FriendCard>

                ))
            }
        </div>
    )
}
const AllFriends = () => {

    return (
        <div className='my-12'>
            <div className="container mx-auto">
                <h2 className='text-3xl font-bold mb-8'>Your Friends</h2>
                <Suspense fallback={<Loading />}>
                    <FriendList></FriendList>
                </Suspense>
            </div>

        </div>
    );
};

export default AllFriends;