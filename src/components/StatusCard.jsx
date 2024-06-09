import React from 'react';
import DOMPurify from 'dompurify';

const StatusCard = ({ data }) => {
    const sanitizedContent = DOMPurify.sanitize(data.content);

    return (
        <div className='w-full max-w-full flex space-x-2 p-4 border-b border-gray-200'>
            <img src={data.account.avatar} alt="user" className='w-10 h-10 rounded-full' />
            <div className='w-full flex flex-col'>
                {/* card header */}
                <div className='flex justify-between'>
                    <div>
                        <h1 className='font-bold'>{data.account.display_name}</h1>
                        <h2 className='text-txt-depressed'>@{data.account.username}</h2>
                    </div>
                    <button className='w-20 h-8 text-center font-semibold rounded-lg border border-txt-depressed text-accent hover:bg-accent hover:text-white transition-all'>Follow</button>
                </div>
                <div 
                    dangerouslySetInnerHTML={{ __html: sanitizedContent }} 
                    className='max-w-full pt-4 overflow-hidden text-wrap break-words'
                />
            </div>
        </div>
    );
}

export default StatusCard;
