import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const ShowContact = () => {
    // console.log(Namecontact);
    const {Namecontact} = useParams()
    const contacts = useSelector(state => state.contacts);
    const contact = contacts.filter(item => item.name === Namecontact)[0];

  return (
    <div className="font-sans antialiased">
    <div className="container mx-auto my-60">
        <div>
            <div className="bg-white relative shadow rounded-lg w-5/6 md:w-4/6  lg:w-3/6 xl:w-2/6 mx-auto">
                <div className="flex justify-center">
                        <img src={contact.imgUrl} alt="" className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"/>
                </div>
                
                <div className="mt-16">
                    <h1 className="font-bold text-center text-3xl text-gray-900">{contact.name}</h1>
                    <p className="text-center text-sm text-gray-400 font-medium">{contact.email}</p>

                    <div className="my-5 px-6">
                        <a href="#" className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white">Call: <span className="font-bold">{contact.tell}</span></a>
                    </div>
                    <div className="flex justify-between items-center my-5 px-6">
                        <a href="" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Facebook</a>
                        <a href="" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Twitter</a>
                        <a href="" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Instagram</a>
                        <a href="" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Email</a>
                    </div>

                    <div className="w-full">
                        <h3 className="font-medium text-gray-900 text-left px-6">Recent activites</h3>
                        <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                            <a href="#" className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                <img src='../../assets/svg/location-icon.svg' alt="" className="rounded-full h-6 shadow-md inline-block mr-2"/>
                                    address: 
                                    <span className="text-gray-500 text-xs">{contact.address}</span>
                            </a>

                            <a href="#" className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" className="rounded-full h-6 shadow-md inline-block mr-2"/>
                                    Age: 
                                    <span className="text-gray-500 text-xs">{contact.age}</span>
                            </a>

                            <a href="#" className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" className="rounded-full h-6 shadow-md inline-block mr-2"/>
                                  Status: 
                                <span className="text-gray-500 text-xs">{contact.status}</span>
                            </a>

                            <a href="#" className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" className="rounded-full h-6 shadow-md inline-block mr-2"/>
                                  Role: 
                                <span className="text-gray-500 text-xs">{contact.role}</span>
                            </a>

                            <a href="#" className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150 overflow-hidden">
                                <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" className="rounded-full h-6 shadow-md inline-block mr-2"/>
                                Added new rank
                                <span className="text-gray-500 text-xs">5 days ago</span>
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
  )
}

export default ShowContact