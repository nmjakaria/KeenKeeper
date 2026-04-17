import React, { use } from 'react';
import InfoSection from './InfoSection';
import FriendCard from '../shared/UI/FriendCard';

const friendsPromise = fetch('/friendsData.json').then(res => res.json());
const AllFriends = () => {
    const friends = use(friendsPromise);

    return (
        <div className='my-12'>
            <div className="container mx-auto">
                <h2 className='text-3xl font-bold mb-8'>Your Friends</h2>
                <div className="cardSection grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        friends.map((friend, index) => (

                            <FriendCard key={index} friend={friend}></FriendCard>

                        ))
                    }
                </div>
            </div>

        </div>
    );
};

export default AllFriends;