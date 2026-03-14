{product.map((ele,idx)=>{
        return  <a href="/product" key={idx} target='_blank'>
             <div className='cursor-pointer active:scale-90  rounded-sm w-[200px] h-[250px] flex border p-2  flex-col items-center ' key={idx}>
             <img className='object-contain h-[120px]' src={ele.image} alt="" />
           <p className='text-sm text-center mt-2'>
            {ele.title}
          </p>
        </div> 
        </a>
        
      })}