'use client'
import { useState } from "react"
import {useSession} from 'next-auth/react'
import { usePathname,useRouter } from "next/navigation"
import Image from "next/image"


const PromptCard = ({post,handleTagClick,handleEdit,handleDelete}) => {

    const [copied,setCopied]=useState('')
    const handleCopy=()=>{
        setCopied(post.prompt)
        navigator.clipboard.writeText(post.prompt)
        setTimeout(()=>setCopied(''),3000)
    }

  return (
    <div className="prompt_card">
        <div className="flex justify-between items-start gap-5">
            <div className="flex-1 flex justify-start items-center gap-3 cursor pointer">
                <Image
                src='/public/assets/images/logo.svg'
                alt='user_image'
                width={40}
                height={40}
                className="rounded-full object-contain"/>

                <div className="flex-col flex">
                    <h3 className="font-satoshi font-semibold text-gray-900">
                        {/* {post.username} */}
                        Ansuman</h3>
                    <p className="font-inter text-sm text-gray-500">
                        {post.email}
                      ansumahptra123@gmail.com</p>

                </div>
            </div>
            <div className="copy_btn" onClick={handleCopy}>
                <Image 
                src={copied===post.prompt
                ?'public/assets/icons/tick.svg'
                :'public/assets/icons/copy.svg'}
                width={12}
                height={12}/>
            </div>
        </div>

        <p className="my-4 font-satoshi text-sm text-gray-700">{post.prompt}</p>
        <p className="font-inter text-sm blue_gradient cursor-pointer"
        onClick={()=>handleTagClick&&handleTagClick(post.tag)}>#{post.tag}</p>

        {sessionStorage?.user===post && pathname==='/profile'&& (
            <div className="mt-5 flex-center gap-4 border-t bordr-gray-100 pt-3">
                <p className="font-inter text-sm green_gradient cursor-pointer" onClick={handleEdit}>Edit</p>
                <p className="font-inter text-sm orange_gradient cursor-pointer" onClick={handleDelete}>Delete</p>
            </div>
        )}
    </div>
  )
}

export default PromptCard