import WebConfig from '@/config'
import Logo from '@/utils/Logo'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='w-full bg-gray-100 ' >
           <div className='w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[70vw] mx-auto" mx-auto flex justify-between items-center py-16 '>
           <div className='flex gap-x-5 justify-center items-center'>
                <Logo />
                <ul className='flex flex-col gap-y-1' >
                    <li><p className='footerText'>{WebConfig.footer.section1.name}</p></li>
                    <li><p className='footerText' >{WebConfig.footer.section1.title}</p></li>
                </ul>
            </div>
            <div>
                <ul className='flex flex-col gap-y-1'>
                    <li>
                        <p className='footerText' >{WebConfig.footer.section2.title}</p>
                    </li>
                    <li>
                        <Link href={WebConfig.footer.section2.github.link} >
                            <p className='footerText underline'>{WebConfig.footer.section2.github.title}</p>
                        </Link> 
                    </li>
                </ul>
            </div>
           </div>
        </footer>
    )
}

export default Footer