import  { useContext } from 'react';
import { cntstapi } from './App';

const Others = () => {
    const useContest = useContext(cntstapi);//এখানে এটা দিয়ে ডাটা রিসিসভ করা হয়েছে useContext দিয়ে যা একটি ভেরি এর মদ্ধে রাখা হয়েছে আর এই ভেরি কেই use করা হয় যেখানে যেখানে ডাটা ব্যবহার করতে চান
    return (
        <div>
            <p>others</p>
            <button onClick={useContest}>click</button>
        </div>
    );
};

export default Others;