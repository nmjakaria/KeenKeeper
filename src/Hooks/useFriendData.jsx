import React, { use } from 'react';
const friendsPromise = fetch('/friendsData.json').then(res => res.json());
const useFriendData = () => {
    const friends = use(friendsPromise);
    return { friends };
};

export default useFriendData;