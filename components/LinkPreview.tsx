import React from 'react'
import Image from 'next/image'
// import fetcher from 'lib/fetcher';
import axios from 'axios';
import { Loading } from '@nextui-org/react';
// import useSWR from 'swr';
export default function LinkPreview({ children, href }) {
    let [imagePreview, setImagePreview] = React.useState("");
    let [isHovering, setIsHovering] = React.useState(false);
    let inImagePreview = false;
    let inLink = false;
  
    let handleMouseEnterImage = () => {
      inImagePreview = true;
      setIsHovering(true);
    };
  
    let handleMouseLeaveImage = () => {
      inImagePreview = false;
      setIsHovering(inLink);
    };
  
    let handleMouseEnterLink = () => {
      inLink = true;
      setIsHovering(true);
    };
  
    let handleMouseLeaveLink = () => {
      inLink = false;
      setIsHovering(inImagePreview);
    };
  
    let handleFetchImage = async (url) => {
        let {
          data: { image },
        } = await axios.get("/api/link-preview", {
          params: { url },
        });
        setImagePreview(image);
      };

    React.useEffect(() => {
      handleFetchImage(href);
  
      return () => setImagePreview("");
    }, [href]);
  
    return (
      <span className="relative z-10 inline-block">
        <a
          href={href}
          className={`${isHovering && "underline"}`}
          onMouseEnter={handleMouseEnterLink}
          onMouseLeave={handleMouseLeaveLink}
          onFocus={handleMouseEnterLink}
          onBlur={handleMouseLeaveLink}>
          {children}
        </a>
        {isHovering && (
          <a href={href}>
          
            <span
              className="w-36 h-28 absolute -top-32 left-1/2 transform -translate-x-[4.5rem] translate-y-8 flex items-start justify-center"
              onMouseLeave={handleMouseLeaveImage}
              onMouseEnter={handleMouseEnterImage}
              onFocus={handleMouseEnterImage}
              onBlur={handleMouseLeaveImage}
              data-tooltip-target="tooltip-default"
              >
              {imagePreview ? (
                <div 
                id="tooltip-default" 
                role="tooltip"
                className="overflow-visible"
                >
                <Image
                  className="w-36 h-24 rounded-md bg-white dark:bg-black shadow-lg object-cover object-top"
                  src={`data:image/jpeg;base64, ${imagePreview}`}
                  width="144px"
                  height="96px"
                  alt={children}
                />
                </div>
              ) : (
                <span className="w-36 h-24 rounded-md bg-white dark:bg-black shadow-lg flex items-center justify-center">
                  <Loading />
                </span>
              )}
            </span>
          </a>
        )}
      </span>
    );
  }  