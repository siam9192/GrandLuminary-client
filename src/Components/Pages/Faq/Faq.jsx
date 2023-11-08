import React, { useEffect, useState } from 'react';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
const Faq = () => {
    const [faqs,setFaqs] = useState([]);
    useEffect(()=>{
 fetch('/faqs.json')
 .then(res => res.json())
 .then(data => setFaqs(data))
    },[])
    return (
        <div>
            <Navbar></Navbar>
            <div className='py-8 min-h-[50vh] max-w-7xl mx-auto font-pop'>
               <div className='grid md:grid-cols-2 p-10'>
                <div className='space-y-5'>
                    <h1 className="md:text-8xl text-5xl text-black font-semibold">
                        FAQs
                    </h1>
                    <p className='text-black'>
                    Certainly, here's a description for an FAQ section:

"Explore our Frequently Asked Questions to find answers to common queries and gain a better understanding of our products, services, and policies. If you have any questions or concerns, you'll likely find the information you need right here."
                    </p>
                </div>
                <div>
                    <img src="/images/Form/faq.jpg" alt="" className='w-full'/>
                </div>
               </div>
               <div className='py-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
                {
       faqs.map((faq,index)=>{
        return <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" checked="checked" /> 
        <div className="collapse-title text-xl font-medium">
        {faq.question}
        </div>
        <div className="collapse-content"> 
          <p>{faq.answer}</p>
        </div>
      </div>
       })
                }
               </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Faq;
