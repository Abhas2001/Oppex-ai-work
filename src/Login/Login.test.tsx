// import { render, screen, fireEvent } from '@testing-library/react';
// import Login from './index';
// import { BrowserRouter } from 'react-router-dom';
// import { usercontext } from '../App';



// const fakeSetisuserLoggedin = jest.fn()
// const fakeSetloginemail = jest.fn()

// const fakelogindata = [
//     {
//         email:'test12@gmail.com',
//         password:'sdhgfsh',
//         username:'abhas'
//     }
// ]

// const renderLogin = () => {
//     render(
//         <BrowserRouter>
//         <usercontext.Provider value={{logindata:fakelogindata, setisuserLoggedin:fakeSetisuserLoggedin,setloginemail:fakeSetloginemail,loginemail:'test12@gmail.com'}}>
//             <Login/>

//         </usercontext.Provider>

        
        
        
//         </BrowserRouter>

//     )
// }

// describe('login component'()=>{
//    it('renders email and password',()=>{
//     renderLogin();
//     expect(screen.getByPlaceholderText('email address')).toBeInTheDocument();
//    })
// })