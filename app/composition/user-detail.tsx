'use client';

import UserProfileCard from "./user-profile-card";

export default function UserDetail() {
    const user = {
        profilePicture:'profile/1.jpg',
        name: 'Haejin Park',
        email: 'luckyhaejin1126@naver.com'
    };
    const handleContactClick = () => {window.alert('Contract button clicked')};

    return (
        <>
            <h1>사용자 프로필</h1>
            <UserProfileCard user={user} onContactClick={handleContactClick}/>
        </>
    )
}