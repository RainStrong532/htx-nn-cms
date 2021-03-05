import React from 'react';

const ImageHolder = ({ src }) => {
    return (
        <>
           <div>
               <img src={src} alt="image"/>
           </div>
           <div>
               <div>
                   <img src="/images/trash-green.png" alt="icon"/>
               </div>
           </div>
        </>
    )
}
export default ImageHolder;