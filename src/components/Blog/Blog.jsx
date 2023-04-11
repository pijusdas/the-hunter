import React from 'react';

const Blog = () => {
    return (
        <div >
           <div className=' bg-slate-100 p-12'>
                <h1 className='text-center text-2xl font-bold -mt-5'>Blog</h1>

            </div>


            <div className=' flex flex-col justify-center items-center mt-32 px-20 gap-5'>
                <div className=' bg-purple-200 p-10 rounded-lg shadow-2xl'>
                    <h1 className=' text-xl font-bold mb-3'>When should you use context API?</h1>
                    <p className=' text-gray-500'>Context API is particularly useful in larger applications with complex component trees where passing props down the hierarchy can become tedious and error-prone. It can also simplify the process of managing state and sharing data between components.However, it is important to note that Context API should not be used as a replacement for prop drilling in all cases. In smaller applications or in cases where only a few components need access to certain data, it may be more appropriate to simply pass props down the hierarchy.</p>
                </div>
                <div className=' bg-purple-200 p-10 rounded-lg shadow-2xl'>
                    <h1 className=' text-xl font-bold mb-3'>What is a custom hook?</h1>
                    <p className=' text-gray-500'>Custom Hook is a JavaScript function which we create by ourselves, when we want to share logic between other JavaScript functions. It allows you to reuse some piece of code in several parts of your app.</p>
                </div>
                <div className=' bg-purple-200 p-10 rounded-lg shadow-2xl'>
                    <h1 className=' text-xl font-bold mb-3'>What is useRef?</h1>
                    <p className=' text-gray-500'>
                        Refs is the shorthand used for references in React. It is similar to keys in React. It is an attribute which makes it possible to store a reference to particular DOM nodes or React elements. It provides a way to access React DOM nodes or React elements and how to interact with it.</p>
                </div>
                <div className=' bg-purple-200 p-10 rounded-lg shadow-2xl'>
                    <h1 className=' text-xl font-bold mb-3'>What is useMemo?</h1>
                    <p className=' text-gray-500'>useMemo is a hook that is used in the functional component of React that returns a memoized value.The basic purpose of the useMemo hook is related to the fact that we try to avoid the unnecessary re-rendering of components and props in our program.

                        We want to make sure that only the components that witness a change in their values are re-rendered; otherwise, there’s no need to re-render the component and slow down the performance.

                        Only re-rendering certain components will make your program efficient and improve the overall performance of your React app.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;