"use client";
import HomeCard from '@/components/HomeCard';
import MeetingTypeList from '@/components/MeetingTypeList';
import Navbar from '@/components/Navbar'
import React, { useState } from 'react'
import MeetingModal from '@/components/MeetingModal';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { Call } from '@stream-io/video-react-sdk';

const now = new Date();

const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now);





const initialValues = {
  dateTime: new Date(),
  description: '',
  link: '',
};


const Page = () => {
  const router = useRouter();
  const [callDetail] = useState<Call>();
  const [meetingState, setMeetingState] = useState<
'isJoiningMeeting'| undefined
>(undefined);
const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${callDetail?.id}`;
const [values, setValues] = useState(initialValues);
  return (
    <div>
        <Navbar></Navbar>
        <br/><br/><br/><br/>
      
        <div className='mx-[100px]'>
        <section className="flex size-full flex-col gap-5 text-white">
      <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          {/* <h2 className="glassmorphism max-w-[273px] rounded py-2 text-center text-base font-normal">
            Upcoming Meeting at: 12:30 PM
          </h2> */}
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>

      <HomeCard
        img="/icons/join-meeting.svg"
        title="Join Meeting"
        description="via invitation link"
        className="color-2"
        handleClick={() => setMeetingState('isJoiningMeeting')}
      />

<MeetingModal
        isOpen={meetingState === 'isJoiningMeeting'}
        onClose={() => setMeetingState(undefined)}
        title="Type the link here"
        className="text-center"
        buttonText="Join Meeting"
        handleClick={() => router.push(values.link)}
      >
        <Input
          placeholder="Meeting link"
          onChange={(e) => setValues({ ...values, link: e.target.value })}
          className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </MeetingModal>


     
        </section>
        </div>
    </div>
  )
}

export default Page