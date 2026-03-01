import React from 'react';
import referImg from '../../assets/images/referral/refer.png';

import facebook from '../../assets/images/social/facebook.png';
import messenger from '../../assets/images/social/messanger.png';
import gmail from '../../assets/images/social/gmail.png';
import whatsapp from '../../assets/images/social/whatsapp.png';
import instagram from '../../assets/images/social/instagram.png';
import vector from '../../assets/images/social/vector.png';

const socialImg = [
    { id: 1, img: facebook, title: "Facebook", link: "https://www.facebook.com/" },
    { id: 2, img: messenger, title: "Messenger", link: "https://www.messenger.com/" },
    { id: 3, img: gmail, title: "Gmail", link: "https://mail.google.com/mail/u/0/" },
    { id: 4, img: whatsapp, title: "WhatsApp", link: "https://www.whatsapp.com/" },
    { id: 5, img: instagram, title: "Instagram", link: "https://www.instagram.com/" },
    { id: 6, img: vector, title: "Vector" },
];

const Earn = () => {
    const referralCode = 'PIK2000';
    const referralLink = `https://yourapp.com/register?ref=${referralCode}`;

    const handleCopy = () => {
        navigator.clipboard.writeText(referralCode)
            .then(() => alert('Referral code copied to clipboard!'))
            .catch((err) => console.error('Failed to copy:', err));
    };

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Join and earn rewards!',
                    text: `Use my referral code: ${referralCode} and sign up.`,
                    url: referralLink,
                });
            } catch (err) {
                console.error('Share failed:', err);
            }
        } else {
            alert('Sharing is not supported on this browser.');
        }
    };

    return (
        <div className='max-w-[50%] mx-auto text-center'>
            <div className='h-[250px] w-[250px] mx-auto'>
                <img src={referImg} className='w-full' alt="refer-img" />
            </div>

            <h1
                className='capitalize font14 text-white w-fit rounded-sm mx-auto px-2 py-1 mt-0'
                style={{ background: 'linear-gradient(to right, #0A88FF,#8792FF)' }}
            >
                You have 300Pts
            </h1>

            <h1 className='capitalize font20 mt-3'>Refer Your Friend & Earn Cashback</h1>

            <div
                className="my-6 flex items-center gap-1 text-white w-fit mx-auto rounded-full pr-1 px-3 py-1 border border-[#024CAA]"
                style={{ background: 'linear-gradient(to right, #0A88FF,#8792FF)' }}
            >
                <div className='text-left items-center'>
                    <p className='capitalize font13'>Code</p>
                    <p className='uppercase font20'>{referralCode}</p>
                </div>
                <button
                    onClick={handleCopy}
                    className='font20 font-medium bg-white text-[#024CAA] rounded-full py-2 px-3 cursor-pointer'
                >
                    Copy Code
                </button>
            </div>

            {/* Social Media Icons */}
            <div className="grid grid-cols-3 gap-5 justify-center max-w-[40%] mx-auto mt-10">
                {socialImg.map((item) => (
                    item.link ? (
                        <a
                            key={item.id}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='bg-[#F6F6F6] flex h-[55px] w-[55px] p-2 rounded-md duration-75 hover:bg-[#FFE1CC] cursor-pointer items-center justify-center'
                            title={`Share via ${item.title}`}
                        >
                            <img src={item.img} alt={item.title} />
                        </a>
                    ) : (
                        <div
                            key={item.id}
                            onClick={handleShare}
                            className='bg-[#F6F6F6] flex h-[55px] w-[55px] p-2 rounded-md duration-75 hover:bg-[#FFE1CC] cursor-pointer items-center justify-center'
                            title={`Share via ${item.title}`}
                        >
                            <img src={item.img} alt={item.title} />
                        </div>
                    )
                ))}
            </div>


            <button
                className='bg-[#FF4980] border border-[#FF4980] mb-5 mt-10 text-white rounded-md py-2 px-5 font16 cursor-pointer hover:bg-white hover:text-[#FF4980]'
                onClick={handleShare}
            >
                Share Now
            </button>
        </div>
    );
};

export default Earn;
